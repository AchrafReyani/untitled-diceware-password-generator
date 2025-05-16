'use client';

import { useState } from 'react';

import LanguageButtonList from '@/app/components/LanguageButtonList';
import WordCountButtonList from '@/app/components/WordCountButtonList';
import ToggleButtonList, { ToggleState } from '@/app/components/ToggleButtonList';
import PasswordGenerator from './components/PasswordGenerator';
import Footer from './components/Footer';
import Header from './components/Header';

export default function Home() {
  const [selectedLanguages, setSelectedLanguages] = useState<string[]>([]);
  const [wordCount, setWordCount] = useState<number | null>(null);
  const [toggles, setToggles] = useState<ToggleState>({
  capitalizeRandomLetters: false,
  includeNumbers: false,
});

  const handleLanguageToggle = (lang: string) => {
    setSelectedLanguages((prev) =>
      prev.includes(lang) ? prev.filter((l) => l !== lang) : [...prev, lang]
    );
  };

  const handleWordCountSelect = (count: number) => {
    setWordCount(count);
  };

  const handleToggleChange = (newState: ToggleState) => {
  setToggles(newState);
};

  return (
    <main className="flex flex-col items-center justify-start p-6 pt-36 h-screen">
      <Header />

      <h2 className="text-xl font-bold mb-2 text-center">Choose your languages</h2>
      <LanguageButtonList
        onToggleLanguage={handleLanguageToggle}
        selectedLanguages={selectedLanguages}
      />

      <h2 className="text-xl font-semibold mt-6 mb-2 text-center">Choose word count</h2>
      <WordCountButtonList onSelect={handleWordCountSelect} />

      <h2 className="text-xl font-semibold mt-6 mb-2 text-center">Optional toggles</h2>
      <ToggleButtonList onChange={handleToggleChange} />

      {wordCount !== null && (
        <PasswordGenerator
          selectedLanguages={selectedLanguages}
          wordCount={wordCount}
          toggles={toggles}
        />
      )}

      <Footer />
    </main>
  );
}
