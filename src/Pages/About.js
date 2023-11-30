import { Box, Grid, Typography } from "@mui/material";
import React from "react";

export default function About() {
  return (
    <>
      <Box
        sx={{
          mt: { md: 7, sm: 5, xs: 5 },
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
          <Typography
            align="center"
            variant="p"
            textAlign="center"
            sx={{ color: "#505050" }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </Typography>
          <br />
          <br />
          <Typography
            align="center"
            variant="p"
            textAlign="center"
            sx={{ color: "#505050" }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. incididunt ut labore et dolore
            magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
            ullamco laboris nisi ut aliquip ex ea commodo consequat
          </Typography>
        </Box>
        <Grid container rowSpacing={7} columnSpacing={5} sx={{ mt: 5 }}>
          <Grid item md={6} sm={6} xs={12}>
            <Box
              component="img"
              src="https://img.freepik.com/free-photo/close-up-hands-holding-plants_23-2149142897.jpg?size=626&ext=jpg&ga=GA1.1.1563347392.1696364341&semt=sph"
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

            <Typography variant="p" sx={{ color: "#505050" }}>
              Explore the comprehensive nutritional profile and myriad health
              advantages associated with this wholesome wholemeal.
            </Typography>
            <br />
            <Typography variant="p" sx={{ color: "#505050" }}>
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

            <Typography variant="p" sx={{ color: "#505050" }}>
              Explore the comprehensive nutritional profile and myriad health
              advantages associated with this wholesome wholemeal.
            </Typography>
            <br />
            <Typography variant="p" sx={{ color: "#505050" }}>
              Explore the comprehensive nutritional profile and myriad health
              advantages associated with this wholesome wholemeal.
            </Typography>
          </Grid>
          <Grid item md={6} sm={6} xs={12}>
            <Box
              component="img"
              src="https://img.freepik.com/free-photo/parents-kids-spending-time-together_23-2149489588.jpg?size=626&ext=jpg&ga=GA1.1.1563347392.1696364341&semt=ais"
              alt=""
              sx={{ width: "100%", borderRadius: "30px" }}
            />
          </Grid>
        </Grid>
        {/*  */}
      </Box>
      <Box
        align="center"
        sx={{ mt: { md: 4, sm: 4, xs: 4 }, bgcolor: "#FFFFCC", py: 10 }}
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
              Impact
            </span>
          </Typography>
          <Typography
            align="center"
            variant="p"
            textAlign="center"
            sx={{ color: "#505050" }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat.
          </Typography>
          <Typography
            align="center"
            variant="p"
            textAlign="center"
            sx={{ color: "#505050" }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat.
          </Typography>
          <br />
        </Box>
      </Box>
      {/*  */}

      <Box>
        <Box
          component="img"
          src="https://img.freepik.com/free-photo/medium-shot-smiley-farmer-cornfield_23-2149142834.jpg?size=626&ext=jpg&ga=GA1.1.1563347392.1696364341&semt=sph"
          sx={{ width: "100%" }}
        />
      </Box>

      {/*  */}
      <Box
        sx={{
          mt: { md: 7, sm: 5, xs: 5 },
          py: 10,
          px: { md: 10, sm: 7, xs: 2 },
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
          <span
            style={{
              color: "#698F3C",
              fontFamily: "monospace",
            }}
          >
            Green
          </span>{" "}
          Environment
        </Typography>
        <Grid container rowSpacing={7} columnSpacing={5} sx={{ mt: 5 }}>
          <Grid item md={6} sm={6} xs={12}>
            <Box
              component="img"
              src="https://img.freepik.com/free-photo/hands-cupping-plant-save-environment-campaign_53876-129539.jpg?size=626&ext=jpg&ga=GA1.1.1563347392.1696364341&semt=ais"
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
            <Typography variant="p" sx={{ color: "#505050" }}>
              Explore the comprehensive nutritional profile and myriad health
              advantages associated with this wholesome wholemeal.
            </Typography>
            <br />
            <Typography variant="p" sx={{ color: "#505050" }}>
              Explore the comprehensive nutritional profile and myriad health
              advantages associated with this wholesome wholemeal.
            </Typography>
          </Grid>
          {/*  */}
        </Grid>
      </Box>

      <Box
        align="center"
        sx={{ mt: { md: 4, sm: 4, xs: 4 }, bgcolor: "#FFFFCC", py: 10 }}
      >
        <Box
          align="center"
          sx={{
            mt: { md: 7, sm: 5, xs: 5 },
            my: 10,
            mx: { md: 10, sm: 7, xs: 2 },
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
            Local{" "}
            <span
              style={{
                color: "#698F3C",
                fontFamily: "monospace",
              }}
            >
              Farming
            </span>
          </Typography>
          <Typography
            align="center"
            variant="p"
            textAlign="center"
            sx={{ color: "#505050" }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat.
          </Typography>
          <Typography
            align="center"
            variant="p"
            textAlign="center"
            sx={{ color: "#505050" }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat.
          </Typography>
          <br />
        </Box>
      </Box>

      <Box>
        <Grid container columnSpacing={4}>
          <Grid item md={6} sm={6} xs={12}>
            <Box
              component="img"
              src="https://img.freepik.com/free-photo/medium-shot-smiley-farmer-cornfield_23-2149142834.jpg?size=626&ext=jpg&ga=GA1.1.1563347392.1696364341&semt=sph"
              sx={{ width: "100%" }}
            />
          </Grid>
          <Grid item md={6} sm={6} xs={12}>
            <Box
              component="img"
              src="https://img.freepik.com/free-photo/medium-shot-smiley-farmer-cornfield_23-2149142834.jpg?size=626&ext=jpg&ga=GA1.1.1563347392.1696364341&semt=sph"
              sx={{ width: "100%" }}
            />
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
