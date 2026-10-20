"use client";

import { useState, type FormEvent } from "react";
import classNames from "classnames";
import type { ContactFormContent } from "@/lib/content/footer";

const inputClasses = classNames(
  "w-full rounded-lg border border-cream/30 bg-cream/90 px-4 py-2.5",
  "font-work-sans text-sm text-darkTeal placeholder:text-darkTeal/40",
  "outline-none transition-colors focus:border-gold",
);

export default function ContactForm({
  form,
}: {
  form?: ContactFormContent;
}) {
  const [submitted, setSubmitted] = useState(false);

  const fields = {
    nameLabel: form?.nameLabel ?? "Name",
    namePlaceholder: form?.namePlaceholder ?? "Jane Smith",
    emailLabel: form?.emailLabel ?? "Email",
    emailPlaceholder: form?.emailPlaceholder ?? "jane@example.com",
    phoneLabel: form?.phoneLabel ?? "Phone (optional)",
    phonePlaceholder: form?.phonePlaceholder ?? "(555) 555-0182",
    messageLabel: form?.messageLabel ?? "Message",
    messagePlaceholder:
      form?.messagePlaceholder ??
      "Tell us a little about what brings you here.",
    submitLabel: form?.submitLabel ?? "Send Message",
  };

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div
        className={classNames(
          "rounded-2xl border border-cream/25",
          "bg-cream/10 p-8 text-center",
        )}
      >
        <p className="font-aileron-semibold text-lg text-cream">
          Thank you for reaching out.
        </p>
        <p className="font-aileron mt-2 text-sm text-cream/80">
          We&rsquo;ll be in touch soon.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex w-full flex-col gap-4"
    >
      <div>
        <label
          htmlFor="name"
          className="font-work-sans mb-1 block text-xs text-cream/70"
        >
          {fields.nameLabel}
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          placeholder={fields.namePlaceholder}
          className={inputClasses}
        />
      </div>

      <div>
        <label
          htmlFor="email"
          className="font-work-sans mb-1 block text-xs text-cream/70"
        >
          {fields.emailLabel}
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          placeholder={fields.emailPlaceholder}
          className={inputClasses}
        />
      </div>

      <div>
        <label
          htmlFor="phone"
          className="font-work-sans mb-1 block text-xs text-cream/70"
        >
          {fields.phoneLabel}
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          placeholder={fields.phonePlaceholder}
          className={inputClasses}
        />
      </div>

      <div>
        <label
          htmlFor="message"
          className="font-work-sans mb-1 block text-xs text-cream/70"
        >
          {fields.messageLabel}
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          required
          placeholder={fields.messagePlaceholder}
          className={inputClasses}
        />
      </div>

      <button
        type="submit"
        className={classNames(
          "mt-2 rounded-full bg-cream px-8 py-3 font-work-sans text-sm",
          "text-darkTeal transition-colors hover:bg-logoLime",
        )}
        style={{
          backgroundColor: form?.submitBackgroundColor,
          color: form?.submitTextColor,
        }}
      >
        {fields.submitLabel}
      </button>
    </form>
  );
}
