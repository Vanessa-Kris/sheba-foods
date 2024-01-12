import { Box, Grid, Typography, Button } from "@mui/material";
import React, { useState, useEffect } from "react";
import { FaCircleCheck } from "react-icons/fa6";
import BannerCarousel from "../Components/Carousel";
import ImageWithLoader from "../Components/ImageWithLoader";
import Loader from "../Components/Loader";
import Reviews from "../Sections/Reviews";
import Shop from "../Sections/Shop";
import Divider from "@mui/material/Divider";
import Parallax from "../Components/parallax";

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
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <Box
            sx={{ display: { md: "block", xs: "none" } }}
            className="grad"
            justifyContent="center"
            align="center"
            my="auto"
          >
            <Grid container>
              <Grid
                item
                md={6}
                xs={12}
                justifyContent="center"
                my="auto"
                sx={{ pl: { md: 7, xs: 2 }, textAlign: "left" }} // Set textAlign to 'left'
              >
                <Typography
                  variant="h3"
                  sx={{
                    fontWeight: 500,
                    color: "#fff",
                    mb: 3,
                    mt: { md: "auto", xs: 12 },
                  }}
                >
                  Healthy 100% Natural Wholemeal Blend
                </Typography>
                <Typography variant="p" sx={{ color: "#fff" }}>
                  Tom Brown whole meal offers a multitude of health benefits,
                  making it an excellent meal choice for every member of the
                  family.
                </Typography>
                <br />
                <Button
                  component="a"
                  href="/products/tom-brown-whole-meal"
                  sx={{ mt: 5, px: 8 }}
                  variant="contained"
                  size="large"
                >
                  Shop
                </Button>
              </Grid>
              <Grid item md={6} xs={12}>
                <Box
                  component="img"
                  src="/file2.png"
                  sx={{
                    mt: { md: 10, xs: 0 },
                    width: { md: "70%", xs: "100%" },
                  }}
                />
              </Grid>
            </Grid>
          </Box>
          {/* Mobile */}
          <Box
            className="grad"
            justifyContent="center"
            align="center"
            my="auto"
            sx={{ display: { md: "none", xs: "block" } }}
          >
            <Grid container>
              <Grid item md={6} xs={12}>
                <Box
                  component="img"
                  src="/file2.png"
                  sx={{
                    mt: { md: 10, xs: 8 },
                    width: { md: "70%", xs: "100%" },
                  }}
                />
              </Grid>

              <Grid
                item
                md={6}
                xs={12}
                justifyContent="center"
                my="auto"
                sx={{ pl: { md: 7, xs: 2 }, textAlign: "left" }} // Set textAlign to 'left'
              >
                <Typography
                  variant="h3"
                  sx={{
                    fontWeight: 500,
                    color: "#fff",
                    mb: 3,
                    mt: { md: "auto", xs: 2 },
                  }}
                >
                  Healthy 100% Natural Wholemeal Blend
                </Typography>
                <Typography variant="p" sx={{ color: "#fff" }}>
                  Tom Brown whole meal offers a multitude of health benefits,
                  making it an excellent meal choice for every member of the
                  family.
                </Typography>
                <br />
                <Button
                  component="a"
                  href="/products/tom-brown-whole-meal"
                  sx={{ my: 5, px: 8 }}
                  variant="contained"
                  size="large"
                >
                  Shop
                </Button>
              </Grid>
            </Grid>
          </Box>
        </>
      )}

      <Grid
        container
        columnSpacing={0}
        sx={{ px: { md: "auto", xs: 3 } }}
        justifyContent="center"
        align="center"
        my="auto"
      >
        <Grid item md={5} sm={5} xs={12}>
          <Box
            component="img"
            src="/approved.png"
            alt=""
            sx={{ width: "50%", my: { md: 7, xs: 5 } }}
          />
        </Grid>
        <Grid
          item
          md={5}
          sm={5}
          xs={12}
          justifyContent="center"
          alignItems="center"
          my="auto"
          sx={{ textAlign: "left" }}
        >
          <Typography
            variant="h3"
            sx={{
              fontWeight: 700,
              mb: 5,
            }}
          >
            100%{" "}
            <span
              style={{
                color: "#268703",
                fontFamily: "monospace",
              }}
            >
              Organic
            </span>{" "}
          </Typography>

          <Typography variant="p" sx={{ color: "#505050" }}>
            100% organic, age-defying blend of natural grains and fruits,
            ensuring a healthy choice for all. Packed with corn, guinea corn,
            millet, groundnuts, tiger nuts, soya beans, and dates, this
            wholesome meal is a powerhouse of essential nutrients. Elevate your
            well-being with every bite. Opt for Tom Brown – where taste meets
            nourishment for a vibrant life!
          </Typography>
        </Grid>
      </Grid>

      <Grid
        container
        sx={{
          mt: 8,
          bgcolor: "#E4E4DF",
          py: 4,
        }}
      >
        <Grid
          item
          md={6}
          sm={6}
          xs={12}
          alignItems="center"
          m="auto"
          sx={{ pl: { md: 15, xs: 2 } }}
        >
          <Typography
            variant="h3"
            sx={{
              fontWeight: 700,
              mb: 5,
            }}
          >
            Shop
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
            sx={{ mt: 4, textTransform: "none", px: 5, mb: { md: 0, xs: 5 } }}
          >
            Buy Now
          </Button>
        </Grid>
        <Grid item md={6} sm={6} xs={12}>
          <Box
            component="img"
            src="/wm2.jpg"
            alt=""
            sx={{ width: { md: "80%", xs: "100%" } }}
          />
        </Grid>
      </Grid>
      {/*  */}

      {/*  */}
      <Grid
        container
        columnSpacing={5}
        sx={{ my: 15, bgcolor: "green", color: "#FFFBE7" }}
      >
        <Grid item md={6} sm={6} xs={12}>
          <Box component="img" src="3.png" sx={{ width: "100%" }} />
        </Grid>
        <Grid
          item
          md={6}
          sm={6}
          xs={12}
          my="auto"
          sx={{ mx: { xs: 2, md: 0 } }}
        >
          <Typography variant="h6">Tom Brown Whole Meal</Typography>
          <Typography
            variant="h4"
            sx={{ pt: 3, color: "#fff", fontWeight: 500 }}
          >
            The Family Way
          </Typography>
          <Grid container>
            <Grid item md={10} sm={10} xs={10} sx={{ mt: 3 }}>
              <Typography variant="h6">Rich in protein</Typography>
            </Grid>
            <Grid item md={2} sm={2} xs={2}>
              <FaCircleCheck style={{ fontSize: "30px", marginTop: 30 }} />
            </Grid>
          </Grid>
          <Divider orientation="horizontal" dark />
          {/*  */}
          <Grid container>
            <Grid item md={10} sm={10} xs={10} sx={{ mt: 3 }}>
              <Typography variant="h6">No artificial flavouring</Typography>
            </Grid>
            <Grid item md={2} sm={2} xs={2}>
              <FaCircleCheck style={{ fontSize: "30px", marginTop: 30 }} />
            </Grid>
          </Grid>
          <Divider orientation="horizontal" dark />
          {/*  */}
          <Grid container>
            <Grid item md={10} sm={10} xs={10} sx={{ mt: 3 }}>
              <Typography variant="h6">No added sugar</Typography>
            </Grid>
            <Grid item md={2} sm={2} xs={2}>
              <FaCircleCheck style={{ fontSize: "30px", marginTop: 30 }} />
            </Grid>
          </Grid>
          <Divider orientation="horizontal" dark />
          {/*  */}
          <Grid container>
            <Grid item md={10} sm={10} xs={10} sx={{ mt: 3 }}>
              <Typography variant="h6">All natural ingredients</Typography>
            </Grid>
            <Grid item md={2} sm={2} xs={2}>
              <FaCircleCheck style={{ fontSize: "30px", marginTop: 30 }} />
            </Grid>
          </Grid>
          <Divider orientation="horizontal" dark />
          {/*  */}
          <Grid container>
            <Grid item md={10} sm={10} xs={10} sx={{ mt: 3 }}>
              <Typography variant="h6">No Preservatives</Typography>
            </Grid>
            <Grid item md={2} sm={2} xs={2}>
              <FaCircleCheck style={{ fontSize: "30px", marginTop: 30 }} />
            </Grid>
          </Grid>
          <Divider orientation="horizontal" dark />
          <Grid container>
            <Grid item md={10} sm={10} xs={10} sx={{ mt: 3 }}>
              <Typography variant="h6">Environmental friendly</Typography>
            </Grid>
            <Grid item md={2} sm={2} xs={2}>
              <FaCircleCheck style={{ fontSize: "30px", marginTop: 30 }} />
            </Grid>
          </Grid>
          <Divider orientation="horizontal" dark />
        </Grid>
      </Grid>
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
            <ImageWithLoader src="/pie.jpeg" alt="" sx={{ width: "100%" }} />
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
              variant="h3"
              sx={{
                fontWeight: 700,
                mb: 5,
              }}
            >
              Our{" "}
              <span
                style={{
                  color: "#268703",
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
              variant="h3"
              sx={{
                fontWeight: 700,
                mb: 5,
              }}
            >
              <span
                style={{
                  color: "#268703",
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
              variant="h3"
              sx={{
                fontWeight: 700,
                mb: 5,
              }}
            >
              <span
                style={{
                  color: "#268703",
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
        <Box sx={{ bgcolor: "#FDE74C", py: 8, mt: 10 }}>
          <Parallax />
        </Box>
        {/* <Reviews /> */}
      </Box>

      <Box sx={{ mb: 5 }}>
        <Typography
          variant="h3"
          sx={{
            fontWeight: 700,
            mb: 5,
            textAlign: "center",
          }}
        >
          <span
            style={{
              color: "#268703",
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
          <Grid item md={3} sm={3} xs={6}>
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
          <Grid item md={3} sm={3} xs={6}>
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
            md={3}
            sm={3}
            xs={6}
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
          <Grid
            item
            md={3}
            sm={3}
            xs={6}
            sx={{ display: { md: "block", sm: "block", xs: "none" } }}
          >
            <Box
              component="video"
              autoPlay
              loop
              muted
              src="/pie.mp4"
              alt=""
              sx={{ width: "100%" }}
            />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
