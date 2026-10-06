import Image from "next/image";
import classNames from "classnames";

const credentials = [
  "LCSW, Licensed Clinical Social Worker, New Jersey",
  "MSW, Rutgers University College, New Brunswick",
  "4 Years of Experience",
  "Virtual & In-Person Sessions",
];


export default function About() {
  return (
    <section
      id="about"
      className="border-t-2 border-logoLime/50 bg-logoLime/20 px-8 py-10 md:py-12"
    >
      <div
        className={classNames(
          "mx-auto grid max-w-5xl grid-cols-[1fr_auto] gap-x-6 gap-y-6",
          "md:grid-cols-[auto_1fr] md:items-start md:gap-y-4 md:gap-x-10",
        )}
      >
        <span
          className={classNames(
            "relative col-start-2 row-start-1 block h-28 w-28 shrink-0",
            "justify-self-center overflow-hidden rounded-full ring-4",
            "ring-logoLime md:col-start-1 md:row-span-2 md:row-start-1",
            "md:h-36 md:w-36 md:justify-self-start",
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

        <div
          className={classNames(
            "about-header col-start-1 row-start-1 flex h-full flex-col",
            "justify-end md:col-start-2",
          )}
        >
          <h2 className="font-diamond text-3xl text-darkTeal md:text-5xl">
            Meet Megan
          </h2>
          <p className="font-aileron-semibold text-xl text-darkTeal">
            Megan Miller, LCSW
          </p>
        </div>

        <div className="col-span-2 row-start-2 md:col-span-1 md:col-start-2">
          <p className="font-aileron text-sm text-darkTeal/80 md:text-md">
            I am a Licensed Clinical Social Worker with a passion for
            supporting adults of all ages and backgrounds who are navigating
            anxiety, loss, uncertainty, or feeling &lsquo;stuck&rsquo;. I see
            many people who express an uneasiness between the face they feel
            they need to show the world and the way they feel internally. If
            this sounds familiar, I offer a compassionate, non-judgmental
            space away from the pressures of everyday life to slow down and
            effectively explore your deepest concerns.
          </p>
          <p className="font-aileron mt-4 text-sm text-darkTeal/80 md:text-md">
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
                className={classNames(
                  "flex items-center gap-2 rounded-xl bg-logoLime/75 max-w-[320px]",
                  "px-4 py-2 font-work-sans text-sm text-darkTeal",
                )}
              >
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-cream" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
