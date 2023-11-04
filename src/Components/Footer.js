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
      sx={{ bgcolor: "#43291F", color: "text.secondary" }}
    >
      <Box
        justifyContent="center"
        flexDirection="row"
        display="flex"
        sx={{ p: 2 }}
      >
        <Typography
          variant="p"
          sx={{ color: "text.secondary", fontWeight: 700 }}
        >
          Follow Us:
        </Typography>
        <FaYoutube
          style={{
            fontSize: "23px",
            color: "text.secondary",
            marginLeft: 15,
          }}
        />
        <FaXTwitter
          style={{
            fontSize: "23px",
            color: "text.secondary",
            marginLeft: 15,
          }}
        />
        <FaFacebook
          style={{
            fontSize: "23px",
            color: "text.secondary",
            marginLeft: 15,
          }}
        />
        <FaInstagram
          style={{
            fontSize: "23px",
            color: "text.secondary",
            marginLeft: 15,
          }}
        />
      </Box>
      <Divider sx={{ color: "#fff !important" }} />
      <Grid
        container
        sx={{
          py: { md: 5, sm: 7, xs: 5 },
          px: { md: 7, sm: 7, xs: 2 },
          color: "text.secondary",
        }}
        columnSpacing={2}
      >
        <Grid item md={5} sm={5} xs={12} sx={{ ml: { xs: 2 } }}>
          <Typography
            variant="p"
            sx={{ mb: { md: 5, xs: 1 }, fontWeight: 700 }}
          >
            Sheba Foods
          </Typography>
          <br />
          <Typography variant="body2">
            Lorem Ipsum dolor sit amet supposed catch phrase.
          </Typography>
        </Grid>
        <Grid item md={2} sm={2} xs={12} sx={{ mt: { md: 0, sm: 0, xs: 3 } }}>
          <Typography variant="p" sx={{ pl: 2, fontWeight: 700 }}>
            Know Us
          </Typography>
          <List>
            <ListItem components="a" href="/about">
              <Typography variant="body2">About Us</Typography>
            </ListItem>
            <ListItem components="a" href="/about">
              <Typography variant="body2">Our Impact</Typography>
            </ListItem>
            <ListItem components="a" href="/about">
              <Typography variant="body2">Green Environment</Typography>
            </ListItem>
            <ListItem components="a" href="/about">
              <Typography variant="body2">OLocal Farming</Typography>
            </ListItem>
          </List>
        </Grid>
        <Grid item md={2} sm={2} xs={12} sx={{ mt: { md: 0, sm: 0, xs: 3 } }}>
          <Typography variant="p" sx={{ pl: 2, fontWeight: 700 }}>
            Tom Brown
          </Typography>
          <List>
            <ListItem components="a" href="/about">
              <Typography variant="body2">Nutritional Value</Typography>
            </ListItem>
            <ListItem components="a" href="/about">
              <Typography variant="body2">Health Benfits</Typography>
            </ListItem>
            <ListItem components="a" href="/about">
              <Typography variant="body2">Recipies</Typography>
            </ListItem>
            <ListItem components="a" href="/about">
              <Typography variant="body2">Testimonies</Typography>
            </ListItem>
          </List>
        </Grid>
        <Grid item md={2} sm={2} xs={12} sx={{ mt: { md: 0, sm: 0, xs: 3 } }}>
          <Typography variant="p" sx={{ pl: 2, fontWeight: 700 }}>
            Customer Service
          </Typography>
          <List>
            <ListItem components="a" href="/about">
              <Typography variant="body2">Contact Us</Typography>
            </ListItem>
            <ListItem components="a" href="/about">
              <Typography variant="body2">FAQS</Typography>
            </ListItem>
            <ListItem components="a" href="/about">
              <Typography variant="body2">Events</Typography>
            </ListItem>
            <ListItem components="a" href="/about">
              <Typography variant="body2">Terms & Conditions</Typography>
            </ListItem>
          </List>
        </Grid>
      </Grid>
      <Divider />
      <Typography variant="body2" textAlign="center" sx={{ p: 2 }}>
        &copy; 2023 Sheba Foods. All rights reserved.
      </Typography>
    </Box>
  );
}
