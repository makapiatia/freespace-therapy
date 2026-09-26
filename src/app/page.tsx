import classNames from "classnames";

export default function Home() {
  return (
    <div
      className={classNames(
        "flex flex-1 flex-col items-center justify-center",
        "bg-cream px-8 py-24 text-center dark:bg-black",
      )}
    >
      <blockquote
        className={classNames(
          "font-cooper-hewitt-medium max-w-2xl text-xl text-darkGreen",
          "md:text-3xl max-[500px]:max-w-60",
        )}
      >
        &ldquo;Not everything that is faced can be changed,
        <br />
        but nothing can be changed until it is faced.&rdquo;
      </blockquote>
      <cite
        className={classNames(
          "font-cooper-hewitt mt-2 block text-sm text-mediumGreen not-italic",
          "md:text-lg",
        )}
      >
        ― James Baldwin
      </cite>
    </div>
  );
}
