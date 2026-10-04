import ContactForm from "./ContactForm";

export default function Contact() {
  return (
    <div id="contact">
      <h2 className="font-diamond text-4xl text-darkGreen md:text-5xl">
        Get in Touch
      </h2>
      <p className="font-cooper-hewitt mt-4 text-base text-darkGreen/80 md:text-lg">
        Have questions or ready to schedule? Send a message below and
        we&rsquo;ll follow up soon.
      </p>

      <div className="mt-8">
        <ContactForm />
      </div>
    </div>
  );
}
