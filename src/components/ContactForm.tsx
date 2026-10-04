"use client";

import { useState, type FormEvent } from "react";
import classNames from "classnames";

const inputClasses = classNames(
  "w-full rounded-lg border border-logoGreen/40 bg-white/60 px-4 py-2.5",
  "font-work-sans text-sm text-darkGreen placeholder:text-darkGreen/40",
  "outline-none transition-colors focus:border-clay",
);

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div
        className={classNames(
          "mx-auto max-w-md rounded-2xl border border-logoGreen/30",
          "bg-white/40 p-8 text-center",
        )}
      >
        <p className="font-cooper-hewitt-medium text-lg text-darkGreen">
          Thank you for reaching out.
        </p>
        <p className="font-cooper-hewitt mt-2 text-sm text-darkGreen/80">
          We&rsquo;ll be in touch within one business day.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto flex max-w-md flex-col gap-4"
    >
      <div>
        <label
          htmlFor="name"
          className="font-work-sans mb-1 block text-xs text-darkGreen/70"
        >
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          placeholder="Jane Smith"
          className={inputClasses}
        />
      </div>

      <div>
        <label
          htmlFor="email"
          className="font-work-sans mb-1 block text-xs text-darkGreen/70"
        >
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          placeholder="jane@example.com"
          className={inputClasses}
        />
      </div>

      <div>
        <label
          htmlFor="phone"
          className="font-work-sans mb-1 block text-xs text-darkGreen/70"
        >
          Phone (optional)
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          placeholder="(555) 555-0182"
          className={inputClasses}
        />
      </div>

      <div>
        <label
          htmlFor="message"
          className="font-work-sans mb-1 block text-xs text-darkGreen/70"
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          required
          placeholder="Tell us a little about what brings you here."
          className={inputClasses}
        />
      </div>

      <button
        type="submit"
        className={classNames(
          "mt-2 rounded-full bg-clay px-8 py-3 font-work-sans text-sm",
          "text-cream transition-colors hover:bg-darkGreen",
        )}
      >
        Send Message
      </button>
    </form>
  );
}
