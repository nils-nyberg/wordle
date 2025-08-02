import LettersLength from "@/components/settings/LettersLength";
import UniqueLetters from "@/components/settings/UniqueLetters";
import { Typography, Box, Button } from "@mui/material";

export default function Settings() {
  const minLetters: number = 1;
  const maxLetters: number = 10;

  return (
    <>
      <Typography variant="h1">Welcome</Typography>
      <Box>
        <LettersLength minLetters={minLetters} maxLetters={maxLetters} />
        <UniqueLetters />

        <Button
          sx={{
            display: "block",
            margin: "5rem auto 0 auto",
            width: "15rem",
            height: "4rem",
          }}
          variant="contained"
        >
          Play the game
        </Button>
      </Box>
    </>
  );
}
