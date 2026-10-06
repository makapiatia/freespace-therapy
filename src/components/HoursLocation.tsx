import classNames from "classnames";

const hours = [
  { day: "Monday – Thursday", time: "9:00am – 7:00pm" },
  { day: "Friday", time: "9:00am – 3:00pm" },
  { day: "Saturday", time: "By appointment" },
  { day: "Sunday", time: "Closed" },
];

export default function HoursLocation() {
  return (
    <div>
      <h2 className="font-diamond text-4xl text-cream md:text-5xl">
        Hours &amp; Location
      </h2>

      <div className="mt-6 space-y-8">
        <div>
          <h3 className="font-aileron-semibold text-lg text-cream">
            Visit or Reach Us
          </h3>
          <p className="font-aileron mt-3 text-base text-cream/80">
            123 Placeholder Lane, Suite 2
            <br />
            Faketown, CA 00000
          </p>
          <p className="font-aileron mt-3 text-base text-cream/80">
            <a href="tel:+15555550182" className="hover:text-clay">
              (555) 555-0182
            </a>
            <br />
            <a
              href="mailto:hello@freespacetherapy.example"
              className="hover:text-clay"
            >
              hello@freespacetherapy.example
            </a>
          </p>
        </div>

        <div>
          <h3 className="font-aileron-semibold text-lg text-cream">
            Office Hours
          </h3>
          <dl
            className={classNames(
              "font-work-sans mt-3 grid max-w-xs grid-cols-[auto_1fr]",
              "gap-x-6 gap-y-2 text-sm text-cream/80",
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
    </div>
  );
}
