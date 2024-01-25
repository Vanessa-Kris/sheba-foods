import { Box, Typography } from "@mui/material";
import React from "react";
import { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import "../App.css";

export default function Reviews() {
  const ref = useRef(null);
  const { scrollXProgress } = useScroll({ container: ref });
  return (
    <Box
      sx={{
        mt: { md: 7, sm: 10, xs: 2 },
        py: 10,
        px: { md: 10, sm: 7, xs: 2 },
      }}
    >
      <Typography
        variant="h3"
        textAlign="center"
        sx={{
          fontWeight: 700,
          mb: 7,
        }}
      >
        Reviews
      </Typography>
      {/* <Divider
        flexItem
        sx={{ bgcolor: "#d7d0d7", width: { md: "20%", xs: "40%" }, mb: 4 }}
      /> */}

      <svg id="progress" width="100" height="100" viewBox="0 0 100 100">
        <circle cx="50" cy="50" r="30" pathLength="1" className="bg" />
        <motion.circle
          cx="50"
          cy="50"
          r="30"
          pathLength="1"
          className="indicator"
          style={{ pathLength: scrollXProgress, color: "black" }}
        />
      </svg>

      <ul ref={ref} className="list">
        <li className="listitems">
          <Box component="img" src="/rev1.png" sx={{ width: "100%" }} />
        </li>

        {/*  */}

        <li className="listitems">
          <Box component="img" src="/rev2.png" sx={{ width: "100%" }} />
        </li>

        {/*  */}

        <li className="listitems">
          <Box component="img" src="/rev3.png" sx={{ width: "100%" }} />
        </li>

        {/*  */}

        {/*  */}
      </ul>
    </Box>
  );
}
