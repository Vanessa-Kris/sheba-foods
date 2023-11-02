import { Box, Divider, Grid, List, ListItem, Typography } from "@mui/material";
import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaXTwitter,
  FaYoutube,
} from "react-icons/fa6";

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{ bgcolor: "#698F3C", color: "text.secondary" }}
    >
      <Box
        justifyContent="center"
        flexDirection="row"
        display="flex"
        sx={{ bgcolor: "#83B841", p: 2 }}
      >
        <Typography variant="h6" sx={{ color: "text.secondary" }}>
          Follow Us:
        </Typography>
        <FaYoutube
          style={{
            fontSize: "30px",
            color: "text.secondary",
            marginLeft: 15,
          }}
        />
        <FaXTwitter
          style={{
            fontSize: "30px",
            color: "text.secondary",
            marginLeft: 15,
          }}
        />
        <FaFacebook
          style={{
            fontSize: "30px",
            color: "text.secondary",
            marginLeft: 15,
          }}
        />
        <FaInstagram
          style={{
            fontSize: "30px",
            color: "text.secondary",
            marginLeft: 15,
          }}
        />
      </Box>
      <Grid
        container
        sx={{
          py: { md: 10, sm: 7, xs: 5 },
          px: { md: 10, sm: 7, xs: 2 },
          color: "text.secondary",
        }}
        columnSpacing={2}
      >
        <Grid item md={5} sm={5} xs={12} sx={{ ml: { xs: 2 } }}>
          <Typography variant="h6" sx={{ mb: { md: 5, xs: 1 } }}>
            Sheba Foods
          </Typography>
          <Typography variant="p">
            Lorem Ipsum dolor sit amet supposed catch phrase.
          </Typography>
        </Grid>
        <Grid item md={2} sm={2} xs={12} sx={{ mt: { md: 0, sm: 0, xs: 3 } }}>
          <Typography variant="h6" sx={{ pl: 2 }}>
            Know Us
          </Typography>
          <List>
            <ListItem>About Us</ListItem>
            <ListItem>Our Impact</ListItem>
            <ListItem>Green Environment</ListItem>
            <ListItem>Local Farming</ListItem>
          </List>
        </Grid>
        <Grid item md={2} sm={2} xs={12} sx={{ mt: { md: 0, sm: 0, xs: 3 } }}>
          <Typography variant="h6" sx={{ pl: 2 }}>
            Tom Brown
          </Typography>
          <List>
            <ListItem>Nutritional Value</ListItem>
            <ListItem>Health Benfits</ListItem>
            <ListItem>Recipies</ListItem>
            <ListItem>Testimonies</ListItem>
          </List>
        </Grid>
        <Grid item md={2} sm={2} xs={12} sx={{ mt: { md: 0, sm: 0, xs: 3 } }}>
          <Typography variant="h6" sx={{ pl: 2 }}>
            Customer Service
          </Typography>
          <List>
            <ListItem>Contact Us</ListItem>
            <ListItem>FAQS</ListItem>
            <ListItem>Events</ListItem>
            <ListItem>Terms & Conditions</ListItem>
          </List>
        </Grid>
      </Grid>
      <Divider />
      <Typography textAlign="center" sx={{ p: 2 }}>
        &copy; 2023 Sheba Foods. All rights reserved.
      </Typography>
    </Box>
  );
}
