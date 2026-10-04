import classNames from "classnames";

const credentials = [
  "Licensed Marriage & Family Therapist (LMFT #000000)",
  "M.A. in Clinical Psychology, Placeholder University",
  "10+ Years in Private Practice",
  "Trained in EMDR & Somatic Approaches",
];

export default function About() {
  return (
    <section id="about" className="bg-brown px-8 py-16 md:py-20">
      <div
        className={classNames(
          "mx-auto grid max-w-5xl gap-10 md:grid-cols-[auto_1fr]",
          "md:items-start",
        )}
      >
        <div
          className={classNames(
            "mx-auto h-32 w-32 rounded-full bg-logoLime",
            "flex items-center justify-center md:mx-0",
          )}
        >
          <span className="font-diamond text-3xl text-navy">JH</span>
        </div>

        <div>
          <h2 className="font-diamond text-3xl text-cream md:text-4xl">
            About &amp; Credentials
          </h2>
          <p className="font-cooper-hewitt-medium mt-2 text-lg text-logoLime">
            Jordan Hale, LMFT
          </p>
          <p className="font-cooper-hewitt mt-4 text-base text-cream/80">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            ullamcorper nulla non metus auctor fringilla. Cras mattis
            consectetur purus sit amet fermentum.
          </p>
          <p className="font-cooper-hewitt mt-4 text-base text-cream/80">
            Vestibulum id ligula porta felis euismod semper. Maecenas sed
            diam eget risus varius blandit sit amet non magna curabitur
            blandit tempus porttitor.
          </p>

          <ul className="mt-6 space-y-2">
            {credentials.map((item) => (
              <li
                key={item}
                className="font-work-sans flex items-start gap-2 text-sm text-cream/80"
              >
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-clay" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
