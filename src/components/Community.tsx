import classNames from "classnames";

export default function Community() {
  return (
    <div id="community">
      <div
        className={classNames(
          "divide-y divide-cream/15 rounded-2xl border",
          "border-gold/30 bg-cream/10",
        )}
      >
        <div className="p-4">
          <h3 className="font-aileron-semibold text-md md:text-lg text-cream">
            Resources for Clients &amp; Therapists
          </h3>
          <p className="font-aileron text-sm md:text-base text-cream/80">
            Community resources for clients and therapists are on the way,
            hoping to include guidance on Medicaid and Medicare coverage.
          </p>
        </div>
      </div>
    </div>
  );
}
