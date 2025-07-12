import { Typography, List, ListItem } from "@mui/material";
import { JSX } from "react";

type Props = {
  guesses: string[];
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
        (_, index: number): JSX.Element => (
          <ListItem key={index}>
            <Typography
              variant="body1"
              sx={{
                margin: "0 auto",
                textTransform: "uppercase",
              }}
            >
              {guesses[index]}
            </Typography>
          </ListItem>
        )
      )}
    </List>
  );
}
