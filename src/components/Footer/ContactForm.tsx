"use client";

import { useState, type FormEvent } from "react";
import classNames from "classnames";
import type { ContactFormContent } from "@/lib/content/footer";

const inputClasses = classNames(
  "w-full rounded-lg border border-cream/30 bg-cream px-4 py-2.5",
  "font-work-sans text-sm text-darkTeal placeholder:text-darkTeal/40",
  "outline-none transition-colors focus:border-(--footer-accent)",
);

const FORMSUBMIT_ENDPOINT =
  "https://formsubmit.co/ajax/megan@freespace-therapy.com";

export default function ContactForm({
  form,
}: {
  form?: ContactFormContent;
}) {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState(false);

  const fields = {
    nameLabel: form?.nameLabel ?? "Name",
    namePlaceholder: form?.namePlaceholder ?? "John Smith",
    emailLabel: form?.emailLabel ?? "Email",
    emailPlaceholder: form?.emailPlaceholder ?? "john@example.com",
    phoneLabel: form?.phoneLabel ?? "Phone (optional)",
    phonePlaceholder: form?.phonePlaceholder ?? "(000) 000-0000",
    messageLabel: form?.messageLabel ?? "Message",
    messagePlaceholder:
      form?.messagePlaceholder ??
      "Tell us a little about what brings you here.",
    submitLabel: form?.submitLabel ?? "Submit Message",
  };

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setSubmitting(true);
    setError(false);

    const formData = new FormData(event.currentTarget);
    const submittedName = formData.get("name");
    if (typeof submittedName === "string" && submittedName.trim()) {
      formData.set(
        "_subject",
        `New message from ${submittedName.trim()} — Free Space submission`,
      );
    }

    try {
      const response = await fetch(FORMSUBMIT_ENDPOINT, {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        setSubmitted(true);
      } else {
        setError(true);
      }
    } catch {
      setError(true);
    } finally {
      setSubmitting(false);
    }
  }

  if (submitted) {
    return (
      <div
        className={classNames(
          "rounded-2xl border border-cream/15",
          "bg-cream/5 p-8 text-center",
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
      <input
        type="hidden"
        name="_subject"
        value="New Free Space submission"
      />
      <input type="hidden" name="_captcha" value="false" />
      <input
        type="text"
        name="_honey"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden
      />

      <div>
        <label
          htmlFor="name"
          className="font-work-sans mb-1 block text-xs text-cream/75"
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
          className="font-work-sans mb-1 block text-xs text-cream/75"
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
          className="font-work-sans mb-1 block text-xs text-cream/75"
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
          className="font-work-sans mb-1 block text-xs text-cream/75"
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

      {error && (
        <p className="font-work-sans text-sm text-red-300">
          Something went wrong sending your message. Please try again, or
          reach out by phone or email instead.
        </p>
      )}

      <button
        type="submit"
        disabled={submitting}
        className={classNames(
          "mt-2 rounded-full bg-(--footer-button) px-8 py-3 font-work-sans text-sm",
          "font-bold text-(--footer-button-text) transition-[filter] hover:brightness-90",
          "disabled:cursor-not-allowed disabled:opacity-60",
        )}
      >
        {submitting ? "Sending..." : fields.submitLabel}
      </button>
    </form>
  );
}
