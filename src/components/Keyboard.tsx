import { Box, Button } from "@mui/material";

type Props = {
  handleUserInput: (userInput: string) => void;
};

export default function Keyboard({ handleUserInput }: Props) {
  const row1: string[] = ["Q", "W", "E", "R", "T", "Y"];
  const row2: string[] = ["U", "I", "O", "P", "Å", "A"];
  const row3: string[] = ["S", "D", "F", "G", "H", "J"];
  const row4: string[] = ["K", "L", "Ö", "Ä", "Z", "X"];
  const row5: string[] = ["C", "V", "B", "N", "M"];
  return (
    <Box sx={{ marginTop: "3rem", backgroundColor: "#1b1b1b" }}>
      <Box
        sx={{
          display: "flex",
          marginBottom: "1rem",
          justifyContent: "center",
          columnGap: "1rem",
        }}
      >
        {row1.map((letter: string, index: number) => (
          <Button
            key={index}
            className="MuiButton-Keyboard"
            variant="outlined"
            onClick={() => handleUserInput(letter)}
          >
            {letter}
          </Button>
        ))}
      </Box>
      <Box
        sx={{
          display: "flex",
          marginBottom: "1rem",
          justifyContent: "center",
          columnGap: "1rem",
        }}
      >
        {row2.map((letter: string, index: number) => (
          <Button
            key={index}
            className="MuiButton-Keyboard"
            variant="outlined"
            onClick={() => handleUserInput(letter)}
          >
            {letter}
          </Button>
        ))}
      </Box>
      <Box
        sx={{
          display: "flex",
          marginBottom: "1rem",
          justifyContent: "center",
          columnGap: "1rem",
        }}
      >
        {row3.map((letter: string, index: number) => (
          <Button
            key={index}
            className="MuiButton-Keyboard"
            variant="outlined"
            onClick={() => handleUserInput(letter)}
          >
            {letter}
          </Button>
        ))}
      </Box>
      <Box
        sx={{
          display: "flex",
          marginBottom: "1rem",
          justifyContent: "center",
          columnGap: "1rem",
        }}
      >
        {row4.map((letter: string, index: number) => (
          <Button
            key={index}
            className="MuiButton-Keyboard"
            variant="outlined"
            onClick={() => handleUserInput(letter)}
          >
            {letter}
          </Button>
        ))}
      </Box>
      <Box
        sx={{
          display: "flex",
          marginBottom: "1rem",
          justifyContent: "center",
          columnGap: "1rem",
        }}
      >
        {row5.map((letter: string, index: number) => (
          <Button
            key={index}
            className="MuiButton-Keyboard"
            variant="outlined"
            onClick={() => handleUserInput(letter)}
          >
            {letter}
          </Button>
        ))}
      </Box>
      <Box
        sx={{
          display: "flex",
          marginBottom: "1rem",
          justifyContent: "center",
          columnGap: "10rem",
        }}
      >
        <Button
          variant="contained"
          sx={{ fontSize: "2rem" }}
          onClick={() => handleUserInput("Enter")}
        >
          &#9166;
        </Button>
        <Button
          variant="contained"
          sx={{ fontSize: "1.5rem" }}
          onClick={() => handleUserInput("Backspace")}
        >
          &#9003;
        </Button>
      </Box>
    </Box>
  );
}
