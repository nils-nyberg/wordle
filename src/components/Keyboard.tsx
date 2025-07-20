import { Box, Button, SxProps } from "@mui/material";
import { JSX } from "react";

type Props = {
  handleUserInput: (userInput: string) => void;
};

const boxStyle: SxProps = {
  display: "flex",
  marginBottom: "1rem",
  justifyContent: "center",
  columnGap: "1rem",
};

export default function Keyboard({ handleUserInput }: Props) {
  const row1: string[] = ["Q", "W", "E", "R", "T", "Y"];
  const row2: string[] = ["U", "I", "O", "P", "Å", "A"];
  const row3: string[] = ["S", "D", "F", "G", "H", "J"];
  const row4: string[] = ["K", "L", "Ö", "Ä", "Z", "X"];
  const row5: string[] = ["C", "V", "B", "N", "M"];
  return (
    <Box sx={{ marginTop: "0.85rem", backgroundColor: "#1b1b1b" }}>
      <Box sx={boxStyle}>
        {row1.map(
          (letter: string, index: number): JSX.Element => (
            <Button
              key={index}
              className="MuiButton-Keyboard"
              variant="outlined"
              onClick={() => handleUserInput(letter)}
            >
              {letter}
            </Button>
          )
        )}
      </Box>
      <Box sx={boxStyle}>
        {row2.map(
          (letter: string, index: number): JSX.Element => (
            <Button
              key={index}
              className="MuiButton-Keyboard"
              variant="outlined"
              onClick={() => handleUserInput(letter)}
            >
              {letter}
            </Button>
          )
        )}
      </Box>
      <Box sx={boxStyle}>
        {row3.map(
          (letter: string, index: number): JSX.Element => (
            <Button
              key={index}
              className="MuiButton-Keyboard"
              variant="outlined"
              onClick={() => handleUserInput(letter)}
            >
              {letter}
            </Button>
          )
        )}
      </Box>
      <Box sx={boxStyle}>
        {row4.map(
          (letter: string, index: number): JSX.Element => (
            <Button
              key={index}
              className="MuiButton-Keyboard"
              variant="outlined"
              onClick={() => handleUserInput(letter)}
            >
              {letter}
            </Button>
          )
        )}
      </Box>
      <Box sx={boxStyle}>
        {row5.map(
          (letter: string, index: number): JSX.Element => (
            <Button
              key={index}
              className="MuiButton-Keyboard"
              variant="outlined"
              onClick={() => handleUserInput(letter)}
            >
              {letter}
            </Button>
          )
        )}
      </Box>
      <Box
        sx={{
          ...boxStyle,
          columnGap: "10rem",
          marginBottom: "0",
        }}
      >
        <Button
          variant="contained"
          sx={{
            fontSize: "2rem",
            height: "3rem",
            width: "3rem",
            minWidth: "0",
          }}
          onClick={() => handleUserInput("Enter")}
        >
          &#9166;
        </Button>
        <Button
          variant="contained"
          sx={{
            fontSize: "1.5rem",
            height: "3rem",
            width: "3rem",
            minWidth: "0",
          }}
          onClick={() => handleUserInput("Backspace")}
        >
          &#9003;
        </Button>
      </Box>
    </Box>
  );
}
