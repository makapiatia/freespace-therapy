import classNames from "classnames";

const hours = [
  { day: "Monday – Thursday", time: "9:00am – 7:00pm" },
  { day: "Friday", time: "9:00am – 3:00pm" },
  { day: "Saturday", time: "By appointment" },
  { day: "Sunday", time: "Closed" },
];

export default function HoursLocation() {
  return (
    <section
      className={classNames(
        "mx-auto max-w-5xl px-8 py-16 md:py-20",
        "border-t border-logoGreen/20",
      )}
    >
      <h2 className="font-diamond text-center text-3xl text-darkGreen md:text-4xl">
        Hours &amp; Location
      </h2>

      <div className="mt-10 grid gap-10 sm:grid-cols-2">
        <div>
          <h3 className="font-cooper-hewitt-medium text-lg text-darkGreen">
            Visit or Reach Us
          </h3>
          <p className="font-cooper-hewitt mt-3 text-sm text-darkGreen/80">
            123 Placeholder Lane, Suite 2
            <br />
            Faketown, CA 00000
          </p>
          <p className="font-cooper-hewitt mt-3 text-sm text-darkGreen/80">
            (555) 555-0182
            <br />
            hello@freespacetherapy.example
          </p>
        </div>

        <div>
          <h3 className="font-cooper-hewitt-medium text-lg text-darkGreen">
            Office Hours
          </h3>
          <dl
            className={classNames(
              "font-work-sans mt-3 grid grid-cols-[auto_1fr] gap-x-6 gap-y-2",
              "text-sm text-darkGreen/80",
            )}
          >
            {hours.map((item) => (
              <div key={item.day} className="contents">
                <dt>{item.day}</dt>
                <dd className="text-right">{item.time}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
