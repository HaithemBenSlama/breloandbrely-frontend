import { getRequestConfig } from "next-intl/server";
import type { GetRequestConfigParams, RequestConfig } from "next-intl/server";

const locales = ["ar-TN", "fr-FR", "en-US"] as const;
type Locale = (typeof locales)[number];

export default getRequestConfig(
  async ({ locale }: GetRequestConfigParams): Promise<RequestConfig> => {
    if (!locale || !locales.includes(locale as Locale)) {
      return {
        locale: "ar-TN",
        messages: (await import(`./messages/ar-TN.json`)).default,
      };
    }

    return {
      locale,
      messages: (await import(`./messages/${locale}.json`)).default,
    };
  }
);
