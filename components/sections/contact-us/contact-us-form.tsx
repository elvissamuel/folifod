import { CONTACT_US_FORM } from "@/constants/contact-us";

export function ContactUsForm() {
  return (
    <section className="rounded-md bg-[#edf3f8] px-5 py-6 sm:px-8 sm:py-8" aria-labelledby="send-message-heading">
      <h2 id="send-message-heading" className="sr-only">
        {CONTACT_US_FORM.title}
      </h2>
      <form className="space-y-4" action="#" method="post">
        <div>
          <label htmlFor="first-name" className="mb-1.5 block text-xs font-medium text-[#3e3e3e]">
            {CONTACT_US_FORM.fields.firstName}
          </label>
          <input
            id="first-name"
            name="firstName"
            type="text"
            placeholder={CONTACT_US_FORM.placeholders.firstName}
            className="h-11 w-full border border-[#d5dee7] bg-white px-4 text-sm text-[#222] outline-none placeholder:text-[#8b8b8b] focus:border-[#00aeef]"
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
            placeholder={CONTACT_US_FORM.placeholders.email}
            className="h-11 w-full border border-[#d5dee7] bg-white px-4 text-sm text-[#222] outline-none placeholder:text-[#8b8b8b] focus:border-[#00aeef]"
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
            placeholder={CONTACT_US_FORM.placeholders.phone}
            className="h-11 w-full border border-[#d5dee7] bg-white px-4 text-sm text-[#222] outline-none placeholder:text-[#8b8b8b] focus:border-[#00aeef]"
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
            placeholder={CONTACT_US_FORM.placeholders.message}
            className="w-full resize-none border border-[#d5dee7] bg-white px-4 py-3 text-sm text-[#222] outline-none placeholder:text-[#8b8b8b] focus:border-[#00aeef]"
          />
        </div>

        <button
          type="submit"
          className="inline-flex min-w-[160px] items-center justify-center rounded-sm bg-gradient-to-b from-[#00d4ff] via-[#00a8e8] to-[#0088cc] px-7 py-3 text-xs font-semibold tracking-[0.12em] text-white transition-opacity hover:opacity-90"
        >
          {CONTACT_US_FORM.submitLabel}
        </button>
      </form>
    </section>
  );
}
