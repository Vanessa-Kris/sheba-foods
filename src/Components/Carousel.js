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
    style={{ position: "absolute", top: "47%", left: "40px", zIndex: 2 }}
  >
    <Box
      component="img"
      src="/leaficon.png"
      alt="leaf"
      sx={{ width: "97% !important", rotate: "-90deg" }}
    />
  </IconButton>
);

const renderArrowNext = (clickHandler, hasNext, label) => (
  <IconButton
    onClick={clickHandler}
    disabled={!hasNext}
    style={{ position: "absolute", top: "47%", right: "40px", zIndex: 2 }}
  >
    <Box
      component="img"
      src="/leaficon.png"
      alt="leaf"
      sx={{ width: "97% !important", rotate: "90deg" }}
    />
  </IconButton>
);

export default function BannerCarousel() {
  return (
    <Carousel
      // autoPlay
      renderArrowPrev={renderArrowPrev}
      renderArrowNext={renderArrowNext}
    >
      <Box component="div">
        <Grid container sx={{ px: 10 }}>
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
                fontSize: { md: 90, sm: 60, xs: 60 },
              }}
            >
              <span
                style={{
                  color: "#698F3C",
                  fontFamily: "monospace",
                }}
              >
                Healthy
              </span>{" "}
              & Tasty food Choice
            </Typography>
          </Grid>
          <Grid item md={6} sm={6} xs={12}>
            <Box
              component="img"
              sx={{ width: { md: "95% !important", xs: "100%" } }}
              src="/tombrown.png"
              alt="Legend 2"
            />
          </Grid>
        </Grid>
      </Box>
      <Box>
        <Grid container sx={{ px: 10 }}>
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
                fontSize: { md: 90, sm: 60, xs: 60 },
              }}
            >
              Amazing
              <span
                style={{
                  color: "#698F3C",
                  fontFamily: "monospace",
                }}
              >
                Natural
              </span>
              recipes for you to try!
            </Typography>
          </Grid>
          <Grid item md={6} sm={6} xs={12}>
            <Box
              component="img"
              sx={{
                width: { md: "90% !important", xs: "100%" },
                mt: { md: 10, sm: 7, xs: 0 },
                borderRadius: 30,
              }}
              src="/family.png"
              alt="Legend 2"
            />
          </Grid>
        </Grid>
      </Box>
      <Box>
        <Grid container sx={{ px: 10 }}>
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
                fontSize: { md: 90, sm: 60, xs: 60 },
              }}
            >
              Perfect meal for the Whole{" "}
              <span
                style={{
                  color: "#698F3C",
                  fontFamily: "monospace",
                }}
              >
                Family
              </span>
            </Typography>
          </Grid>
          <Grid item md={6} sm={6} xs={12}>
            <Box
              component="img"
              sx={{
                width: { md: "90% !important", xs: "100%" },
                mt: { md: 10, sm: 7, xs: 0 },
                borderRadius: { md: 30, sm: 20, xs: 10 },
              }}
              src="/father.png"
              alt="Legend 2"
            />
          </Grid>
        </Grid>
      </Box>

      <Box>
        <Grid container sx={{ px: 10 }}>
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
                fontSize: { md: 90, sm: 60, xs: 60 },
              }}
            >
              Freshly sourced from local{" "}
              <span
                style={{
                  color: "#698F3C",
                  fontFamily: "monospace",
                }}
              >
                Farmers
              </span>
            </Typography>
          </Grid>
          <Grid item md={6} sm={6} xs={12}>
            <Box
              component="img"
              sx={{
                width: { md: "90% !important", xs: "100%" },
                mt: { md: 10, sm: 7, xs: 0 },
                borderRadius: 30,
              }}
              src="/farm.jpg"
              alt="Legend 2"
            />
          </Grid>
        </Grid>
      </Box>
    </Carousel>
  );
}
