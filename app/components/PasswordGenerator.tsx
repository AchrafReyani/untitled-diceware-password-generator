'use client';

import { useState, useEffect } from 'react';
import { languageWordLists } from '@/app/lib/LanguageData';

// Define a type for the languageWordLists
type LanguageWordLists = Record<string, Record<string, string>>;

const DICE_SIDES = 6;

function getSecureRandom(max: number): number {
  const cryptoObj = window.crypto || (window as { crypto: Crypto }).crypto; // Fix typing for crypto
  const rand = new Uint32Array(1);
  let result: number;
  const skip = 0x7fffffff - (0x7fffffff % max);

  do {
    cryptoObj.getRandomValues(rand);
    result = rand[0] & 0x7fffffff;
  } while (result >= skip);

  return result % max;
}

function rollDice(numRolls: number): string {
  let result = '';
  for (let i = 0; i < numRolls; i++) {
    result += (getSecureRandom(DICE_SIDES) + 1).toString();
  }
  return result;
}

// Function to generate words from selected languages
function generateWords(selectedLanguages: string[], numWords: number): string[] {
  const words: string[] = [];

  for (let i = 0; i < numWords; i++) {
    // Roll for language first
    const language = selectedLanguages[getSecureRandom(selectedLanguages.length)];
    // Roll for word within that language
    const roll = rollDice(5); // Diceware standard: 5 rolls
    const word = (languageWordLists as LanguageWordLists)[language][roll]; // Type assertion

    if (word) {
      words.push(word);
    } else {
      i--; // Try again if invalid roll
    }
  }

  return words;
}

interface PasswordGeneratorProps {
  wordCount: number;
  selectedLanguages: string[];
}

export default function PasswordGenerator({ wordCount, selectedLanguages }: PasswordGeneratorProps) {
  const [words, setWords] = useState<string[]>([]);

  useEffect(() => {
    if (selectedLanguages.length > 0) {
      const newWords = generateWords(selectedLanguages, wordCount);
      setWords(newWords);
    }
  }, [wordCount, selectedLanguages]);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  const display = words.join(' ');
  const dashed = words.join('-');

  return (
    <div className="flex flex-col items-center gap-4 p-4 border rounded-xl shadow-md bg-white max-w-xl mx-auto">
      {words.length > 0 && (
        <div className="text-center">
          <p className="text-lg font-mono mb-2 cursor-pointer" onClick={() => copyToClipboard(display)}>
            <strong>Space-separated:</strong> <br />
            <span className="text-blue-700 hover:underline">{display}</span>
          </p>
          <p className="text-lg font-mono mb-2 cursor-pointer" onClick={() => copyToClipboard(dashed)}>
            <strong>Dash-separated:</strong> <br />
            <span className="text-blue-700 hover:underline">{dashed}</span>
          </p>
          <p className="text-green-700 text-sm mt-1">(Click to copy)</p>
        </div>
      )}
    </div>
  );
}
