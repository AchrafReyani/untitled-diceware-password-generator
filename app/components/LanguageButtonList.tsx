"use client";

import React from "react";
import LanguageButton from "./LanguageButton";
import { availableLanguages } from "@/app/lib/LanguageData";

interface LanguageButtonListProps {
  selectedLanguages: string[];
  onToggleLanguage: (lang: string) => void;
}

const LanguageButtonList: React.FC<LanguageButtonListProps> = ({
  selectedLanguages,
  onToggleLanguage,
}) => {
  return (
    <div className="flex flex-wrap justify-center gap-2">
      {availableLanguages.map((lang) => (
        <div key={lang} className="w-full sm:w-1/4 md:w-1/4 lg:w-1/8">
          <LanguageButton
            language={lang}
            selected={selectedLanguages.includes(lang)}
            onToggle={onToggleLanguage}
          />
        </div>
      ))}
    </div>
  );
};

export default LanguageButtonList;
