import { Typography, Box, Button } from "@mui/material";
import { useState } from "react";

export default function LettersLength() {
  const [buttonColorYes, setButtonColorYes] = useState<"success" | "primary">(
    "primary"
  );
  const [buttonColorNo, setButtonColorNo] = useState<"success" | "primary">(
    "primary"
  );

  const handleClick = (state: boolean) => {
    if (state) {
      setButtonColorYes("success");
      setButtonColorNo("primary");
    } else {
      setButtonColorYes("primary");
      setButtonColorNo("success");
    }
  };
  return (
    <>
      <Typography className="MuiTypography-Selection" variant="body1">
        Should all letters be unique?
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          columnGap: "2rem",
          marginTop: "1rem",
        }}
      >
        <Button
          variant="contained"
          color={buttonColorYes}
          onClick={() => handleClick(true)}
        >
          Yes
        </Button>
        <Button
          variant="contained"
          color={buttonColorNo}
          onClick={() => handleClick(false)}
        >
          No
        </Button>
      </Box>
    </>
  );
}
