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
        <Typography variant="h4" sx={{ fontWeight: 500 }}>
          Shop all our amazing products
        </Typography>
        <Grid container columnSpacing={5} rowSpacing={4} sx={{ mt: 5 }}>
          <Grid
            justifyContent="center"
            alignItems="center"
            align="center"
            mx="auto"
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
            <Typography variant="p" sx={{ fontWeight: 500, color: "#505050" }}>
              NGN 3000
            </Typography>
          </Grid>
          <Grid item md={4} sm={6} xs={12} component="a" href="/products/mug">
            <Box component="img" src="/mug.png" alt="" sx={{ width: "100%" }} />
            <Typography variant="h6">Sheba Foods Coffee Mug</Typography>
            <Typography variant="p" sx={{ fontWeight: 500, color: "#505050" }}>
              NGN 3000
            </Typography>
          </Grid>
          <Grid item md={4} sm={6} xs={12} component="a" href="/products/shirt">
            <Box
              component="img"
              src="/shirt.png"
              alt=""
              sx={{ width: "100%" }}
            />
            <Typography variant="h6">Sheba Foods Coffee TShirt</Typography>
            <Typography variant="p" sx={{ fontWeight: 500, color: "#505050" }}>
              NGN 5000
            </Typography>
          </Grid>
          <Grid item md={4} sm={6} xs={12} component="a" href="/products/apron">
            <Box
              component="img"
              src="/apron.png"
              alt=""
              sx={{ width: "100%" }}
            />
            <Typography variant="h6">Sheba Foods Apron</Typography>
            <Typography variant="p" sx={{ fontWeight: 500, color: "#505050" }}>
              NGN 2000
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
