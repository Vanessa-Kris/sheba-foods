import { Box, Button, Grid, Typography } from "@mui/material";
import React from "react";
import { QuantityInput } from "./WholeMeal";

export default function Apron() {
  return (
    <Box sx={{ m: { md: 15, sm: 10, xs: 5 }, pt: { md: 5, sm: 13, xs: 3 } }}>
      <Grid container columnSpacing={5} rowSpacing={3}>
        <Grid item md={6} sm={6} xs={12}>
          <Box
            component="img"
            src="/apron.png"
            alt=""
            sx={{ width: { md: "90%", xs: "100%" } }}
          />
        </Grid>
        <Grid item md={6} sm={6} xs={12} justifyContent="center" my="auto">
          <Typography variant="h3" sx={{ mb: 5 }}>
            Sheba Foods Merch Apron
          </Typography>
          <Typography variant="h4">2000</Typography>
          <br />
          <Box>
            <Typography variant="h6"> Quantity :</Typography>
            <QuantityInput />
          </Box>
          <Box sx={{ mt: 5 }}>
            <Grid container columnSpacing={2}>
              <Grid item>
                <Typography sx={{ fontWeight: 500 }}>Product Name: </Typography>
                <Typography sx={{ fontWeight: 500 }}>Size: </Typography>
                <Typography sx={{ fontWeight: 500 }}>Category: </Typography>
                <Typography sx={{ fontWeight: 500 }}>Brand: </Typography>
                <Typography sx={{ fontWeight: 500 }}>
                  Product Usage:{" "}
                </Typography>
              </Grid>
              <Grid item>
                <Typography> Sheba Foods Merch Apron </Typography>
                <Typography>One Size </Typography>
                <Typography>Merch </Typography>
                <Typography>Sheba Foods </Typography>
                <Typography>Cook wear </Typography>
              </Grid>
            </Grid>
          </Box>
          <Button fullWidth variant="outlined" sx={{ mt: 5, p: 2 }}>
            Buy Now
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
}