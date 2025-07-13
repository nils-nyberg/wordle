import { Box, List, ListItem, Input } from "@mui/material";
import { JSX } from "react";

type Props = {
  guesses: string[][];
};

export default function GuessesList({ guesses }: Props) {
  return (
    <List
      sx={{
        marginTop: "3rem",
        height: "30rem",
        overflow: "scroll",
      }}
    >
      {guesses.map(
        (_, rowIndex: number): JSX.Element => (
          <ListItem key={rowIndex}>
            <Box
              sx={{
                margin: "0 auto",
              }}
            >
              {guesses[rowIndex].map((_, letterIndex) => (
                <Input
                  key={letterIndex}
                  sx={{
                    "& .MuiInput-input": {
                      height: "4rem",
                      width: "4rem",
                      marginRight: "0.75rem",
                      backgroundColor: "transparent",
                      caretColor: "transparent",
                      border: "0.25rem solid #8b8b8b",
                      borderRadius: "1rem",
                      color: "#fff",
                      fontSize: "3rem",
                      textAlign: "center",
                      textTransform: "uppercase",
                    },
                  }}
                  value={guesses[rowIndex][letterIndex]}
                  disableUnderline
                  type="text"
                  readOnly
                />
              ))}
            </Box>
          </ListItem>
        )
      )}
    </List>
  );
}
