"use client";

import React from "react";

interface LanguageButtonProps {
  language: string;
  selected: boolean;
  onToggle: (language: string) => void;
}

const LanguageButton: React.FC<LanguageButtonProps> = ({
  language,
  selected,
  onToggle,
}) => {
  return (
    <button
      onClick={() => onToggle(language)}
      className={`px-4 py-2 rounded-2xl font-medium shadow-md transition-all duration-200
        ${selected ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-800"}
        hover:scale-105 hover:shadow-lg`}
    >
      {language}
    </button>
  );
};

export default LanguageButton;
