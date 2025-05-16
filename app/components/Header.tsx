"use client";

import React from "react";

const Header: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 w-full bg-gradient-to-r from-blue-500 to-teal-500 text-white py-6 z-10">
      <div className="container mx-auto text-center">
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">
          Untitled Diceware Password Generator
        </h1>
        <p className="mt-2 text-lg sm:text-xl">Generate secure, random passwords with ease. Fully client side.</p>
      </div>
    </header>
  );
};

export default Header;