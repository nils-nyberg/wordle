import InputTiles from "@/components/InputTiles";
import { Typography } from "@mui/material";

export default function Home() {
  return (
    <>
      <Typography
        variant="h1"
        sx={{
          fontSize: "4rem",
          fontWeight: "400",
          textAlign: "center",
          textDecoration: "underline",
        }}
      >
        Wordle-ish
      </Typography>
      <InputTiles />
    </>
  );
}
