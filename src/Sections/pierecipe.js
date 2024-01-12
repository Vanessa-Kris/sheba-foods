import React from "react";
import { FaArrowRight } from "react-icons/fa6";
import ImageWithLoader from "../Components/ImageWithLoader";
import {
  Box,
  List,
  ListItem,
  ListItemText,
  Typography,
  Card,
  Grid,
} from "@mui/material";

export default function Pierecipe() {
  return (
    <Box>
      <Box
        component="img"
        src="/pie.jpeg"
        alt=""
        sx={{ width: "100%", pt: { xs: 7 } }}
      />
      <Box sx={{ m: { md: 15, sm: 10, xs: 3 } }}>
        <Typography variant="h6">Pie recipe</Typography>
        <Typography variant="h6" sx={{ py: 5 }}>
          For those looking for a quick and convenient way to enjoy Tom Brown’s
          nutritional benefits
        </Typography>

        <Typography variant="h1">Coming Soon</Typography>

        <Box sx={{ mt: 10 }}>
          <Typography variant="h5" sx={{ my: 4 }}>
            Check out other Tom Brown Whole Meal recipies:
          </Typography>
          <Grid container columnSpacing={2} rowSpacing={2}>
            <Grid item md={4} sm={4} xs={6}>
              <Card>
                <ImageWithLoader
                  src="/pancake.jpg"
                  alt=""
                  sx={{ width: "100%" }}
                />
                <Box sx={{ p: 3 }}>
                  <Typography
                    component="a"
                    href="/recipies/pancake-recipe"
                    variant="subtitle1"
                  >
                    Tom Brown Whole Meal Fluffy Pancakes Recipe <FaArrowRight />
                  </Typography>
                </Box>
              </Card>
            </Grid>
            <Grid item md={4} sm={4} xs={6}>
              <Card>
                <ImageWithLoader src="/tea.jpg" alt="" sx={{ width: "100%" }} />
                <Box sx={{ p: 3 }}>
                  <Typography
                    component="a"
                    href="/recipies/tea-recipe"
                    variant="subtitle1"
                  >
                    Tom Brown Whole Meal Tea Recipe <FaArrowRight />
                  </Typography>
                </Box>
              </Card>
            </Grid>
            <Grid item md={4} sm={4} xs={6}>
              <Card>
                <ImageWithLoader
                  src="/swallow1.jpeg"
                  alt=""
                  sx={{ width: "40% " }}
                />
                <Box sx={{ p: 3 }}>
                  <Typography
                    component="a"
                    href="/recipies/swallow-recipe"
                    variant="subtitle1"
                  >
                    Tom Brown Whole Meal Swallow Recipe <FaArrowRight />
                  </Typography>
                </Box>
              </Card>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
}
