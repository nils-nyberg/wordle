import { Box, List, ListItem, Input, Slide } from "@mui/material";
import { JSX, useState } from "react";

type Props = {
  guesses: string[][];
};

export default function GuessesList({ guesses }: Props) {
  return (
    <List
      sx={{
        height: "8rem",
        overflow: "scroll",
      }}
    >
      {guesses.map(
        (_, rowIndex: number): JSX.Element => (
          <ListItem key={rowIndex}>
            <Box
              sx={{
                display: "flex",
                margin: "0 auto",
                columnGap: "0.75rem",
              }}
            >
              {guesses[rowIndex].map(
                (_, letterIndex): JSX.Element => (
                  <Slide
                    key={letterIndex}
                    direction="up"
                    in={true}
                    mountOnEnter
                    unmountOnExit
                  >
                    <Input
                      sx={{
                        "& .MuiInput-input": {
                          height: "2rem",
                          width: "2rem",
                          backgroundColor: "transparent",
                          caretColor: "transparent",
                          border: "0.25rem solid #8b8b8b",
                          borderRadius: "0.5rem",
                          color: "#fff",
                          fontSize: "1.5rem",
                          textAlign: "center",
                          textTransform: "uppercase",
                        },
                      }}
                      value={guesses[rowIndex][letterIndex]}
                      disableUnderline
                      type="text"
                      readOnly
                    />
                  </Slide>
                )
              )}
            </Box>
          </ListItem>
        )
      )}
    </List>
  );
}
