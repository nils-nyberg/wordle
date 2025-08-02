import { Typography, Slider } from "@mui/material";

type Props = {
  minLetters: number;
  maxLetters: number;
};

export default function LettersLength({ minLetters, maxLetters }: Props) {
  return (
    <>
      <Typography className="MuiTypography-Selection" variant="body1">
        Choose how many letters you want:
      </Typography>
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
