"use client";

import Game from "@/views/Game";
import Settings from "@/views/Settings";
import { useState } from "react";

export default function Home() {
  const [gameStart, setGameStart] = useState<boolean>(false);
  const [wordLength, setWordLength] = useState<number>(1);
  const [gameId, setGameId] = useState<string>("");
  const [gameEnd, setGameEnd] = useState<boolean>(false);

  const startGame = () => {
    setGameStart(true);
  };

  const getWordLength = (value: number) => {
    setWordLength(value);
  };

  const getGameId = (gameId: string) => {
    setGameId(gameId);
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
          getGameId={getGameId}
          startGame={startGame}
        />
      )}
      {gameStart && !gameEnd && <Game wordLength={wordLength} />}
      {gameEnd && <h1>YOU WON</h1>}
    </>
  );
}
