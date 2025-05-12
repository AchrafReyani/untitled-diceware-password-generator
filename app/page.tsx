"use client"

import LanguageButtonList from "@/app/components/LanguageButtonList";
import WordCountButtonList from "@/app/components/WordCountButtonList";
import PasswordGenerator from "./components/PasswordGenerator";

import { useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";

export default function Home() {
  const [selectedLanguages, setSelectedLanguages] = useState<string[]>([]);
  const [wordCount, setWordCount] = useState<number | null>(null);

  const handleLanguageToggle = (lang: string) => {
    setSelectedLanguages((prev) =>
      prev.includes(lang) ? prev.filter((l) => l !== lang) : [...prev, lang]
    );
  };

  const handleWordCountSelect = (count: number) => {
    setWordCount(count);
    console.log("New word count selected:", count);
  };

  return (
    <main className="flex flex-col items-center justify-center p-6 h-screen">
      <Header />

      <h2 className="text-xl font-bold mb-2 text-center">Choose your languages</h2>
      <LanguageButtonList onToggleLanguage={handleLanguageToggle} selectedLanguages={selectedLanguages}/>

      <h2 className="text-xl font-semibold mt-6 mb-2 text-center">Choose word count</h2>
      <WordCountButtonList onSelect={handleWordCountSelect} />

      {wordCount !== null && <PasswordGenerator selectedLanguages={selectedLanguages} wordCount={wordCount} />}

      <Footer />
      </main>
);

}
