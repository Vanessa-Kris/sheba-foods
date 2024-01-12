import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import ImageWithLoader from "../Components/ImageWithLoader";

export default function Shop() {
  return (
    <Box className="Shop">
      <Box
        component="img"
        src="/shopbanner.png"
        alt=""
        sx={{ width: "100%", pt: { xs: 7 } }}
      />

      <Box sx={{ m: { md: 15, sm: 10, xs: 5 } }} align="center">
        <Typography variant="h4" sx={{ fontWeight: 500 }}>
          Shop our amazing product
        </Typography>
        <Grid container columnSpacing={5} rowSpacing={4} sx={{ mt: 5 }}>
          <Grid
            justifyContent="center"
            alignItems="center"
            align="center"
            mx="auto"
            item
            md={6}
            sm={6}
            xs={12}
            component="a"
            href="/products/tom-brown-whole-meal"
          >
            <Box
              component="img"
              src="/file.jpeg"
              alt=""
              sx={{ width: "90%" }}
            />
            <Typography variant="h6">Tom Brown Whole Meal</Typography>
            <Typography variant="p" sx={{ fontWeight: 500, color: "#505050" }}>
              NGN 2000
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
