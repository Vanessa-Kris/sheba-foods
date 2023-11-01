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
      <Box component="div" className="banner">
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
            // zIndex: 1,
            color: "#fff",
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
      </Box>
      <Box component="div" className="banner1">
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
            color: "#fff",
            fontSize: { md: 80, sm: 60, xs: 55 },
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
      </Box>
      <Box component="div" className="banner2">
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
            color: "#fff",
            fontSize: { md: 80, sm: 60, xs: 55 },
          }}
        >
          Perfect meal for the whole{" "}
          <span
            style={{
              color: "#83B841",
              fontFamily: "monospace",
            }}
          >
            Family
          </span>
        </Typography>
      </Box>
      <Box component="div" className="banner3">
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
            color: "#fff",
            fontSize: { md: 80, sm: 60, xs: 55 },
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
      </Box>
    </Carousel>
  );
}
