export default function Contact() {
  return (
    <div id="contact">
      <h2 className="font-diamond text-3xl text-cream md:text-5xl">
        Contact
      </h2>
      <p className="font-aileron mt-2 text-md text-cream/80 md:text-lg">
        Have questions or ready to schedule? Send a message and
        we&rsquo;ll follow up soon.
      </p>
      <div className="mt-4 text-start">
        <p className="font-aileron text-md md:text-lg text-cream/80">
          <a href="tel:+10000000000" className="hover:text-logoLime">
            (000) 000-0000
          </a>
          <br />
          <a
            href="mailto:megan@freespace-therapy.com"
            className="hover:text-logoLime"
          >
            megan@freespace-therapy.com
          </a>
        </p>
      </div>
    </div>
  );
}
