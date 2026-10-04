import classNames from "classnames";

const resources = [
  {
    title: "Monthly Client Support Circle",
    detail: "First Tuesday of every month, 6:00pm — open to current clients.",
  },
  {
    title: "Therapist Peer Consultation Group",
    detail: "Biweekly, open to local clinicians building their own practice.",
  },
  {
    title: "Medicaid & Medicare Enrollment Office Hours",
    detail: "Drop-in support, no appointment needed, every other Friday.",
  },
];

export default function Community() {
  return (
    <section
      id="community"
      className={classNames(
        "mx-auto max-w-5xl px-8 py-16 md:py-20",
        "border-t border-logoGreen/20",
      )}
    >
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="font-diamond text-3xl text-darkGreen md:text-4xl">
          Community &amp; Resources
        </h2>
        <p className="font-cooper-hewitt mt-4 text-base text-darkGreen/80">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>

      <div
        className={classNames(
          "mx-auto mt-10 max-w-2xl rounded-2xl bg-clay/10 p-6",
          "border border-clay/30",
        )}
      >
        <h3 className="font-cooper-hewitt-medium text-lg text-darkGreen">
          On Medicaid &amp; Medicare
        </h3>
        <p className="font-cooper-hewitt mt-2 text-sm text-darkGreen/80">
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
          nisi ut aliquip ex ea commodo consequat. We believe care should be
          accessible, and we set aside time each month to talk openly about
          navigating coverage together.
        </p>
      </div>

      <div className="mx-auto mt-12 max-w-2xl">
        <h3 className="font-cooper-hewitt-medium text-center text-xl text-darkGreen">
          Resources for Clients &amp; Therapists
        </h3>
        <ul className="mt-6 space-y-4">
          {resources.map((item) => (
            <li
              key={item.title}
              className="rounded-xl border border-logoGreen/30 bg-white/40 p-4"
            >
              <p className="font-cooper-hewitt-medium text-sm text-darkGreen">
                {item.title}
              </p>
              <p className="font-cooper-hewitt mt-1 text-sm text-darkGreen/80">
                {item.detail}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
