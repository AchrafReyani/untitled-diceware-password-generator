"use client";

import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-4 mt-8 w-full">
      <div className="container mx-auto text-center">
        <p className="text-sm">
          Made by <span className="font-semibold">Achraf Reyani</span> —{" "}
          <a
            href="https://github.com/AchrafReyani/untitled-diceware-password-generator"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-300"
          >
            GitHub Repository
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
