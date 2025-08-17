import GuessesList from "@/components/game/GuessesList";
import InputTiles from "@/components/game/InputTiles";
import Keyboard from "@/components/game/Keyboard";
import { Typography } from "@mui/material";
import { useState, useEffect } from "react";

type Props = {
  wordLength: number;
};

export default function Game({ wordLength }: Props) {
  const emptyTiles: string[] = Array(wordLength).fill("");

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
      <Typography variant="h1">Wordle-ish</Typography>
      <GuessesList guesses={guesses} />
      <InputTiles currentLetters={currentLetters} />
      <Keyboard handleUserInput={handleUserInput} />
    </>
  );
}
