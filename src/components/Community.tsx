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
    <section id="community" className="bg-logoLime/10 px-8 py-16 md:py-20">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="font-diamond text-4xl text-darkGreen md:text-5xl">
          Community &amp; Resources
        </h2>
        <p className="font-cooper-hewitt mt-4 text-base text-darkGreen/80 md:text-lg">
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
          <h3 className="font-cooper-hewitt-medium text-lg text-darkGreen">
            On Medicaid &amp; Medicare
          </h3>
          <p className="font-cooper-hewitt mt-2 text-sm text-darkGreen/80">
            We believe care should be accessible, and we set aside time
            each month to talk openly with clients and clinicians about
            navigating coverage together.
          </p>
        </div>

        <div>
          <h3 className="font-cooper-hewitt-medium text-lg text-darkGreen">
            Resources for Clients &amp; Therapists
          </h3>
          <ul className="mt-4 space-y-3">
            {resources.map((item) => (
              <li
                key={item.title}
                className="rounded-xl border border-logoGreen/40 bg-cream p-4"
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
      </div>
    </section>
  );
}
