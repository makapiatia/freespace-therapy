import classNames from "classnames";

const specialties = [
  {
    title: "Individual Therapy",
    body:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer " +
      "nec odio praesent libero sed cursus ante dapibus diam.",
  },
  {
    title: "Anxiety & Stress",
    body:
      "Sed cursus ante dapibus diam sacelus nec, pulvinar eget, " +
      "sollicitudin venenatis cum sociis natoque penatibus magnis.",
  },
  {
    title: "Relationships & Connection",
    body:
      "Nulla consequat massa quis enim donec pede justo fringilla vel " +
      "aliquet nec vulputate eget arcu in enim justo rhoncus.",
  },
  {
    title: "Life Transitions",
    body:
      "Aenean commodo ligula eget dolor aenean massa cum sociis natoque " +
      "penatibus et magnis dis parturient montes nascetur.",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className={classNames(
        "mx-auto max-w-5xl px-8 py-16 md:py-20",
        "border-t border-logoGreen/20",
      )}
    >
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="font-diamond text-3xl text-darkGreen md:text-4xl">
          Services &amp; Specialties
        </h2>
        <p className="font-cooper-hewitt mt-4 text-base text-darkGreen/80">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
          libero quam, dignissim at posuere a, posuere at mi.
        </p>
      </div>

      <div className="mt-12 grid gap-6 sm:grid-cols-2">
        {specialties.map((item) => (
          <div
            key={item.title}
            className={classNames(
              "rounded-2xl border border-logoGreen/30 bg-white/40 p-6",
            )}
          >
            <h3 className="font-cooper-hewitt-medium text-lg text-darkGreen">
              {item.title}
            </h3>
            <p className="font-cooper-hewitt mt-2 text-sm text-darkGreen/80">
              {item.body}
            </p>
          </div>
        ))}
      </div>

      <div className="mx-auto mt-14 max-w-2xl text-center">
        <h3 className="font-cooper-hewitt-medium text-xl text-darkGreen">
          What to Expect
        </h3>
        <p className="font-cooper-hewitt mt-3 text-base text-darkGreen/80">
          Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
          posuere cubilia curae mauris viverra diam vitae quam suscipit, ut
          aliquam dolor tristique.
        </p>
      </div>
    </section>
  );
}
