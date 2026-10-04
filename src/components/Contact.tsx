import classNames from "classnames";
import ContactForm from "./ContactForm";

export default function Contact() {
  return (
    <section
      id="contact"
      className={classNames(
        "mx-auto max-w-5xl px-8 py-16 md:py-20",
        "border-t border-logoGreen/20",
      )}
    >
      <div className="mx-auto max-w-md text-center">
        <h2 className="font-diamond text-3xl text-darkGreen md:text-4xl">
          Get in Touch
        </h2>
        <p className="font-cooper-hewitt mt-4 text-base text-darkGreen/80">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Reach out
          and we&rsquo;ll find a time that works for you.
        </p>
      </div>

      <div className="mt-10">
        <ContactForm />
      </div>
    </section>
  );
}
