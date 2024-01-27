import { Box, Button, Card, Grid, Typography } from "@mui/material";
import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Loader from "../Components/Loader";
import Review from "../Pages/Reviews";
import { Link } from "react-router-dom";

export default function WholeMeal() {
  return (
    <Box sx={{ m: { md: 15, sm: 10, xs: 3 }, pt: { md: 5, sm: 13, xs: 13 } }}>
      <Grid container columnSpacing={8} rowSpacing={5}>
        <Grid item md={6} sm={6} xs={12}>
          <Card sx={{ p: 3 }}>
            <Carousel>
              <div>
                <img src="/item.png" alt="tom brown whole meal" />
              </div>
              <div>
                <img src="/wm.jpg" alt="tom brown whole meal" />
              </div>
              <div>
                <img src="/wm2.jpg" alt="tom brown whole meal" />
              </div>
            </Carousel>
          </Card>
        </Grid>
        <Grid item md={6} sm={6} xs={12} justifyContent="center" my="auto">
          <Box>
            <Card sx={{ p: 3 }}>
              <Typography variant="h3" sx={{ mb: 3 }}>
                Tom Brown Whole Meal
              </Typography>
              <Typography variant="h4">NGN 2000</Typography>
              <br />

              <Box sx={{ mt: 0 }}>
                <Grid container columnSpacing={2}>
                  <Grid item md={6} sm={6} xs={4}>
                    <Typography sx={{ fontWeight: "500 !important" }}>
                      Product:{" "}
                    </Typography>
                    <Typography sx={{ fontWeight: 500 }}>Size: </Typography>
                    <Typography sx={{ fontWeight: 500 }}>Category: </Typography>
                    <Typography sx={{ fontWeight: 500 }}>Brand: </Typography>
                    <Typography sx={{ fontWeight: 500 }}>
                      Health Benefits:{" "}
                    </Typography>
                  </Grid>
                  <Grid item md={6} sm={6} xs={8} sx={{ color: "#505050" }}>
                    <Typography>Tom brown whole meal </Typography>
                    <Typography>500 grams </Typography>
                    <Typography>Grains </Typography>
                    <Typography>Sheba Meals </Typography>
                    <Typography component="a" href="/health-book">
                      See here{" "}
                    </Typography>
                  </Grid>
                </Grid>
              </Box>
              <Link to="/products/tom-brown-whole-meal/checkout">
                <Button
                  type="submit"
                  fullWidth
                  variant="outlined"
                  sx={{ mt: 5, p: 2, bgcolor: "green" }}
                >
                  Buy Now
                </Button>
              </Link>
            </Card>
          </Box>
        </Grid>
      </Grid>
      <Review />
    </Box>
  );
}
