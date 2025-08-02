import { Box, Input } from "@mui/material";
import { JSX } from "react";

type Props = {
  letters: string[];
};

export default function InputTiles({ letters }: Props) {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        marginTop: "1rem",
        columnGap: "0.75rem",
      }}
    >
      {letters.map(
        (_, index: number): JSX.Element => (
          <Input
            key={index}
            sx={{
              "& .MuiInput-input": {
                height: "2.75rem",
                width: "2.75rem",
                backgroundColor: "transparent",
                caretColor: "transparent",
                border: "0.25rem solid #8b8b8b",
                borderRadius: "0.5rem",
                color: "#fff",
                fontSize: "2rem",
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
