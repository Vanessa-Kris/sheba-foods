import { Box, Typography, Card, Grid } from "@mui/material";
import React from "react";
import { FaArrowRight } from "react-icons/fa6";

export default function Recipies() {
  return (
    <Box>
      <Box
        component="img"
        src="/reci.jpg"
        alt=""
        sx={{ width: "100%", pt: { xs: 7 } }}
      />
      <Box sx={{ m: { md: 15, sm: 10, xs: 3 } }}>
        <Typography variant="h6">
          Tickle your taste buds with our out of this world recipes
        </Typography>

        <Box sx={{ mt: 10 }}>
          <Grid container columnSpacing={8} rowSpacing={8}>
            <Grid item md={6} sm={6} xs={12}>
              <Card>
                <Box
                  component="img"
                  src="/tea.jpg"
                  alt=""
                  sx={{ width: "100%" }}
                />
                <Typography variant="subtitle1" sx={{ p: 2 }}>
                  Tom Brown Whole Meal Tea Recipe <FaArrowRight />
                </Typography>
              </Card>
            </Grid>
            <Grid item md={6} sm={6} xs={12}>
              <Card>
                <Box
                  component="img"
                  src="/pancake.jpg"
                  alt=""
                  sx={{ width: "100%" }}
                />
                <Typography variant="subtitle1" sx={{ p: 2 }}>
                  Tom Brown Whole Meal Fluffy Pancakes Recipe <FaArrowRight />
                </Typography>
              </Card>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
}
