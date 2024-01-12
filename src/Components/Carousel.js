import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { Box, Typography } from "@mui/material";

export default function BannerCarousel() {
  return (
    <>
      <Box sx={{ display: { md: "block", sm: "block", xs: "none" } }}>
        <Carousel infiniteLoop autoPlay>
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
                  color: "#268703",
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
                  color: "#268703",
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
                  color: "#268703",
                  fontFamily: "monospace",
                }}
              >
                Farmers
              </span>
            </Typography>
          </Box>
        </Carousel>
      </Box>
      {/* Mobile */}
      <Box sx={{ display: { md: "none", sm: "none", xs: "block" } }}>
        <Carousel infiniteLoop autoPlay>
          <Box component="div" className="bannermobile">
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
                fontSize: 40,
              }}
            >
              <span
                style={{
                  color: "#268703",
                  fontFamily: "monospace",
                }}
              >
                Healthy
              </span>{" "}
              & Tasty food Choice
            </Typography>
          </Box>
          <Box component="div" className="banner1mobile">
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
                fontSize: 40,
              }}
            >
              Perfect meal for the whole{" "}
              <span
                style={{
                  color: "#83B841",
                  fontFamily: "monospace",
                }}
              >
                family
              </span>
            </Typography>
          </Box>
          <Box component="div" className="banner2mobile">
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
                fontSize: 40,
              }}
            >
              Amazing
              <span
                style={{
                  color: "#83B841",
                  fontFamily: "monospace",
                }}
              >
                recipies
              </span>
              for you to try
            </Typography>
          </Box>
          <Box component="div" className="banner3mobile">
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
                fontSize: 40,
              }}
            >
              Freshly made with
              <span
                style={{
                  color: "#268703",
                  fontFamily: "monospace",
                }}
              >
                the best
              </span>
              ingredients & love
            </Typography>
          </Box>
        </Carousel>
      </Box>
    </>
  );
}
