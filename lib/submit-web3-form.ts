const WEB3FORMS_ENDPOINT = "https://api.web3forms.com/submit";

export type Web3FormsPayload = {
  subject: string;
  name?: FormDataEntryValue | null;
  email?: FormDataEntryValue | null;
  phone?: FormDataEntryValue | null;
  message?: FormDataEntryValue | null;
  botcheck?: FormDataEntryValue | null;
};

export class Web3FormsConfigError extends Error {
  constructor() {
    super("Web3Forms is not configured.");
    this.name = "Web3FormsConfigError";
  }
}

export async function submitWeb3Form(payload: Web3FormsPayload) {
  const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY ?? "";

  if (!accessKey) {
    throw new Web3FormsConfigError();
  }

  const response = await fetch(WEB3FORMS_ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      access_key: accessKey,
      ...payload,
    }),
  });

  const result = (await response.json()) as { success?: boolean; message?: string };

  if (!response.ok || !result.success) {
    throw new Error(result.message ?? "Submission failed");
  }
}
