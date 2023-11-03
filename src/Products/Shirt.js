import { Box, Button, Grid, Typography } from "@mui/material";
import React from "react";
import { QuantityInput } from "./WholeMeal";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function Shirt() {
  const [size, setSize] = React.useState("");

  const handleChange = (event) => {
    setSize(event.target.value);
  };
  return (
    <Box sx={{ m: { md: 15, sm: 10, xs: 5 }, pt: { md: 5, sm: 13, xs: 3 } }}>
      <Grid container columnSpacing={5} rowSpacing={3}>
        <Grid item md={6} sm={6} xs={12}>
          <Box
            component="img"
            src="/shirt.png"
            alt=""
            sx={{ width: { md: "90%", xs: "100%" } }}
          />
        </Grid>
        <Grid item md={6} sm={6} xs={12} justifyContent="center" my="auto">
          <Typography variant="h3" sx={{ mb: 5 }}>
            Sheba Foods Merch Shirt
          </Typography>
          <Typography variant="h4">5000</Typography>
          <br />
          <Box>
            <Typography variant="h6"> Quantity :</Typography>
            <QuantityInput />
          </Box>
          <Typography variant="h6" sx={{ mt: 3 }}>
            {" "}
            Size :
          </Typography>
          <FormControl>
            <InputLabel id="demo-simple-select-label">Size</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={size}
              label="Size"
              onChange={handleChange}
            >
              <MenuItem value={1}>S</MenuItem>
              <MenuItem value={20}>X</MenuItem>
              <MenuItem value={30}>XL</MenuItem>
              <MenuItem value={30}>XXL</MenuItem>
            </Select>
          </FormControl>
          <Box sx={{ mt: 5 }}>
            <Grid container columnSpacing={2}>
              <Grid item>
                <Typography sx={{ fontWeight: 500 }}>Product Name: </Typography>
                <Typography sx={{ fontWeight: 500 }}>Size: </Typography>
                <Typography sx={{ fontWeight: 500 }}>Category: </Typography>
                <Typography sx={{ fontWeight: 500 }}>Brand: </Typography>
                <Typography sx={{ fontWeight: 500 }}>
                  Health Benefits:{" "}
                </Typography>
              </Grid>
              <Grid item>
                <Typography> Sheba Foods Merch Shirt </Typography>
                <Typography>200 grams </Typography>
                <Typography>Grains </Typography>
                <Typography>Sheba Foods </Typography>
                <Typography>Tom brown whole meal </Typography>
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
