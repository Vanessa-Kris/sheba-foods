import React from "react";
import { Box, Grid, Typography } from "@mui/material";

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
        <Typography variant="h4">Shop all our amazing products</Typography>
        <Grid container columnSpacing={4} rowSpacing={4} sx={{ mt: 5 }}>
          <Grid
            item
            md={4}
            sm={6}
            xs={12}
            component="a"
            href="/products/tom-brown-whole-meal"
          >
            <Box
              component="img"
              src="/shop1.png"
              alt=""
              sx={{ width: "100%" }}
            />
            <Typography variant="h6">Tom Brown Whole Meal</Typography>
          </Grid>
          <Grid item md={4} sm={6} xs={12} component="a" href="/products/mug">
            <Box component="img" src="/mug.png" alt="" sx={{ width: "100%" }} />
            <Typography variant="h6">Sheba Foods Coffee Mug</Typography>
          </Grid>
          <Grid item md={4} sm={6} xs={12} component="a" href="/products/shirt">
            <Box
              component="img"
              src="/shirt.png"
              alt=""
              sx={{ width: "100%" }}
            />
            <Typography variant="h6">Sheba Foods Coffee TShirt</Typography>
          </Grid>
          <Grid item md={4} sm={6} xs={12} component="a" href="/products/apron">
            <Box
              component="img"
              src="/apron.png"
              alt=""
              sx={{ width: "100%" }}
            />
            <Typography variant="h6">Sheba Foods Apron</Typography>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
