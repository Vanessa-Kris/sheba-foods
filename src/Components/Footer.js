import { Box, Divider, Grid, List, ListItem, Typography } from "@mui/material";
import React from "react";
import { FaFacebook, FaInstagram, FaTiktok, FaWhatsapp } from "react-icons/fa6";

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{ bgcolor: "#00921C", color: "text.secondary" }}
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
        <a
          target="_blank"
          rel="noreferrer"
          href="https://vm.tiktok.com/ZM6egAnQV/"
          style={{ color: "#fff" }}
        >
          <FaTiktok
            style={{
              fontSize: "23px",
              color: "text.secondary",
              marginLeft: 15,
            }}
          />
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.facebook.com/profile.php?id=61553759278999&mibextid=ZbWKwL"
          style={{ color: "#fff" }}
        >
          <FaFacebook
            style={{
              fontSize: "23px",
              color: "text.secondary",
              marginLeft: 15,
            }}
          />
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://instagram.com/shebafoods.ng?igshid=MzNlNGNkZWQ4Mg=="
          style={{ color: "#fff" }}
        >
          <FaInstagram
            style={{
              fontSize: "23px",
              color: "text.secondary",
              marginLeft: 15,
            }}
          />
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://wa.me/2348084434959"
          style={{ color: "#fff" }}
        >
          <FaWhatsapp
            style={{
              fontSize: "23px",
              color: "text.secondary",
              marginLeft: 15,
            }}
          />
        </a>
      </Box>
      <Divider sx={{ color: "#fff !important" }} />
      <Grid
        container
        sx={{
          py: { md: 3, sm: 7, xs: 3 },
          px: { md: 4, sm: 7, xs: 0 },

          color: "text.secondary",
        }}
        columnSpacing={2}
      >
        <Grid item md={5} sm={3} xs={12}>
          <Box
            component="img"
            src="/logo3.png"
            sx={{
              // display: { xs: "none", sm: "block" },
              width: "80px !important",
            }}
          />
          <Typography
            variant="p"
            sx={{
              mb: { md: 0, xs: 1 },
              fontWeight: 700,
              display: { xs: "none", sm: "block", md: "block" },
            }}
          >
            Sheba Meals
          </Typography>
          <br />
          <Typography
            variant="body2"
            sx={{
              display: { xs: "none", sm: "block", md: "block" },
            }}
          >
            Eat Healthy. Eat Tom Brown
          </Typography>
        </Grid>
        <Grid item md={2} sm={2} xs={12} sx={{ mt: { md: 0, sm: 0, xs: 3 } }}>
          <Typography variant="p" sx={{ fontWeight: 700, pl: 2 }}>
            Know Us
          </Typography>
          <List>
            <ListItem
              component="a"
              href="/about"
              sx={{ color: "text.secondary" }}
            >
              <Typography variant="body2">About Us</Typography>
            </ListItem>
            <ListItem
              component="a"
              href="/about#our-impact"
              sx={{ color: "text.secondary" }}
            >
              <Typography variant="body2">Our Impact</Typography>
            </ListItem>
            <ListItem
              component="a"
              href="/about#green-environment"
              sx={{ color: "text.secondary" }}
            >
              <Typography variant="body2">Green Environment</Typography>
            </ListItem>
            <ListItem
              component="a"
              href="/about#local-farming"
              sx={{ color: "text.secondary" }}
            >
              <Typography variant="body2">Local Farming</Typography>
            </ListItem>
          </List>
        </Grid>
        <Grid item md={2} sm={3} xs={12} sx={{ mt: { md: 0, sm: 0, xs: 3 } }}>
          <Typography variant="p" sx={{ pl: 2, fontWeight: 700 }}>
            Tom Brown
          </Typography>
          <List>
            <ListItem
              component="a"
              href="/health-book"
              sx={{ color: "text.secondary" }}
            >
              <Typography variant="body2">Nutritional Value</Typography>
            </ListItem>
            <ListItem
              component="a"
              href="/health-book"
              sx={{ color: "text.secondary" }}
            >
              <Typography variant="body2">Health Benfits</Typography>
            </ListItem>
            <ListItem
              component="a"
              href="/recipies"
              sx={{ color: "text.secondary" }}
            >
              <Typography variant="body2">Recipies</Typography>
            </ListItem>
            <ListItem
              component="a"
              href="/about"
              sx={{ color: "text.secondary" }}
            >
              <Typography variant="body2">Reviews</Typography>
            </ListItem>
          </List>
        </Grid>
        <Grid item md={2} sm={3} xs={12} sx={{ mt: { md: 0, sm: 0, xs: 3 } }}>
          <Typography variant="p" sx={{ pl: 2, fontWeight: 700 }}>
            Customer Service
          </Typography>
          <List>
            <ListItem
              component="a"
              href="/contact"
              sx={{ color: "text.secondary" }}
            >
              <Typography variant="body2">Contact Us</Typography>
            </ListItem>
            <ListItem
              component="a"
              href="/about#faqs"
              sx={{ color: "text.secondary" }}
            >
              <Typography variant="body2">FAQS</Typography>
            </ListItem>
            <ListItem
              component="a"
              href="/events"
              sx={{ color: "text.secondary" }}
            >
              <Typography variant="body2">Events</Typography>
            </ListItem>
            <ListItem component="a" href="/" sx={{ color: "text.secondary" }}>
              <Typography variant="body2">Terms & Conditions</Typography>
            </ListItem>
          </List>
        </Grid>
      </Grid>
      <Divider />
      <Typography variant="body2" textAlign="center" sx={{ p: 2 }}>
        &copy; 2023 Sheba Meals. All rights reserved.
      </Typography>
    </Box>
  );
}
