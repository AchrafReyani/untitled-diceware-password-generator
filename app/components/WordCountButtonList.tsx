"use client";

import React from "react";
import wordCounts from "@/app/lib/WordCounts";
import WordCountButton from "./WordCountButton";

type WordCountButtonListProps = {
  onSelect: (count: number) => void;
};

export default function WordCountButtonList({ onSelect }: WordCountButtonListProps) {
  return (
    <div className="flex flex-wrap gap-2 mt-4">
      {wordCounts.map((count) => (
        <WordCountButton key={count} count={count} onClick={onSelect} />
      ))}
    </div>
  );
}
