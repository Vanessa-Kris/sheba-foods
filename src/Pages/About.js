import { Box, Typography } from "@mui/material";
import React from "react";

export default function About() {
  return (
    <Box
      sx={{
        mt: { md: 5, sm: 5, xs: 0 },
        py: 10,
        px: { md: 10, sm: 7, xs: 2 },
      }}
    >
      <Box
        align="center"
        sx={{
          mx: { md: 15, sm: 10, xs: 5 },
        }}
      >
        <Typography
          variant="h2"
          textAlign="center"
          sx={{
            fontWeight: 700,
            mb: 5,
          }}
        >
          Our{" "}
          <span
            style={{
              color: "#698F3C",
              fontFamily: "monospace",
            }}
          >
            Pledge
          </span>
        </Typography>
        <Typography
          align="center"
          variant="p"
          textAlign="center"
          sx={{ px: { md: 20 } }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </Typography>
        <br />
      </Box>
    </Box>
  );
}
