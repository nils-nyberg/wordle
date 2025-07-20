"use client";
import GuessesList from "@/components/GuessesList";
import InputTiles from "@/components/InputTiles";
import Keyboard from "@/components/Keyboard";
import { Typography } from "@mui/material";
import { useState, useEffect } from "react";

export default function Home() {
  const emptyTiles: string[] = Array(5).fill("");

  const [currentLetters, setCurrentLetters] = useState<string[]>(emptyTiles);
  const [guesses, setGuesses] = useState<string[][]>([]);

  // Game logic
  const handleUserInput = (userInput: string) => {
    const newLetters: string[] = [...currentLetters];
    const emptyIndex: number = newLetters.indexOf("");

    if (userInput.match(/^[A-Öa-ö]$/)) {
      newLetters[emptyIndex] = userInput.toLowerCase();
      setCurrentLetters(newLetters);
    } else if (userInput === "Backspace") {
      if (emptyIndex === -1) newLetters[newLetters.length - 1] = "";
      else newLetters[emptyIndex - 1] = "";
      setCurrentLetters(newLetters);
    } else if (userInput === "Enter" && emptyIndex === -1) {
      setGuesses([...guesses, newLetters]);
      setCurrentLetters(emptyTiles);
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
          marginTop: "1rem",
          fontSize: "2rem",
          fontWeight: "400",
          textAlign: "center",
          textDecoration: "underline",
        }}
      >
        Wordle-ish
      </Typography>
      <GuessesList guesses={guesses} />
      <InputTiles letters={currentLetters} />
      <Keyboard handleUserInput={handleUserInput} />
    </>
  );
}
