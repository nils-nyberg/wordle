import { Box, Input } from "@mui/material";
import { JSX } from "react";

type Props = {
  letters: string[];
};

export default function InputTiles({ letters }: Props) {
  return (
    <Box sx={{ display: "flex", justifyContent: "center", marginTop: "5rem" }}>
      {letters.map(
        (_, index: number): JSX.Element => (
          <Input
            key={index}
            sx={{
              "& .MuiInput-input": {
                height: "6rem",
                width: "6rem",
                marginRight: "0.75rem",
                backgroundColor: "transparent",
                caretColor: "transparent",
                border: "0.25rem solid #8b8b8b",
                borderRadius: "1rem",
                color: "#fff",
                fontSize: "4rem",
                textAlign: "center",
                textTransform: "uppercase",
              },
            }}
            value={letters[index]}
            disableUnderline
            type="text"
            readOnly
          />
        )
      )}
    </Box>
  );
}
