"use client";

import Game from "@/views/Game";
import Settings from "@/views/Settings";
import { useState } from "react";

export default function Home() {
  const [gameStart, setGameStart] = useState<boolean>(false);
  const [wordLength, setWordLength] = useState<number>(1);
  const [gameEnd, setGameEnd] = useState<boolean>(false);

  const startGame = () => {
    setGameStart(true);
  };

  const getWordLength = (value: number) => {
    setWordLength(value);
  };

  const endGame = () => {
    setGameEnd(true);
  };

  return (
    <>
      {!gameStart && !gameEnd && (
        <Settings
          wordLength={wordLength}
          getWordLength={getWordLength}
          startGame={startGame}
        />
      )}
      {gameStart && !gameEnd && <Game wordLength={wordLength} />}
      {gameEnd && <h1>YOU WON</h1>}
    </>
  );
}
