"use client";

import { useState } from "react";
import { PROJECTS_PAGE_CALLBACK } from "@/constants/projects-page";
import { submitWeb3Form, Web3FormsConfigError } from "@/lib/submit-web3-form";

type FormStatus = "idle" | "submitting" | "success" | "error";

const inputClassName =
  "h-11 w-full border border-white/60 bg-transparent px-3 text-sm text-white placeholder:text-white/80 outline-none disabled:cursor-not-allowed disabled:opacity-60";

export function ProjectsPageCallbackFormCard() {
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
        subject: PROJECTS_PAGE_CALLBACK.subject,
        name: formData.get("name"),
        email: formData.get("email"),
        phone: formData.get("phone"),
        message: formData.get("description"),
        botcheck: formData.get("botcheck"),
      });

      setStatus("success");
      form.reset();
    } catch (error) {
      setStatus("error");

      if (error instanceof Web3FormsConfigError) {
        setErrorMessage(PROJECTS_PAGE_CALLBACK.configErrorMessage);
        return;
      }

      setErrorMessage(
        error instanceof Error ? error.message : PROJECTS_PAGE_CALLBACK.errorMessage,
      );
    }
  }

  return (
    <div className="rounded-sm bg-[#00aeef] px-7 py-7 text-white shadow-[0_14px_36px_rgba(0,0,0,0.2)]">
      <h3 className="text-center text-2xl font-bold leading-tight">
        {PROJECTS_PAGE_CALLBACK.cardTitle}
      </h3>
      <p className="mt-1 text-center text-sm text-white/90">
        {PROJECTS_PAGE_CALLBACK.cardSubtitle}
      </p>

      {status === "success" ? (
        <p
          role="status"
          className="mt-6 rounded-sm border border-white/40 bg-white/15 px-4 py-3 text-center text-sm leading-6 text-white"
        >
          {PROJECTS_PAGE_CALLBACK.successMessage}
        </p>
      ) : (
        <form className="mt-6 space-y-2.5" onSubmit={handleSubmit} noValidate>
          <input
            type="checkbox"
            name="botcheck"
            className="hidden"
            style={{ display: "none" }}
            tabIndex={-1}
            autoComplete="off"
          />

          <input
            name="name"
            type="text"
            required
            disabled={status === "submitting"}
            aria-label={PROJECTS_PAGE_CALLBACK.fields.name}
            placeholder={PROJECTS_PAGE_CALLBACK.fields.name}
            className={inputClassName}
          />
          <input
            name="email"
            type="email"
            required
            disabled={status === "submitting"}
            aria-label={PROJECTS_PAGE_CALLBACK.fields.email}
            placeholder={PROJECTS_PAGE_CALLBACK.fields.email}
            className={inputClassName}
          />
          <input
            name="phone"
            type="tel"
            required
            disabled={status === "submitting"}
            aria-label={PROJECTS_PAGE_CALLBACK.fields.phone}
            placeholder={PROJECTS_PAGE_CALLBACK.fields.phone}
            className={inputClassName}
          />
          <textarea
            name="description"
            rows={4}
            disabled={status === "submitting"}
            aria-label={PROJECTS_PAGE_CALLBACK.fields.description}
            placeholder={PROJECTS_PAGE_CALLBACK.fields.description}
            className="w-full resize-none border border-white/60 bg-transparent px-3 py-3 text-sm text-white placeholder:text-white/80 outline-none disabled:cursor-not-allowed disabled:opacity-60"
          />

          {status === "error" ? (
            <p role="alert" className="text-center text-sm leading-6 text-white">
              {errorMessage}
            </p>
          ) : null}

          <button
            type="submit"
            disabled={status === "submitting"}
            className="mt-1 inline-flex h-11 w-full items-center justify-center bg-white text-xs font-bold tracking-[0.08em] text-[#5422a5] disabled:cursor-not-allowed disabled:opacity-60"
          >
            {status === "submitting"
              ? PROJECTS_PAGE_CALLBACK.submittingLabel
              : PROJECTS_PAGE_CALLBACK.button}
          </button>
        </form>
      )}
    </div>
  );
}
