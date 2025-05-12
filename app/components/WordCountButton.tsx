// components/WordCountButton.tsx
"use client";

import React from "react";

type WordCountButtonProps = {
  count: number;
  onClick: (count: number) => void;
};

export default function WordCountButton({ count, onClick }: WordCountButtonProps) {
  return (
    <button
      onClick={() => onClick(count)}
      className="px-4 py-2 m-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition"
    >
      {count} words
    </button>
  );
}
