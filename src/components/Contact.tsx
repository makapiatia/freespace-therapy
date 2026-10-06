export default function Contact() {
  return (
    <div id="contact">
      <h2 className="font-diamond text-4xl text-cream md:text-5xl">
        Contact
      </h2>
      <p className="font-aileron mt-4 text-md text-cream/80 md:text-lg">
        Have questions or ready to schedule? Send a message and
        we&rsquo;ll follow up soon.
      </p>
      <div className="mt-4 text-start">
        <p className="font-aileron text-md md:text-lg text-cream/80">
          <a href="tel:+15555550182" className="hover:text-clay">
            (555) 555-0182
          </a>
          <br />
          <a
            href="mailto:megan@freespace-therapy.com"
            className="hover:text-clay"
          >
            megan@freespace-therapy.com
          </a>
        </p>
      </div>
    </div>
  );
}
