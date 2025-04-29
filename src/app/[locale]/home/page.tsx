"use client";

// app/[locale]/home/page.tsx
import { Button } from "@/components/ui/button";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Home() {
  const locale = useLocale();
  const t = useTranslations("Home");
  const [showLogo, setShowLogo] = useState(false);

  // Show logo after a delay on desktop
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLogo(true);
    }, 1000); // 1 second delay

    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="h-screen w-screen flex flex-col md:flex-row overflow-hidden relative">
      {/* Language Switcher */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="absolute top-2 md:top-4 right-2 md:right-4 z-20"
      >
        <LanguageSwitcher />
      </motion.div>

      {/* Main Logo - Hidden on mobile, shown after delay on desktop */}
      {showLogo && (
        <div className="mt-5 absolute top-4 left-1/2 transform -translate-x-1/2 z-20 hidden md:block">
          <div className="w-[400px] h-[200px]">
            <Image
              src="/logo_breloandbrely.svg"
              alt="Brelo and Brely Logo"
              width={400}
              height={200}
              className="object-contain"
            />
          </div>
        </div>
      )}

      {/* Men's Section */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="w-full md:w-1/2 h-1/2 md:h-full"
      >
        <Link
          href={`/${locale}/men`}
          className="relative group overflow-hidden cursor-pointer h-full block"
        >
          <Image
            src="/men.png"
            alt="Men's Collection"
            fill
            className="object-cover transition-all duration-300 group-hover:scale-105 filter brightness-90 contrast-110 saturate-110"
            priority
          />
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="absolute inset-0 bg-amber-900/30 transition-all duration-300 group-hover:bg-amber-900/20"
          />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="relative z-10 flex flex-col items-center justify-center h-full p-4 md:p-6"
          >
            <div className="mb-4 md:mb-6">
              <Image
                src="/logo_brelo.svg"
                alt="Brelo Logo"
                width={300}
                height={150}
                className="object-contain w-[150px] md:w-[300px] h-[75px] md:h-[150px]"
              />
            </div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 1 }}
              className="text-center text-white max-w-md mb-4 md:mb-6 text-lg md:text-xl font-[var(--font-charm)] italic tracking-wider"
              dir={locale === "ar-TN" ? "rtl" : "ltr"}
            >
              {t("men.title")}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.2 }}
            >
              <Button
                variant="outline"
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-amber-500 transition-all duration-300 text-sm md:text-base"
              >
                {t("men.button")}
              </Button>
            </motion.div>
          </motion.div>
        </Link>
      </motion.div>

      {/* Women's Section */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="w-full md:w-1/2 h-1/2 md:h-full"
      >
        <Link
          href={`/${locale}/women`}
          className="relative group overflow-hidden cursor-pointer h-full block"
        >
          <Image
            src="/women.png"
            alt="Women's Collection"
            fill
            className="object-cover transition-all duration-300 group-hover:scale-105 filter brightness-90 contrast-110 saturate-110"
            priority
          />
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="absolute inset-0 bg-rose-900/30 transition-all duration-300 group-hover:bg-rose-900/20"
          />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="relative z-10 flex flex-col items-center justify-center h-full p-4 md:p-6"
          >
            <div className="mb-4 md:mb-6">
              <Image
                src="/logo_brely.svg"
                alt="Brely Logo"
                width={300}
                height={150}
                className="object-contain w-[150px] md:w-[300px] h-[75px] md:h-[150px]"
              />
            </div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 1 }}
              className="text-center text-white max-w-md mb-4 md:mb-6 text-lg md:text-xl font-[var(--font-charm)] italic tracking-wider"
              dir={locale === "ar-TN" ? "rtl" : "ltr"}
            >
              {t("women.title")}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.2 }}
            >
              <Button
                variant="outline"
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-rose-500 transition-all duration-300 text-sm md:text-base"
              >
                {t("women.button")}
              </Button>
            </motion.div>
          </motion.div>
        </Link>
      </motion.div>
    </main>
  );
}
