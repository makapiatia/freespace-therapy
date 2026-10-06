import classNames from "classnames";

export default function WorkingTogether() {
  return (
    <div
      className="bg-cream py-10 md:py-12"
    >
      <div
        className={classNames(
          "mx-auto grid max-w-5xl gap-6 px-8",
          "md:grid-cols-[3fr_2fr] md:gap-10",
        )}
      >
        <div
          className={classNames(
            "rounded-2xl border border-cream/10 bg-darkIndigo p-6 md:p-8",
          )}
        >
          <span className="block h-1 w-10 rounded-full bg-logoLime" />
          <h3 className="font-aileron-semibold mt-4 text-lg text-cream md:text-xl">
            Working Together
          </h3>
          <p className="font-aileron mt-3 text-sm text-cream/80 md:text-base">
            My approach to therapy is individualized, blending
            humanistic, psychodynamic, and strengths-based approaches
            with tools from CBT, DBT, and somatic work. I believe much
            of what shows up as stresses in people can be understood in
            terms of deep roots and old relational patterns; we may
            explore those together at your own pace. I welcome
            journaling, dreamwork, and other forms of creative
            expression as a part of our process.
          </p>
          <p className="font-aileron mt-4 text-sm text-cream/80 md:text-base">
            In all cases, the most successful therapy arises from a
            solid, trust-based, mutually respectful relationship, so
            building and maintaining that foundation will be an
            important part of our work together.
          </p>
        </div>

        <div
          className={classNames(
            "rounded-2xl border border-cream/10 bg-darkIndigo p-6 md:p-8",
          )}
        >
          <span className="block h-1 w-10 rounded-full bg-logoLime" />
          <h3 className="font-aileron-semibold mt-4 text-lg text-cream md:text-xl">
            What to Expect
          </h3>
          <p className="font-aileron mt-3 text-sm text-cream/80 md:text-base">
            At the first session you can expect some more information
            about therapy, a few initial assessment questions, and a
            lot of space to share what you are bringing. I will also
            answer any questions or concerns that you may have. Then,
            together, we will start to identify next steps toward the
            changes that you are looking to see.
          </p>
        </div>
      </div>
    </div>
  );
}
