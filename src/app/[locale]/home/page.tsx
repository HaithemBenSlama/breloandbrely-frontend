"use client";

// app/[locale]/home/page.tsx
import { Button } from "@/components/ui/button";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { useEffect } from "react";

export default function Home() {
  const locale = useLocale();
  const t = useTranslations("Home");

  // Force a re-render when the locale changes
  useEffect(() => {
    // This effect will run when the locale changes
  }, [locale]);

  return (
    <main className="h-screen w-screen flex flex-col md:flex-row overflow-hidden relative">
      {/* Language Switcher */}
      <div className="absolute top-4 right-4 z-20">
        <LanguageSwitcher />
      </div>

      {/* Main Logo */}
      <div className="absolute top-4 left-1/2 transform -translate-x-1/2 z-20">
        <div className="w-[400px] h-[200px]">
          <Image
            src="/logo_breloandbrely_dark.png"
            alt="Brelo and Brely Logo"
            width={400}
            height={200}
            className="object-contain"
          />
        </div>
      </div>

      {/* Men's Section */}
      <Link
        href={`/${locale}/men`}
        className="w-full md:w-1/2 h-1/2 md:h-full relative group overflow-hidden cursor-pointer"
      >
        <Image
          src="/men.png"
          alt="Men's Collection"
          fill
          className="object-cover transition-all duration-300 group-hover:scale-105 filter brightness-90 contrast-110 saturate-110"
          priority
        />
        <div className="absolute inset-0 bg-amber-900/30 transition-all duration-300 group-hover:bg-amber-900/20" />
        <div className="relative z-10 flex flex-col items-center justify-center h-full p-6">
          <div className="mb-6">
            <Image
              src="/logo_brelo_dark.png"
              alt="Brelo Logo"
              width={300}
              height={150}
              className="object-contain"
            />
          </div>
          <p
            className="text-center text-white max-w-md mb-6 text-xl font-[var(--font-charm)] italic tracking-wider"
            dir={locale === "ar-TN" ? "rtl" : "ltr"}
          >
            {t("men.title")}
          </p>
          <Button
            variant="outline"
            className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-amber-900 transition-all duration-300"
          >
            {t("men.button")}
          </Button>
        </div>
      </Link>

      {/* Women's Section */}
      <Link
        href={`/${locale}/women`}
        className="w-full md:w-1/2 h-1/2 md:h-full relative group overflow-hidden cursor-pointer"
      >
        <Image
          src="/women.png"
          alt="Women's Collection"
          fill
          className="object-cover transition-all duration-300 group-hover:scale-105 filter brightness-90 contrast-110 saturate-110"
          priority
        />
        <div className="absolute inset-0 bg-rose-900/30 transition-all duration-300 group-hover:bg-rose-900/20" />
        <div className="relative z-10 flex flex-col items-center justify-center h-full p-6">
          <div className="mb-6">
            <Image
              src="/logo_brely_dark.png"
              alt="Brely Logo"
              width={300}
              height={150}
              className="object-contain"
            />
          </div>
          <p
            className="text-center text-white max-w-md mb-6 text-xl font-[var(--font-charm)] italic tracking-wider"
            dir={locale === "ar-TN" ? "rtl" : "ltr"}
          >
            {t("women.title")}
          </p>
          <Button
            variant="outline"
            className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-rose-900 transition-all duration-300"
          >
            {t("women.button")}
          </Button>
        </div>
      </Link>
    </main>
  );
}
