'use client';

import { useState, useEffect } from 'react';
import { languageWordLists } from '@/app/lib/LanguageData';
import { ToggleState } from './ToggleButtonList';

// Define a type for the languageWordLists
type LanguageWordLists = Record<string, Record<string, string>>;

const DICE_SIDES = 6;

function getSecureRandom(max: number): number {
  const cryptoObj = window.crypto || (window as { crypto: Crypto }).crypto;
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

interface ToggleOptions {
  capitalizeRandomLetters: boolean;
  includeNumbers: boolean;
}

// Function to apply toggles to a word
function applyToggles(word: string, toggles: ToggleOptions): string {
  let transformed = word;

  if (toggles.capitalizeRandomLetters && word.length > 0) {
    const index = getSecureRandom(word.length);
    transformed =
      word.slice(0, index) +
      word.charAt(index).toUpperCase() +
      word.slice(index + 1);
  }

  if (toggles.includeNumbers) {
    const number = getSecureRandom(10).toString();
    const insertIndex = getSecureRandom(word.length + 1);
    transformed =
      transformed.slice(0, insertIndex) + number + transformed.slice(insertIndex);
  }

  return transformed;
}

// Function to generate words from selected languages
function generateWords(
  selectedLanguages: string[],
  numWords: number,
  toggles: ToggleState
): string[] {
  const words: string[] = [];

  for (let i = 0; i < numWords; i++) {
    const language = selectedLanguages[getSecureRandom(selectedLanguages.length)];
    const roll = rollDice(5);
    const rawWord = (languageWordLists as LanguageWordLists)[language][roll];

    if (rawWord) {
      const finalWord = applyToggles(rawWord, toggles);
      words.push(finalWord);
    } else {
      i--; // retry on invalid roll
    }
  }

  return words;
}

interface PasswordGeneratorProps {
  wordCount: number;
  selectedLanguages: string[];
  toggles: ToggleOptions;
}

export default function PasswordGenerator({
  wordCount,
  selectedLanguages,
  toggles
}: PasswordGeneratorProps) {
  const [words, setWords] = useState<string[]>([]);

  useEffect(() => {
    if (selectedLanguages.length > 0) {
      const newWords = generateWords(selectedLanguages, wordCount, toggles);
      setWords(newWords);
    }
  }, [wordCount, selectedLanguages, toggles]);

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
