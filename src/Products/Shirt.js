import React, { useState } from "react";
import {
  Box,
  Button,
  Grid,
  Typography,
  Card,
  Modal,
  Backdrop,
  Fade,
} from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import ImageWithLoader from "../Components/ImageWithLoader";

export default function Shirt() {
  const [size, setSize] = React.useState("");
  const [isUnavailableModalOpen, setIsUnavailableModalOpen] = useState(false);

  const handleChange = (event) => {
    setSize(event.target.value);
  };

  const handleUnavailableClick = () => {
    setIsUnavailableModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsUnavailableModalOpen(false);
  };

  return (
    <Box sx={{ m: { md: 15, sm: 10, xs: 3 }, pt: { md: 5, sm: 13, xs: 12 } }}>
      <Grid container columnSpacing={5} rowSpacing={3}>
        <Grid item md={6} sm={6} xs={12}>
          <Card sx={{ p: 3 }}>
            <Carousel>
              <div>
                <img src="/shirt.png" alt="sheba foods T shirt" />
              </div>
              <div>
                <img src="/shirt.png" alt="sheba foods T shirt" />
              </div>
              <div>
                <img src="/shirt.png" alt="sheba foods T shirt" />
              </div>
            </Carousel>
          </Card>
        </Grid>
        <Grid item md={6} sm={6} xs={12} justifyContent="center" my="auto">
          <Card sx={{ p: 3 }}>
            <Typography variant="h3" sx={{ mb: 3 }}>
              Sheba Meals Merch Shirt
            </Typography>
            <Typography variant="h4">NGN 5000</Typography>
            <br /> {/* <QuantityInput /> */}
            <Box>
              <Typography variant="h6"> Quantity :</Typography>
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
                <Grid item md={6} sm={6} xs={4}>
                  <Typography sx={{ fontWeight: 500 }}>
                    Product Name:{" "}
                  </Typography>
                  <Typography sx={{ fontWeight: 500 }}>Category: </Typography>
                  <Typography sx={{ fontWeight: 500 }}>Brand: </Typography>
                  <Typography sx={{ fontWeight: 500 }}>Use: </Typography>
                </Grid>
                <Grid item md={6} sm={6} xs={8} sx={{ color: "#505050" }}>
                  <Typography> Sheba Meals Merch Shirt </Typography>
                  <Typography>Merch</Typography>
                  <Typography>Sheba Meals </Typography>
                  <Typography>Dress Shirt </Typography>
                </Grid>
              </Grid>
            </Box>
            <Button
              fullWidth
              variant="outlined"
              color="error"
              sx={{ mt: 5, p: 2 }}
              onClick={handleUnavailableClick}
            >
              Unavailable
            </Button>
            {/* Unavailable Modal */}
            <Modal
              aria-labelledby="transition-modal-title"
              aria-describedby="transition-modal-description"
              open={isUnavailableModalOpen}
              onClose={handleCloseModal}
              closeAfterTransition
              BackdropComponent={Backdrop}
              BackdropProps={{
                timeout: 500,
              }}
            >
              <Fade in={isUnavailableModalOpen}>
                <Box
                  sx={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    bgcolor: "background.paper",
                    boxShadow: 24,
                    p: 4,
                    minWidth: 300,
                    textAlign: "center",
                  }}
                >
                  <Typography variant="h5" gutterBottom>
                    Product is currently unavailable
                  </Typography>
                  <Button variant="outlined" onClick={handleCloseModal}>
                    OK
                  </Button>
                </Box>
              </Fade>
            </Modal>
          </Card>
        </Grid>
      </Grid>

      <Box sx={{ mt: 10 }} className="Shop">
        <Typography variant="h6">
          Check out other products from Sheba foods
        </Typography>
        <Grid container columnSpacing={8} rowSpacing={4} sx={{ mt: 2 }}>
          <Grid
            justifyContent="center"
            alignItems="center"
            align="center"
            mx="auto"
            item
            md={4}
            sm={4}
            xs={6}
            component="a"
            href="/products/tom-brown-whole-meal"
          >
            <Box
              component="img"
              src="/shop1.png"
              alt=""
              sx={{ width: "100%" }}
            />
            <Typography variant="p" sx={{ fontWeight: 500 }}>
              Tom Brown Whole Meal
            </Typography>
            <Typography variant="body2" sx={{ fontWeight: 300 }}>
              NGN 2000
            </Typography>
          </Grid>
          <Grid item md={4} sm={4} xs={6} component="a" href="/products/mug">
            <ImageWithLoader src="/mug.png" alt="" sx={{ width: "100%" }} />
            <Typography variant="p" sx={{ fontWeight: 500 }}>
              Sheba Meals Coffee Mug
            </Typography>
            <Typography variant="body2" sx={{ fontWeight: 300 }}>
              NGN 3000
            </Typography>
          </Grid>
          {/* <Grid item md={4} sm={4} xs={6} component="a" href="/products/shirt">
            <Box
              component="img"
              src="/shirt.png"
              alt=""
              sx={{ width: "100%" }}
            />
            <Typography variant="p" sx={{ fontWeight: 500 }}>Sheba Meals T Shirt</Typography>
            <Typography variant="body2" sx={{ fontWeight: 300 }}>
              NGN 5000
            </Typography>
          </Grid> */}
          <Grid item md={4} sm={4} xs={6} component="a" href="/products/apron">
            <Box
              component="img"
              src="/apron.png"
              alt=""
              sx={{ width: "100%" }}
            />
            <Typography variant="p" sx={{ fontWeight: 500 }}>
              Sheba Meals Apron
            </Typography>
            <Typography variant="body2" sx={{ fontWeight: 300 }}>
              NGN 2000
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
