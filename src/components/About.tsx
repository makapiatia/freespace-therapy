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
    <section id="about" className="bg-brown px-8 py-16 md:py-20">
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
          <h2 className="font-diamond text-4xl text-cream md:text-5xl">
            About &amp; Credentials
          </h2>
          <p className="font-cooper-hewitt-medium mt-2 text-xl text-logoLime">
            Megan Miller, LCSW
          </p>

          <div className="mt-3 flex flex-wrap gap-2">
            {styleTags.map((tag) => (
              <span
                key={tag}
                className="font-work-sans rounded-full bg-logoLime px-3 py-1 text-xs text-navy"
              >
                {tag}
              </span>
            ))}
          </div>

          <p className="font-cooper-hewitt mt-5 text-base text-cream/80 md:text-lg">
            I am a Licensed Clinical Social Worker with a passion for
            supporting adults of all ages and backgrounds who are navigating
            anxiety, loss, uncertainty, or feeling &lsquo;stuck&rsquo;. I see
            many people who express an uneasiness between the face they feel
            they need to show the world and the way they feel internally. If
            this sounds familiar, I offer a compassionate, non-judgmental
            space away from the pressures of everyday life to slow down and
            effectively explore your deepest concerns.
          </p>
          <p className="font-cooper-hewitt mt-4 text-base text-cream/80 md:text-lg">
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
                className="font-work-sans flex items-start gap-2 text-sm text-cream/80"
              >
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-logoLime" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
