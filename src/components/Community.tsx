import classNames from "classnames";

const resources = [
  {
    title: "Lorem ipsum dolor sit amet",
    detail:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do " +
      "eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    title: "Consectetur adipiscing elit",
    detail:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco " +
      "laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    title: "Sed do eiusmod tempor incididunt",
    detail:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse " +
      "cillum dolore eu fugiat nulla pariatur.",
  },
];

export default function Community() {
  return (
    <section id="community" className="bg-logoLime/10 px-8 py-16 md:py-20">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="font-diamond text-4xl text-darkGreen md:text-5xl">
          Community &amp; Resources
        </h2>
        <p className="font-aileron mt-4 text-base text-darkGreen/80 md:text-lg">
          A few ways we stay connected with clients and fellow therapists
          outside of individual sessions.
        </p>
      </div>

      <div className="mx-auto mt-12 grid max-w-5xl gap-8 md:grid-cols-2">
        <div
          className={classNames(
            "rounded-2xl border border-clay/30 bg-clay/10 p-6",
          )}
        >
          <h3 className="font-aileron-semibold-italic text-lg text-darkGreen">
            On Medicaid &amp; Medicare
          </h3>
          <p className="font-aileron mt-2 text-sm text-darkGreen/80">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Praesent libero quam, dignissim at posuere a, posuere at mi.
            Suspendisse potenti, nulla eget cursus sagittis, nunc elit
            laoreet justo, vitae sollicitudin mi ipsum nec dolor. Integer
            nec odio praesent libero sed cursus ante dapibus diam, sed
            nisi nulla quis sem at nibh elementum imperdiet.
          </p>
        </div>

        <div>
          <h3 className="font-aileron-semibold-italic text-lg text-darkGreen">
            Resources for Clients &amp; Therapists
          </h3>
          <ul className="mt-4 space-y-3">
            {resources.map((item) => (
              <li
                key={item.title}
                className="rounded-xl border border-logoGreen/40 bg-cream p-4"
              >
                <p className="font-aileron-semibold-italic text-sm text-darkGreen">
                  {item.title}
                </p>
                <p className="font-aileron mt-1 text-sm text-darkGreen/80">
                  {item.detail}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
