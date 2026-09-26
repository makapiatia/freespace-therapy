import classNames from "classnames";

export default function Home() {
  return (
    <div
      className={classNames(
        "flex flex-1 flex-col items-center justify-center",
        "bg-background px-6 py-24 text-center dark:bg-black",
      )}
    >
      <blockquote
        className={classNames(
          "font-cooper-hewitt max-w-2xl text-2xl leading-relaxed text-foreground",
          "sm:text-3xl",
        )}
      >
        &ldquo;Not everything that is faced can be changed, but nothing can be
        changed until it is faced.&rdquo;
      </blockquote>
      <cite
        className={classNames(
          "font-cooper-hewitt mt-6 block text-lg text-attribution not-italic",
        )}
      >
        ― James Baldwin
      </cite>
    </div>
  );
}
