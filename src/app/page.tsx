"use client";
import InputTiles from "@/components/InputTiles";
import { Typography } from "@mui/material";
import { useState, useEffect } from "react";

export default function Home() {
  const [currentLetters, setCurrentLetters] = useState<string[]>(
    Array(5).fill("")
  );

  // Game logic
  const handleUserInput = (userInput: string) => {
    const newLetters: string[] = [...currentLetters];
    const emptyIndex: number = newLetters.indexOf("");

    if (userInput.match(/^[A-Za-z]$/)) {
      newLetters[emptyIndex] = userInput.toLowerCase();
      setCurrentLetters(newLetters);
    } else if (userInput === "Backspace") {
      if (emptyIndex === -1) newLetters[newLetters.length - 1] = "";
      else newLetters[emptyIndex - 1] = "";
      setCurrentLetters(newLetters);
    }
  };

  // Handles keyboard input
  useEffect(() => {
    const handleKeyDown = async (event: KeyboardEvent): Promise<void> =>
      handleUserInput(event.key);

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [currentLetters]);

  return (
    <>
      <Typography
        variant="h1"
        sx={{
          fontSize: "4rem",
          fontWeight: "400",
          textAlign: "center",
          textDecoration: "underline",
        }}
      >
        Wordle-ish
      </Typography>
      <InputTiles letters={currentLetters} />
    </>
  );
}
