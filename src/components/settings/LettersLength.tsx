import { Typography, Slider } from "@mui/material";
import { useState } from "react";

type Props = {
  minLetters: number;
  maxLetters: number;
  getWordLength: (value: number) => void;
};

export default function LettersLength({
  minLetters,
  maxLetters,
  getWordLength,
}: Props) {
  return (
    <>
      <Typography className="MuiTypography-Selection" variant="body1">
        Choose how many letters you want:
      </Typography>
      <Slider
        valueLabelDisplay="auto"
        shiftStep={5}
        step={1}
        onChange={(_, value: number) => getWordLength(value)}
        min={minLetters}
        max={maxLetters}
      />
    </>
  );
}
