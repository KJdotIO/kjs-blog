"use client";

import React from "react";
import { useTheme } from "next-themes";
import { FaMoon, FaSun } from "react-icons/fa";

function ThemeButton() {
  const { theme, setTheme } = useTheme();

  return (
    <>
      {theme == "light" ? (
        <button onClick={() => setTheme("dark")}>
          <FaMoon size={30} />
        </button>
      ) : (
        <button onClick={() => setTheme("light")}>
          <FaSun size={30} />
        </button>
      )}
    </>
  );
}

export default ThemeButton;
