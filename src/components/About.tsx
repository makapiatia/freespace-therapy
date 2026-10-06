import Image from "next/image";
import classNames from "classnames";

const credentials = [
  "LCSW, Licensed Clinical Social Worker, New Jersey",
  "MSW, Rutgers University College, New Brunswick",
  "4 Years of Experience",
  "Virtual & In-Person Sessions",
];

const styleTags = ["Empowering", "Warm", "Challenging"];

export default function About() {
  return (
    <section
      id="about"
      className="border-y-2 border-logoGreen/30 bg-logoLime/10 px-8 py-10 md:py-12"
    >
      <div
        className={classNames(
          "mx-auto grid max-w-5xl gap-10 md:grid-cols-[auto_1fr]",
          "md:items-start",
        )}
      >
        <span
          className={classNames(
            "relative mx-auto block h-36 w-36 shrink-0 overflow-hidden",
            "rounded-full ring-4 ring-logoLime md:mx-0",
          )}
        >
          <Image
            src="/photos/auntmegan.png"
            alt="Megan Miller, LCSW"
            fill
            sizes="144px"
            className="object-cover"
          />
        </span>

        <div>
          <h2 className="font-diamond text-4xl text-darkGreen md:text-5xl">
            Meet Megan
          </h2>
          <p className="font-aileron-semibold mt-2 text-xl text-mediumGreen">
            Megan Miller, LCSW
          </p>

          <p className="font-aileron mt-5 text-base text-darkGreen/80 md:text-md">
            I am a Licensed Clinical Social Worker with a passion for
            supporting adults of all ages and backgrounds who are navigating
            anxiety, loss, uncertainty, or feeling &lsquo;stuck&rsquo;. I see
            many people who express an uneasiness between the face they feel
            they need to show the world and the way they feel internally. If
            this sounds familiar, I offer a compassionate, non-judgmental
            space away from the pressures of everyday life to slow down and
            effectively explore your deepest concerns.
          </p>
          <p className="font-aileron mt-4 text-base text-darkGreen/80 md:text-md">
            Before returning to school for an MSW, I worked in a creative
            professional field. I believe that living itself is a creative
            act, worthy of ongoing examination and the application of
            intention. I also have special experience with people who have
            been impacted by the criminal legal system. My varied background
            gives me depth to work effectively with a diversity of
            challenges including anxiety, major life transitions, grief and
            loss, anger management, career and relationship challenges,
            effects of trauma, and impacts of interpersonal or systemic
            harm.
          </p>

          <ul className="mt-6 space-y-2">
            {credentials.map((item) => (
              <li
                key={item}
                className="font-work-sans flex items-center gap-2 text-sm text-darkGreen/80"
              >
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-clay" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
