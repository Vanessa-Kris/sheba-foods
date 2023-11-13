import { Box, Divider, Grid, Typography, Button } from "@mui/material";
import React, { useState, useEffect } from "react";
import BannerCarousel from "../Components/Carousel";
import ImageWithLoader from "../Components/ImageWithLoader";
import Loader from "../Components/Loader";
import Reviews from "../Sections/Reviews";
import Shop from "../Sections/Shop";

export default function Landing() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate an async operation
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  return (
    <Box>
      {isLoading ? <Loader /> : <BannerCarousel />}
      <Divider sx={{ mx: 7 }} />
      <Box sx={{ m: { md: 15, sm: 10, xs: 5 } }}>
        <Grid container align="center" columnSpacing={2}>
          <Grid item md={3} sm={3} xs={6}>
            <Box component="img" src="/emoj.png" alt="" sx={{ width: "50%" }} />
            <Typography variant="h6" sx={{ fontWeight: 500 }}>
              Natural sugar
            </Typography>
          </Grid>
          <Grid item md={3} sm={3} xs={6} sx={{ mb: { xs: 4 } }}>
            <Box
              component="img"
              src="/earth.png"
              alt=""
              sx={{ width: "40%" }}
            />
            <Typography variant="h6" sx={{ fontWeight: 500 }}>
              Sustainable
            </Typography>
          </Grid>
          <Grid item md={3} sm={3} xs={6}>
            <Box
              component="img"
              src="/plant.png"
              alt=""
              sx={{ width: "20%" }}
            />
            <Typography variant="h6" sx={{ fontWeight: 500 }}>
              Plant Based
            </Typography>
          </Grid>
          <Grid item md={3} sm={3} xs={6}>
            <Box component="img" src="/ani.png" alt="" sx={{ width: "55%" }} />
            <Typography variant="h6" sx={{ fontWeight: 500 }}>
              Cruelty Free
            </Typography>
          </Grid>
        </Grid>
      </Box>
      {/* Pledge */}
      <Box
        align="center"
        sx={{ mt: { md: 15, sm: 10, xs: 10 }, bgcolor: "#FFFFCC", py: 10 }}
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
            sx={{ color: "#505050" }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </Typography>
          <br />
          <Button
            variant="contained"
            sx={{ mt: 5, textTransform: "none" }}
            component="a"
            href="/about"
          >
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
      {/*  */}
      <Shop />
      {/*  */}
      <Box
        sx={{
          mt: { md: 5, sm: 5, xs: 0 },
          py: 10,
          px: { md: 10, sm: 7, xs: 2 },
        }}
      >
        {/* Desk COl 1 */}
        <Grid container columnSpacing={7}>
          <Grid item md={6} sm={6} xs={12}>
            <ImageWithLoader src="/pud1.jpg" alt="" sx={{ width: "100%" }} />
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
                Recipies
              </span>
            </Typography>

            <Typography variant="p" sx={{ color: "#505050" }}>
              Embark on a delightful culinary journey, where you can uncover a
              treasure trove of mouthwatering dishes, all made possible with
              this incredibly nutritious whole meal. You'll reveal a multitude
              of exquisite recipes and discover the remarkable potential hidden
              within this wholemeal.
            </Typography>
            <br />
            <Button
              component="a"
              href="/recipies"
              variant="contained"
              sx={{ mt: 4, textTransform: "none" }}
            >
              Read More{" "}
            </Button>
          </Grid>
        </Grid>
        {/* COl 2 */}
        <Grid
          container
          columnSpacing={7}
          sx={{ display: { md: "flex", sm: "flex", xs: "none" }, mt: 8 }}
        >
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
              <span
                style={{
                  color: "#698F3C",
                  fontFamily: "monospace",
                }}
              >
                Health
              </span>{" "}
              Book
            </Typography>

            <Typography variant="p" sx={{ color: "#505050" }}>
              Explore the comprehensive nutritional profile and myriad health
              advantages associated with this wholesome wholemeal.
            </Typography>
            <br />
            <Button
              component="a"
              href="/health-book"
              variant="contained"
              sx={{ mt: 4, textTransform: "none" }}
            >
              Read More
            </Button>
          </Grid>
          <Grid item md={6} sm={6} xs={12}>
            <Box
              component="img"
              src="/health.jpg"
              alt=""
              sx={{ width: "100%" }}
            />
          </Grid>
        </Grid>
        {/* Mobile */}
        <Grid
          container
          columnSpacing={7}
          sx={{ display: { md: "none", sm: "none", xs: "block" }, mt: 5 }}
        >
          <Grid item md={6} sm={6} xs={12}>
            <ImageWithLoader src="/health.jpg" alt="" sx={{ width: "100%" }} />
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
              <span
                style={{
                  color: "#698F3C",
                  fontFamily: "monospace",
                }}
              >
                Health
              </span>{" "}
              Book
            </Typography>

            <Typography variant="p" sx={{ color: "#505050" }}>
              Explore the comprehensive nutritional profile and myriad health
              advantages associated with this wholesome wholemeal.
            </Typography>
            <br />
            <Button
              component="a"
              href="/health-book"
              variant="contained"
              sx={{ mt: 4, textTransform: "none" }}
            >
              Read More
            </Button>
          </Grid>
        </Grid>
        <Reviews />
      </Box>

      <Box sx={{ my: 5 }}>
        <Typography
          variant="h2"
          sx={{
            fontWeight: 700,
            mb: 5,
            textAlign: "center",
          }}
        >
          <span
            style={{
              color: "#698F3C",
              fontFamily: "monospace",
            }}
          >
            Share
          </span>{" "}
          With Us
        </Typography>

        <Typography
          variant="h6"
          sx={{ textAlign: "center", pb: 5, color: "#505050", px: 1 }}
        >
          Share your Tom Brown Whole meal recipe with us using{" "}
          <span style={{ fontStyle: "italic", fontWeight: 500 }}>
            #ShebaFoodTBWM
          </span>
          .
        </Typography>
        <Grid container columnSpacing={0}>
          <Grid item md={4} sm={4} xs={12}>
            <Box
              component="video"
              autoPlay
              loop
              muted
              src="/tb.mp4"
              alt=""
              sx={{ width: "100%" }}
            />
          </Grid>
          <Grid item md={4} sm={4} xs={12}>
            <Box
              component="video"
              autoPlay
              loop
              muted
              src="/tb3.mp4"
              alt=""
              sx={{ width: "100%" }}
            />
          </Grid>
          <Grid
            item
            md={4}
            sm={4}
            xs={12}
            sx={{ display: { md: "block", sm: "block", xs: "none" } }}
          >
            <Box
              component="video"
              autoPlay
              loop
              muted
              src="/tb2.mp4"
              alt=""
              sx={{ width: "100%" }}
            />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
