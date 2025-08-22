import GuessesList from "@/components/game/GuessesList";
import InputTiles from "@/components/game/InputTiles";
import Keyboard from "@/components/game/Keyboard";
import { postAnswer } from "@/lib/requests";
import { FeedbackData } from "@/lib/types";
import { Typography } from "@mui/material";
import { useState, useEffect } from "react";

type Props = {
  wordLength: number;
  gameId: string;
};

export default function Game({ wordLength, gameId }: Props) {
  const emptyTiles: string[] = Array(wordLength).fill("");

  const [currentLetters, setCurrentLetters] = useState<string[]>(emptyTiles);
  const [guesses, setGuesses] = useState<string[][]>([]);
  const [feedback, setFeedback] = useState<FeedbackData | string>([]);

  const getFeedback = (feedback: FeedbackData) => {
    setFeedback(feedback);
  };

  // Game logic
  const handleUserInput = (userInput: string) => {
    // If not Game Over
    if (feedback !== "You won!") {
      const newLetters: string[] = [...currentLetters];
      const emptyIndex: number = newLetters.indexOf("");
      const currentGuess: string = [...newLetters].join("");

      if (userInput.match(/^[A-Öa-ö]$/)) {
        newLetters[emptyIndex] = userInput.toLowerCase();
        setCurrentLetters(newLetters);
      } else if (userInput === "Backspace") {
        if (emptyIndex === -1) newLetters[newLetters.length - 1] = "";
        else newLetters[emptyIndex - 1] = "";
        setCurrentLetters(newLetters);
      } else if (userInput === "Enter" && emptyIndex === -1) {
        postAnswer(gameId, currentGuess, getFeedback);
        setGuesses([...guesses, newLetters]);
        setCurrentLetters(emptyTiles);
      }
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
  }, [currentLetters, getFeedback]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <>
      <Typography variant="h1">Wordle-ish</Typography>
      <GuessesList guesses={guesses} />
      <InputTiles currentLetters={currentLetters} />
      <Keyboard handleUserInput={handleUserInput} />
    </>
  );
}
