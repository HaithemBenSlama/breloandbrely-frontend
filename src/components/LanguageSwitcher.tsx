"use client";
import * as React from "react";
import { useLocale } from "next-intl";
import { useRouter } from "next/navigation";
import Image from "next/image";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

const languages = [
  {
    code: "ar-TN",
    name: "تونسي",
    flagPath: "/flags/ar-TN.svg",
  },
  {
    code: "fr-FR",
    name: "Français",
    flagPath: "/flags/fr-FR.svg",
  },
  {
    code: "en-US",
    name: "English",
    flagPath: "/flags/en-US.svg",
  },
];

export function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const currentLanguage =
    languages.find((lang) => lang.code === locale) || languages[0];

  const handleLanguageChange = (newLocale: string) => {
    const currentPath = window.location.pathname;
    const newPath = currentPath.replace(`/${locale}`, `/${newLocale}`);
    router.push(newPath);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="secondary" className="flex items-center gap-2">
          <Image
            src={currentLanguage.flagPath}
            alt={`${currentLanguage.name} flag`}
            width={15}
            height={10}
            className="h-5 w-auto rounded-sm inline-block"
          />
          <span className="text-foreground inline-flex items-center">
            {currentLanguage.name}
          </span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="bg-background border-border">
        {languages.map((lang) => (
          <DropdownMenuItem
            key={lang.code}
            onClick={() => handleLanguageChange(lang.code)}
            className="flex items-center gap-2 text-foreground hover:bg-muted hover:text-primary dark:hover:text-primary cursor-pointer"
          >
            <Image
              src={lang.flagPath}
              alt={`${lang.name} flag`}
              width={15}
              height={10}
              className="h-4 w-auto rounded-sm"
            />
            <span>{lang.name}</span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
