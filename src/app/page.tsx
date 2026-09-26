import classNames from "classnames";

export default function Home() {
  return (
    <div
      className={classNames(
        "flex flex-1 flex-col items-center justify-center",
        "bg-zinc-50 px-6 py-24 text-center dark:bg-black",
      )}
    >
      <blockquote
        className={classNames(
          "font-cooper-hewitt max-w-2xl text-2xl leading-relaxed text-zinc-900",
          "sm:text-3xl dark:text-zinc-50",
        )}
      >
        &ldquo;Not everything that is faced can be changed, but nothing can be
        changed until it is faced.&rdquo;
      </blockquote>
      <cite
        className={classNames(
          "font-cooper-hewitt mt-6 block text-lg text-zinc-500 not-italic dark:text-zinc-400",
        )}
      >
        ― James Baldwin
      </cite>
    </div>
  );
}
