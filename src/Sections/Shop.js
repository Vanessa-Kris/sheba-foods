import { Box, Typography, Button, Grid } from "@mui/material";
import React from "react";
import { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import "../App.css";

export default function Shop() {
  const ref = useRef(null);
  const { scrollXProgress } = useScroll({ container: ref });
  return (
    <Box
      align="center"
      sx={{
        mt: { md: 7, sm: 10, xs: 2 },
        py: 10,
        px: { md: 10, sm: 7, xs: 2 },
      }}
    >
      <Typography
        variant="h2"
        textAlign="center"
        sx={{
          fontWeight: 700,
          mb: 7,
        }}
      >
        Shop
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

      <Grid container>
        <Grid
          item
          md={6}
          sm={6}
          xs={12}
          sx={{ justifyContent: "center", align: "center", my: "auto" }}
        >
          <Typography variant="h4" sx={{ mb: 3 }}>
            Get All Your Faves Right Here
          </Typography>
          <Typography variant="p" sx={{ color: "#505050" }}>
            Some random text about shopping that I'd definitely add later for
            sure....
          </Typography>
          <br />
          <Button
            component="a"
            href="/products"
            variant="contained"
            sx={{ mt: 3, textTransform: "none" }}
          >
            Shop{" "}
            <Box
              component="img"
              src="/doublewheat.png"
              alt="leaf"
              sx={{ width: "20% !important", rotate: "70deg" }}
            />
          </Button>
        </Grid>
        <Grid item md={6} sm={6} xs={12}>
          <ul ref={ref} className="list">
            <li className="listitems">
              <a href="/products/tom-brown-whole-meal">
                <Box
                  component="img"
                  sx={{ width: "100%" }}
                  src="/shop1.png"
                  alt=""
                />{" "}
              </a>
            </li>

            <li className="listitems">
              <a href="/products/shirt">
                <Box
                  component="img"
                  sx={{ width: "100%" }}
                  src="/shirt.png"
                  alt=""
                />
              </a>
            </li>

            <li className="listitems">
              <a href="/products/apron">
                <Box
                  component="img"
                  sx={{ width: "100%" }}
                  src="apron.png"
                  alt=""
                />
              </a>
            </li>
            <li className="listitems">
              <a href="/products/tom-brown-whole-meal">
                <Box
                  component="img"
                  sx={{ width: "100%" }}
                  src="shop.png"
                  alt=""
                />
              </a>
            </li>
            <li className="listitems">
              <a href="/products/mug">
                <Box
                  component="img"
                  sx={{ width: "100%" }}
                  src="mug.png"
                  alt=""
                />
              </a>
            </li>
            <li className="listitems">
              <a href="/products/tom-brown-whole-meal">
                <Box
                  component="img"
                  sx={{ width: "100%" }}
                  src="shop1.png"
                  alt=""
                />
              </a>
            </li>
          </ul>
        </Grid>
      </Grid>
    </Box>
  );
}
