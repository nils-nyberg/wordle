import theme from "@/theme";
import { Box, List, ListItem, Input, Slide } from "@mui/material";
import { JSX, useEffect, useRef, useState } from "react";

type Props = {
  guesses: string[][];
};

type Direction = "up" | "down" | "left" | "right";

export default function GuessesList({ guesses }: Props) {
  const [direction, setDirection] = useState<Direction>("left");

  const handleChange = () => {
    if (direction === "left") {
      setDirection("right");
    } else setDirection("left");
  };

  const bottomOfGuessList = useRef<HTMLDivElement>(null);

  // Automatic scrolling for previous guesses
  useEffect((): void => {
    if (bottomOfGuessList.current) {
      bottomOfGuessList.current.scrollIntoView();
    }
  }, [guesses]);

  return (
    <List
      sx={{
        height: "8rem",
        overflowY: "scroll",
        overflowX: "hidden",
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
                (_, letterIndex: number): JSX.Element => (
                  <Slide
                    key={letterIndex}
                    onAnimationEnd={handleChange}
                    direction={direction}
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
      <div ref={bottomOfGuessList}></div>
    </List>
  );
}
