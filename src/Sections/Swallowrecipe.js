import React from "react";
import { Box, Typography } from "@mui/material";

export default function Swallowrecipe() {
  return (
    <Box>
      <Box
        component="img"
        src="/tea.jpg"
        alt=""
        sx={{ width: "100%", pt: { xs: 7 } }}
      />
      <Box sx={{ m: { md: 15, sm: 10, xs: 3 } }}>
        <Typography variant="h6">Tea recipe</Typography>
      </Box>
    </Box>
  );
}
