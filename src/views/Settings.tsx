import { Slider, Typography } from "@mui/material";

export default function Settings() {
  const minLetters: number = 1;
  const maxLetters: number = 10;

  return (
    <>
      <Typography variant="h1">Welcome</Typography>
      <Typography variant="body1">Choose how many letters:</Typography>
      <Slider
        valueLabelDisplay="auto"
        shiftStep={5}
        step={1}
        min={minLetters}
        max={maxLetters}
      />
    </>
  );
}
