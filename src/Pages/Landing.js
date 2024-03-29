import { Box, Grid, Typography, Button } from "@mui/material";
import React, { useState, useEffect } from "react";
import { FaCircleCheck } from "react-icons/fa6";
import ImageWithLoader from "../Components/ImageWithLoader";
import Loader from "../Components/Loader";
import Divider from "@mui/material/Divider";
import Parallax from "../Components/parallax";

export default function Landing() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
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
            sx={{ display: { md: "block", sm: "block", xs: "none" } }}
            className="grad"
            justifyContent="center"
            align="center"
            my="auto"
          >
            <Grid container>
              <Grid
                item
                md={6}
                sm={6}
                xs={12}
                justifyContent="center"
                my="auto"
                sx={{
                  pl: { md: 7, xs: 2, sm: 3 },
                  textAlign: "left",
                  pb: { md: 0, xs: 0, sm: 3 },
                }} // Set textAlign to 'left'
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
              <Grid item md={6} sm={6} xs={12}>
                <Box
                  component="img"
                  src="/file2.png"
                  sx={{
                    mt: { md: 10, xs: 0, sm: 7 },
                    width: { md: "70%", xs: "100%", sm: "100%" },
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
            sx={{ display: { md: "none", sm: "none", xs: "block" } }}
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
        sx={{ px: { md: "auto", xs: 3 }, py: { md: "auto", xs: 0, sm: 5 } }}
        justifyContent="center"
        align="center"
        my="auto"
      >
        <Grid item md={5} sm={5} xs={12}>
          <Box
            component="img"
            src="/approved.png"
            alt=""
            sx={{
              width: { md: "50%", sm: "80%", xs: "50%" },
              my: { md: 7, xs: 5, sm: 5 },
            }}
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
            well-being with every scoop. Opt for Tom Brown – where taste meets
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
            href="/products/tom-brown-whole-meal"
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
        sx={{
          my: { md: 10, xs: 5, sm: 5 },
          bgcolor: "green",
          color: "#FFFBE7",
        }}
      >
        <Grid item md={6} sm={6} xs={12} my="auto">
          <Box component="img" src="3.png" sx={{ width: "100%" }} />
        </Grid>
        <Grid
          item
          md={6}
          sm={6}
          xs={12}
          my="auto"
          sx={{
            mx: { xs: 2, md: 0, sm: 0 },
            my: { xs: 3, md: "auto", sm: 5 },
          }}
        >
          <Typography variant="h6">Tom Brown Whole Meal</Typography>
          <Typography
            variant="h5"
            sx={{ pt: 3, color: "#fff", fontWeight: 500 }}
          >
            The Family Way
          </Typography>
          <Grid container>
            <Grid item md={10} sm={10} xs={10} sx={{ mt: 3 }}>
              <Typography variant="p">Rich in protein</Typography>
            </Grid>
            <Grid item md={2} sm={2} xs={2} mt="auto">
              <FaCircleCheck
                style={{ fontSize: "26px", marginTop: 0, marginY: "auto" }}
              />
            </Grid>
          </Grid>
          <Divider orientation="horizontal" dark />
          {/*  */}
          <Grid container>
            <Grid item md={10} sm={10} xs={10} sx={{ mt: 3 }}>
              <Typography variant="p">No artificial flavouring</Typography>
            </Grid>
            <Grid item md={2} sm={2} xs={2} mt="auto">
              <FaCircleCheck
                style={{ fontSize: "26px", marginTop: 0, marginY: "auto" }}
              />
            </Grid>
          </Grid>
          <Divider orientation="horizontal" dark />
          {/*  */}
          <Grid container>
            <Grid item md={10} sm={10} xs={10} sx={{ mt: 3 }}>
              <Typography variant="p">No added sugar</Typography>
            </Grid>
            <Grid item md={2} sm={2} xs={2} mt="auto">
              <FaCircleCheck
                style={{ fontSize: "26px", marginTop: 0, marginY: "auto" }}
              />
            </Grid>
          </Grid>
          <Divider orientation="horizontal" dark />
          {/*  */}
          <Grid container>
            <Grid item md={10} sm={10} xs={10} sx={{ mt: 3 }}>
              <Typography variant="p">All natural ingredients</Typography>
            </Grid>
            <Grid item md={2} sm={2} xs={2} mt="auto">
              <FaCircleCheck
                style={{ fontSize: "26px", marginTop: 0, marginY: "auto" }}
              />
            </Grid>
          </Grid>
          <Divider orientation="horizontal" dark />
          {/*  */}
          <Grid container>
            <Grid item md={10} sm={10} xs={10} sx={{ mt: 3 }}>
              <Typography variant="p">No Preservatives</Typography>
            </Grid>
            <Grid item md={2} sm={2} xs={2} mt="auto">
              <FaCircleCheck
                style={{ fontSize: "26px", marginTop: 0, marginY: "auto" }}
              />
            </Grid>
          </Grid>
          <Divider orientation="horizontal" dark />
          <Grid container>
            <Grid item md={10} sm={10} xs={10} sx={{ mt: 3 }}>
              <Typography variant="p">Environmental friendly</Typography>
            </Grid>
            <Grid item md={2} sm={2} xs={2} mt="auto">
              <FaCircleCheck
                style={{ fontSize: "26px", marginTop: 0, marginY: "auto" }}
              />
            </Grid>
          </Grid>
          <Divider orientation="horizontal" dark />
        </Grid>
      </Grid>
      {/*  */}
      <Box
        sx={{
          mt: { md: 5, sm: 5, xs: 0 },
          py: { md: 7, sm: 7, xs: 2 },
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
                mb: { md: 5, xs: 1, sm: 2 },
                mt: { md: 0, xs: 4, sm: 0 },
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
              this incredibly nutritious whole meal.
            </Typography>
            <br />
            <Button
              component="a"
              href="/recipies"
              variant="contained"
              sx={{ mt: { md: 4, sm: 1, xs: 2 }, textTransform: "none" }}
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
                mb: { md: 5, xs: 1, sm: 2 },
                mt: { md: 0, xs: 4, sm: 0 },
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
              sx={{ mt: { md: 4, sm: 1, xs: 2 }, textTransform: "none" }}
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
                mb: { md: 5, xs: 1, sm: 2 },
                mt: { md: 0, xs: 4, sm: 0 },
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
              sx={{ mt: { md: 4, sm: 1, xs: 2 }, textTransform: "none" }}
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
            #shebameals
          </span>
          .
        </Typography>
        <Grid container columnSpacing={0}>
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
              src="/tb.mp4"
              alt=""
              sx={{
                width: "100%",
              }}
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
              sx={{
                width: "100%",
              }}
            />
          </Grid>
          <Grid item md={3} sm={3} xs={6}>
            <Box
              component="video"
              autoPlay
              loop
              muted
              src="/pie.mp4"
              alt=""
              sx={{
                width: "100%",
              }}
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
              sx={{
                width: "100%",
              }}
            />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
