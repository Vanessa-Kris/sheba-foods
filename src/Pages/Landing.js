import { Box, Divider, Grid, Typography, Button } from "@mui/material";
import React from "react";
import BannerCarousel from "../Components/Carousel";

export default function Landing() {
  return (
    <Box>
      <BannerCarousel />
      <Divider sx={{ mx: 7 }} />
      <Box sx={{ m: { md: 15, sm: 10, xs: 5 } }}>
        <Grid container align="center" columnSpacing={2}>
          <Grid item md={3} sm={3} xs={6}>
            <Box component="img" src="/sweet.png" alt="" />
            <Typography variant="h6" sx={{ fontWeight: 500 }}>
              Natural sugar
            </Typography>
          </Grid>
          <Grid item md={3} sm={3} xs={6} sx={{ mb: { xs: 4 } }}>
            <Box component="img" src="/sustainable.png" alt="" />
            <Typography variant="h6" sx={{ fontWeight: 500 }}>
              Sustainable
            </Typography>
          </Grid>
          <Grid item md={3} sm={3} xs={6}>
            <Box component="img" src="/natural.png" alt="" />
            <Typography variant="h6" sx={{ fontWeight: 500 }}>
              Natural
            </Typography>
          </Grid>
          <Grid item md={3} sm={3} xs={6}>
            <Box component="img" src="/crueltyfree.png" alt="" />
            <Typography variant="h6" sx={{ fontWeight: 500 }}>
              Cruelty Free
            </Typography>
          </Grid>
        </Grid>
      </Box>
      <Box
        align="center"
        sx={{ mt: { md: 15, sm: 10, xs: 10 }, bgcolor: "#FECC2E", py: 10 }}
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
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </Typography>
          <br />
          <Button variant="contained" sx={{ mt: 5 }}>
            Learn more{" "}
            <Box
              component="img"
              src="/doublewheat.png"
              alt="leaf"
              sx={{ width: "20% !important", rotate: "70deg" }}
            />
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
