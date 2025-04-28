// app/[locale]/layout.tsx
import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import {
  Dancing_Script,
  El_Messiri,
  Oleo_Script,
  Oswald,
  Rubik,
} from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";
import { log } from "console";

// Initialize fonts
const dancingScript = Dancing_Script({
  subsets: ["latin"],
  weight: ["700"],
  variable: "--font-dancing-script",
});

const elMessiri = El_Messiri({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-el-messiri",
});

const oleoScript = Oleo_Script({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-oleo-script",
});

const oswald = Oswald({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700"],
  variable: "--font-oswald",
});

const rubik = Rubik({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  variable: "--font-rubik",
});

export const metadata: Metadata = {
  title: "Brelo - أول منصة لحجز مواعيد الحلاقة في تونس",
  icons: {
    icon: "/favicon.ico",
  },
};

interface RootLayoutProps {
  children: React.ReactNode;
  params: {
    locale: string;
  };
}

export default async function RootLayout({
  children,
  params: { locale },
}: Readonly<RootLayoutProps>) {
  let messages;
  try {
    messages = (await import(`../../messages/${locale}.json`)).default;
  } catch (error) {
    log(error);
    notFound();
  }

  return (
    <html lang={locale}>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          dancingScript.variable,
          elMessiri.variable,
          oleoScript.variable,
          oswald.variable,
          rubik.variable
        )}
      >
        <NextIntlClientProvider locale={locale} messages={messages}>
          {children}
          <Analytics />
          <SpeedInsights />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
