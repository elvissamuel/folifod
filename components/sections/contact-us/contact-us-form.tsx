"use client";

import { useState } from "react";
import { CONTACT_US_FORM } from "@/constants/contact-us";

import { submitWeb3Form, Web3FormsConfigError } from "@/lib/submit-web3-form";

type FormStatus = "idle" | "submitting" | "success" | "error";

export function ContactUsForm() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    setStatus("submitting");
    setErrorMessage("");

    try {
      await submitWeb3Form({
        subject: CONTACT_US_FORM.subject,
        name: formData.get("firstName"),
        email: formData.get("email"),
        phone: formData.get("phone"),
        message: formData.get("message"),
        botcheck: formData.get("botcheck"),
      });

      setStatus("success");
      form.reset();
    } catch (error) {
      setStatus("error");

      if (error instanceof Web3FormsConfigError) {
        setErrorMessage(CONTACT_US_FORM.configErrorMessage);
        return;
      }

      setErrorMessage(
        error instanceof Error ? error.message : CONTACT_US_FORM.errorMessage,
      );
    }
  }

  const inputClassName =
    "h-11 w-full border border-[#d5dee7] bg-white px-4 text-sm text-[#222] outline-none placeholder:text-[#8b8b8b] focus:border-[#00aeef] disabled:cursor-not-allowed disabled:opacity-60";

  return (
    <section className="rounded-md bg-[#edf3f8] px-5 py-6 sm:px-8 sm:py-8" aria-labelledby="send-message-heading">
      <h2 id="send-message-heading" className="sr-only">
        {CONTACT_US_FORM.title}
      </h2>

      {status === "success" ? (
        <p
          role="status"
          className="rounded-sm border border-[#b8e6c8] bg-[#edf9f1] px-4 py-3 text-sm leading-6 text-[#1f5f35]"
        >
          {CONTACT_US_FORM.successMessage}
        </p>
      ) : (
        <form className="space-y-4" onSubmit={handleSubmit} noValidate>
          <input
            type="checkbox"
            name="botcheck"
            className="hidden"
            style={{ display: "none" }}
            tabIndex={-1}
            autoComplete="off"
          />

          <div>
            <label htmlFor="first-name" className="mb-1.5 block text-xs font-medium text-[#3e3e3e]">
              {CONTACT_US_FORM.fields.firstName}
            </label>
            <input
              id="first-name"
              name="firstName"
              type="text"
              required
              disabled={status === "submitting"}
              placeholder={CONTACT_US_FORM.placeholders.firstName}
              className={inputClassName}
            />
          </div>

          <div>
            <label htmlFor="email" className="mb-1.5 block text-xs font-medium text-[#3e3e3e]">
              {CONTACT_US_FORM.fields.email}
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              disabled={status === "submitting"}
              placeholder={CONTACT_US_FORM.placeholders.email}
              className={inputClassName}
            />
          </div>

          <div>
            <label htmlFor="phone" className="mb-1.5 block text-xs font-medium text-[#3e3e3e]">
              {CONTACT_US_FORM.fields.phone}
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              disabled={status === "submitting"}
              placeholder={CONTACT_US_FORM.placeholders.phone}
              className={inputClassName}
            />
          </div>

          <div>
            <label htmlFor="message" className="mb-1.5 block text-xs font-medium text-[#3e3e3e]">
              {CONTACT_US_FORM.fields.message}
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              required
              disabled={status === "submitting"}
              placeholder={CONTACT_US_FORM.placeholders.message}
              className="w-full resize-none border border-[#d5dee7] bg-white px-4 py-3 text-sm text-[#222] outline-none placeholder:text-[#8b8b8b] focus:border-[#00aeef] disabled:cursor-not-allowed disabled:opacity-60"
            />
          </div>

          {status === "error" ? (
            <p role="alert" className="text-sm leading-6 text-[#b42318]">
              {errorMessage}
            </p>
          ) : null}

          <button
            type="submit"
            disabled={status === "submitting"}
            className="inline-flex min-w-[160px] items-center justify-center rounded-sm bg-gradient-to-b from-[#00d4ff] via-[#00a8e8] to-[#0088cc] px-7 py-3 text-xs font-semibold tracking-[0.12em] text-white transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {status === "submitting" ? CONTACT_US_FORM.submittingLabel : CONTACT_US_FORM.submitLabel}
          </button>
        </form>
      )}
    </section>
  );
}
