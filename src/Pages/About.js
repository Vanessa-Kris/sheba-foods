import { Box, Grid, Typography } from "@mui/material";
import React from "react";

export default function About() {
  return (
    <Box
      sx={{
        mt: { md: 5, sm: 5, xs: 0 },
        py: 10,
        px: { md: 10, sm: 7, xs: 2 },
      }}
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
          About{" "}
          <span
            style={{
              color: "#698F3C",
              fontFamily: "monospace",
            }}
          >
            Us
          </span>
        </Typography>
        <Typography align="center" variant="p" textAlign="center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </Typography>
        <br />
        <br />
        <Typography align="center" variant="p" textAlign="center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. incididunt ut labore et dolore magna
          aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
          laboris nisi ut aliquip ex ea commodo consequat
        </Typography>
      </Box>
      <Grid container rowSpacing={7} columnSpacing={5} sx={{ mt: 5 }}>
        <Grid item md={6} sm={6} xs={12}>
          <Box
            component="img"
            src="/field.jpg"
            alt=""
            sx={{ width: "100%", borderRadius: "30px" }}
          />
        </Grid>
        <Grid
          item
          md={6}
          sm={6}
          xs={12}
          justifyContent="center"
          alignItems="center"
          my="auto"
        >
          <Typography
            variant="h2"
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
              Vision
            </span>
          </Typography>

          <Typography variant="p">
            Explore the comprehensive nutritional profile and myriad health
            advantages associated with this wholesome wholemeal.
          </Typography>
          <br />
          <Typography variant="p">
            Explore the comprehensive nutritional profile and myriad health
            advantages associated with this wholesome wholemeal.
          </Typography>
        </Grid>
        {/*  */}

        <Grid
          item
          md={6}
          sm={6}
          xs={12}
          justifyContent="center"
          alignItems="center"
          my="auto"
        >
          <Typography
            variant="h2"
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
              Mission
            </span>
          </Typography>

          <Typography variant="p">
            Explore the comprehensive nutritional profile and myriad health
            advantages associated with this wholesome wholemeal.
          </Typography>
          <br />
          <Typography variant="p">
            Explore the comprehensive nutritional profile and myriad health
            advantages associated with this wholesome wholemeal.
          </Typography>
        </Grid>
        <Grid item md={6} sm={6} xs={12}>
          <Box
            component="img"
            src="/health.jpg"
            alt=""
            sx={{ width: "100%", borderRadius: "30px" }}
          />
        </Grid>
      </Grid>
    </Box>
  );
}
