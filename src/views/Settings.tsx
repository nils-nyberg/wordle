import LettersLength from "@/components/settings/LettersLength";
import UniqueLetters from "@/components/settings/UniqueLetters";
import { Typography, Box, Button } from "@mui/material";
import { useEffect, useState } from "react";

type Props = {
  startGame: () => void;
  wordLength: number;
  getWordLength: (value: number) => void;
};

export default function Settings({
  startGame,
  wordLength,
  getWordLength,
}: Props) {
  const [minLetters, setMinLetters] = useState<number>(0);
  const [maxLetters, setMaxLetters] = useState<number>(0);
  const [allowRepetition, setAllowRepetition] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/words");
        const payload = await response.json();

        setMinLetters(payload.minLetters);
        setMaxLetters(payload.maxLetters);

        getWordLength(payload.minLetters);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  const getRepetition = (state: boolean) => {
    setAllowRepetition(state);
  };

  const postIt = async () => {
    try {
      const response = await fetch("/api/games", {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          wordLength,
          allowRepetition,
        }),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <Typography variant="h1">Welcome</Typography>
      {maxLetters > 0 && (
        <Box>
          <LettersLength
            getWordLength={getWordLength}
            minLetters={minLetters}
            maxLetters={maxLetters}
          />
          <UniqueLetters getRepetition={getRepetition} />

          <Button
            sx={{
              display: "block",
              margin: "5rem auto 0 auto",
              width: "15rem",
              height: "4rem",
            }}
            variant="contained"
            onClick={() => {
              postIt();
              startGame();
            }}
          >
            Play the game
          </Button>
        </Box>
      )}
    </>
  );
}
