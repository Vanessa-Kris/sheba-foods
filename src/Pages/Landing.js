import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { Box, Typography, IconButton, Grid } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const renderArrowPrev = (clickHandler, hasPrev, label) => (
  <IconButton
    onClick={clickHandler}
    disabled={!hasPrev}
    style={{ position: "absolute", top: "50%", left: "15px", zIndex: 2 }}
  >
    <ArrowBackIcon />
  </IconButton>
);

const renderArrowNext = (clickHandler, hasNext, label) => (
  <IconButton
    onClick={clickHandler}
    disabled={!hasNext}
    style={{ position: "absolute", top: "50%", right: "15px", zIndex: 2 }}
  >
    <ArrowForwardIcon />
  </IconButton>
);

export default function Landing() {
  return (
    <Carousel
      // autoPlay
      renderArrowPrev={renderArrowPrev}
      renderArrowNext={renderArrowNext}
    >
      <div>
        <Box>
          <Grid container>
            <Grid item md={6} sm={6} xs={12}>
              <Typography
                variant="h2"
                textAlign="center"
                sx={{
                  fontWeight: 700,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  textAlign: "center",
                  height: "100%",
                }}
              >
                Healthy & Tasty food Choices
              </Typography>
            </Grid>
            <Grid item md={6} sm={6} xs={12}>
              <img src="/tombrown2.png" alt="Legend 2" />
            </Grid>
          </Grid>
        </Box>
      </div>
      <Box>
        <Grid container>
          <Grid item md={6} sm={6} xs={12}>
            <Typography
              variant="h2"
              sx={{
                fontWeight: 700,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
                height: "100%",
              }}
            >
              Amazing Natural recipes for you to try!
            </Typography>
          </Grid>
          <Grid item md={6} sm={6} xs={12}>
            <img src="/bowl.png" alt="Legend 2" />
          </Grid>
        </Grid>
      </Box>
      <div>
        <Box>
          <Grid container>
            <Grid item md={6} sm={6} xs={12}>
              <Typography
                variant="h2"
                textAlign="center"
                sx={{
                  fontWeight: 700,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  textAlign: "center",
                  height: "100%",
                }}
              >
                Freshly sourced from local farmers
              </Typography>
            </Grid>
            <Grid item md={6} sm={6} xs={12}>
              <img src="/farm.jpg" alt="Legend 2" />
            </Grid>
          </Grid>
        </Box>
      </div>
    </Carousel>
  );
}
