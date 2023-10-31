import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { Box, Typography, IconButton, Grid, Button } from "@mui/material";

const renderArrowPrev = (clickHandler, hasPrev, label) => (
  <IconButton
    onClick={clickHandler}
    disabled={!hasPrev}
    sx={{
      position: "absolute",
      top: { md: "47%", xs: "38%" },
      left: { md: "40px", xs: 0 },
      zIndex: 2,
    }}
  >
    <Box
      component="img"
      src="/doublewheat.png"
      alt="leaf"
      sx={{ width: "60% !important", rotate: "-100deg" }}
    />
  </IconButton>
);

const renderArrowNext = (clickHandler, hasNext, label) => (
  <IconButton
    onClick={clickHandler}
    disabled={!hasNext}
    sx={{
      position: "absolute",
      top: { md: "47%", xs: "38%" },
      right: { md: "47px", xs: 0 },
      zIndex: 2,
    }}
  >
    <Box
      component="img"
      src="/doublewheat.png"
      alt="leaf"
      sx={{
        width: "60% !important",
        rotate: "80deg",
      }}
    />
  </IconButton>
);

export default function BannerCarousel() {
  const isMobileView = window.innerWidth <= 600; // Adjust the breakpoint as needed
  return (
    <Carousel
      // autoPlay
      renderArrowPrev={isMobileView ? undefined : renderArrowPrev}
      renderArrowNext={isMobileView ? undefined : renderArrowNext}
    >
      <Box component="div">
        <Grid container sx={{ px: { md: 10, sm: 8, xs: 1 } }}>
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
                fontSize: { md: 80, sm: 60, xs: 55 },
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

            <Button variant="contained">Buy Now</Button>
          </Grid>
          <Grid item md={6} sm={6} xs={12}>
            <Box
              component="img"
              sx={{ width: { md: "95% !important", xs: "100% !important" } }}
              src="/tombrown.png"
              alt="Legend 2"
            />
          </Grid>
        </Grid>
      </Box>
      <Box>
        <Grid
          container
          sx={{ px: { md: 10, sm: 8, xs: 1 }, mt: { md: 10, sm: 7, xs: 0 } }}
        >
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
                fontSize: { md: 80, sm: 55, xs: 55 },
                px: 5,
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

            <Button variant="contained">Recipes</Button>
          </Grid>
          <Grid item md={6} sm={6} xs={12}>
            <Box
              component="img"
              sx={{
                width: { md: "90% !important", xs: "100% !important" },
                mt: { md: 10, sm: 7, xs: 4 },
                borderRadius: { md: 30, sm: 20, xs: 10 },
              }}
              src="/family.png"
              alt="Legend 2"
            />
          </Grid>
        </Grid>
      </Box>
      <Box>
        <Grid
          container
          sx={{ px: { md: 10, sm: 8, xs: 1 }, mt: { md: 10, sm: 7, xs: 0 } }}
        >
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
                fontSize: { md: 80, sm: 55, xs: 55 },
                px: 4,
              }}
            >
              Perfect meal for the whole{" "}
              <span
                style={{
                  color: "#698F3C",
                  fontFamily: "monospace",
                }}
              >
                Family
              </span>
            </Typography>
            <Button variant="contained">Buy Now</Button>
          </Grid>
          <Grid item md={6} sm={6} xs={12}>
            <Box
              component="img"
              sx={{
                width: { md: "90% !important", xs: "100% !important" },
                mt: { md: 10, sm: 7, xs: 4 },
                borderRadius: { md: 30, sm: 20, xs: 10 },
              }}
              src="/father.png"
              alt="Legend 2"
            />
          </Grid>
        </Grid>
      </Box>

      <Box>
        <Grid
          container
          sx={{ px: { md: 10, sm: 8, xs: 1 }, mt: { md: 10, sm: 7, xs: 0 } }}
        >
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
                fontSize: { md: 80, sm: 55, xs: 55 },
                px: 4,
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
            <Button variant="contained">Buy Now</Button>
          </Grid>
          <Grid item md={6} sm={6} xs={12}>
            <Box
              component="img"
              sx={{
                width: { md: "90% !important", xs: "100% !important" },
                mt: { md: 10, sm: 7, xs: 4 },
                borderRadius: { md: 30, sm: 20, xs: 10 },
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
