import React from "react";
import { Box, CircularProgress } from "@mui/material";

export default function Loader() {
  return (
    <Box
      my="auto"
      align="center"
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "fit-content",
        color: "green",
      }}
    >
      <CircularProgress color="success" />
    </Box>
  );
}
