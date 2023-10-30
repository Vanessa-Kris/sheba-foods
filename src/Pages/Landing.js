import { Box, Divider, Grid, Typography } from "@mui/material";
import React from "react";
import BannerCarousel from "../Components/Carousel";

export default function Landing() {
  return (
    <Box>
      <BannerCarousel />
      <Divider sx={{ mx: 7 }} />
      <Box sx={{ m: { md: 15, sm: 10, xs: 5 } }}>
        <Grid container align="center" columnSpacing={4}>
          <Grid item md={3} sm={3} xs={6}>
            <Box component="img" src="/sweet.png" alt="" />
            <Typography variant="h6" sx={{ fontWeight: 500 }}>
              Natural sugar
            </Typography>
            <Typography variant="p" sx={{ px: { md: 3 }, textAlign: "center" }}>
              Lorem Ipsum dolor sit amet some more text to fill up space.
            </Typography>
          </Grid>
          <Grid item md={3} sm={3} xs={6} sx={{ mb: { xs: 2 } }}>
            <Box component="img" src="/sustainable.png" alt="" />
            <Typography variant="h6" sx={{ fontWeight: 500 }}>
              Sustainable
            </Typography>
            <Typography variant="p" sx={{ px: { md: 3 }, textAlign: "center" }}>
              Lorem Ipsum dolor sit amet some more text to fill up space.
            </Typography>
          </Grid>
          <Grid item md={3} sm={3} xs={6}>
            <Box component="img" src="/natural.png" alt="" />
            <Typography variant="h6" sx={{ fontWeight: 500 }}>
              Natural
            </Typography>
            <Typography variant="p" sx={{ px: { md: 3 }, textAlign: "center" }}>
              Lorem Ipsum dolor sit amet some more text to fill up space.
            </Typography>
          </Grid>
          <Grid item md={3} sm={3} xs={6}>
            <Box component="img" src="/crueltyfree.png" alt="" />
            <Typography variant="h6" sx={{ fontWeight: 500 }}>
              Cruelty Free
            </Typography>
            <Typography variant="p" sx={{ px: { md: 3 }, textAlign: "center" }}>
              Lorem Ipsum dolor sit amet some more text to fill up space.
            </Typography>
          </Grid>
        </Grid>
      </Box>
      <Box sx={{ m: { md: 15, sm: 10, xs: 5 } }}>
        <Typography
          variant="h2"
          textAlign="center"
          sx={{
            fontWeight: 700,
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
        <Typography variant="p" textAlign="center" sx={{ px: { md: 15 } }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </Typography>
      </Box>
    </Box>
  );
}
