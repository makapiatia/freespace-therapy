import Image from "next/image";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import classNames from "classnames";

export default async function LoginPage({
  searchParams,
}: {
  searchParams: Promise<{ from?: string; error?: string }>;
}) {
  const params = await searchParams;
  const from = params.from && params.from.startsWith("/") ? params.from : "/";
  const hasError = params.error === "1";

  async function login(formData: FormData) {
    "use server";

    const password = formData.get("password");
    const redirectTo = formData.get("from");
    const safeRedirectTo =
      typeof redirectTo === "string" && redirectTo.startsWith("/")
        ? redirectTo
        : "/";

    if (password === process.env.SITE_PASSWORD) {
      const cookieStore = await cookies();
      cookieStore.set("site_auth", process.env.SITE_PASSWORD ?? "", {
        httpOnly: true,
        secure: true,
        sameSite: "lax",
        path: "/",
        maxAge: 60 * 60 * 24 * 30,
      });
      redirect(safeRedirectTo);
    }

    redirect(
      `/login?from=${encodeURIComponent(safeRedirectTo)}&error=1`,
    );
  }

  return (
    <main className="flex min-h-dvh flex-col items-center justify-center bg-cream px-8 text-center">
      <span className="relative block h-28 w-28 shrink-0 overflow-hidden rounded-full">
        <Image
          src="/logos/1x/greenDragonflyLogo.png"
          alt="Freespace Therapy"
          fill
          sizes="120px"
          priority
          className="object-cover"
        />
      </span>

      <h1 className="font-diamond mt-6 text-3xl text-darkTeal">
        Free Space
      </h1>
      <p className="font-aileron mt-2 max-w-xs text-sm text-darkTeal/70">
        This site is password protected. Please enter the password to
        continue.
      </p>

      <form
        action={login}
        className="mt-6 flex w-full max-w-xs flex-col gap-3"
      >
        <input type="hidden" name="from" value={from} />
        <input
          type="password"
          name="password"
          required
          autoFocus
          placeholder="Password"
          className={classNames(
            "w-full rounded-lg border border-darkTeal/20 bg-white px-4 py-2.5",
            "font-work-sans text-sm text-darkTeal outline-none",
            "transition-colors focus:border-logoGreen",
          )}
        />

        {hasError && (
          <p className="font-work-sans text-sm text-red-600">
            Incorrect password, please try again.
          </p>
        )}

        <button
          type="submit"
          className={classNames(
            "rounded-full bg-gold/90 px-6 py-3 font-work-sans text-sm font-bold",
            "text-darkGreen transition-colors hover:bg-gold/85",
          )}
        >
          Enter
        </button>
      </form>
    </main>
  );
}
