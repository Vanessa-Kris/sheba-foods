import * as React from "react";
import "../App.css";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { AppBar } from "@mui/material";
import { FaCircleXmark } from "react-icons/fa6";

const drawerWidth = 240;

function NavBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [upperNavVisible, setUpperNavVisible] = React.useState(true);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
    setUpperNavVisible((prevState) => !prevState);
  };

  const handleNavToggle = () => {
    setUpperNavVisible((prevState) => !prevState);
  };

  NavBar.propTypes = {
    window: PropTypes.func,
  };

  const drawer = (
    <Box
      onClick={handleDrawerToggle}
      sx={{ textAlign: "center", color: "text.primary" }}
    >
      <Typography variant="h6" sx={{ my: 2 }}>
        Sheba Foods
      </Typography>
      <Divider />
      <Box>
        <List sx={{ flexDirection: "column" }}>
          <ListItem disablePadding>
            <ListItemButton component="a" href="/" sx={{ textAlign: "center" }}>
              <ListItemText>Home</ListItemText>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton
              component="a"
              href="/about"
              sx={{ textAlign: "center" }}
            >
              <ListItemText>About Us</ListItemText>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton
              component="a"
              href="/products"
              sx={{ textAlign: "center" }}
            >
              <ListItemText>Shop</ListItemText>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton
              component="a"
              href="/stockist"
              sx={{ textAlign: "center" }}
            >
              <ListItemText>Distributors</ListItemText>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton
              component="a"
              href="/recipies"
              sx={{ textAlign: "center" }}
            >
              <ListItemText>Recipies</ListItemText>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton
              component="a"
              href="/health-book"
              sx={{ textAlign: "center" }}
            >
              <ListItemText>Health Book</ListItemText>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton
              component="a"
              href="/events"
              sx={{ textAlign: "center" }}
            >
              <ListItemText>Events</ListItemText>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton
              component="a"
              href="/contact"
              sx={{ textAlign: "center" }}
            >
              <ListItemText>Contact</ListItemText>
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box>
      <AppBar>
        <Box
          sx={{
            bgcolor: "#268703",
            align: "center",
            justifyContent: "center",
            display: upperNavVisible ? "flex" : "none",
            p: 1,
          }}
        >
          <Box
            sx={{
              m: "auto",
              display: { md: "flex", sm: "flex", xs: "block" },
            }}
          >
            <Typography
              variant="body2"
              alignItems="center"
              justifyContent="center"
              my="auto"
              sx={{
                fontSize: { xs: "13px" },
                fontWeight: 500,
                px: { md: 2, sm: 2, xs: 0 },
                color: "#fff !important",
              }}
            >
              Get balanced diet! get Tom Brown Whole Meal Now.{" "}
            </Typography>
            <Button
              component="a"
              href="/products"
              // variant="outlined"
              size="small"
              sx={{
                textDecoration: "underline",
                color: "#fff",
              }}
            >
              Buy Now
            </Button>
          </Box>
          <Box justifyContent="flex-end">
            <FaCircleXmark
              onClick={handleNavToggle}
              style={{
                marginRight: 7,
                fontSize: "20px",
                color: "#fff",
              }}
            />{" "}
          </Box>
        </Box>

        <Toolbar sx={{ bgcolor: "#fff" }}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{
              flexGrow: 1,
              display: { xs: "none", sm: "block" },
              my: { md: 1, sm: 2 },
              color: "text.primary",
            }}
          >
            👨‍🍳 Sheba Foods
          </Typography>

          <Box
            sx={{
              display: {
                xs: "none",
                sm: "block",
                md: "block",
              },
            }}
          >
            <Button
              component="a"
              href="/"
              sx={{
                my: { md: 1, sm: 2 },
                color: "text.primary",
                textTransform: "none",
              }}
            >
              Home
            </Button>
            <Button
              component="a"
              href="/about"
              sx={{
                my: { md: 1, sm: 2 },
                color: "text.primary",
                textTransform: "none",
              }}
            >
              About Us
            </Button>
            <Button
              component="a"
              href="/products"
              sx={{
                my: { md: 1, sm: 2 },
                color: "text.primary",
                textTransform: "none",
              }}
            >
              Shop
            </Button>
            <Button
              component="a"
              href="/stockist"
              sx={{
                my: { md: 1, sm: 2 },
                color: "text.primary",
                textTransform: "none",
              }}
            >
              Distributors
            </Button>
            <Button
              component="a"
              href="/recipies"
              sx={{
                my: { md: 1, sm: 2 },
                color: "text.primary",
                textTransform: "none",
              }}
            >
              Recipies
            </Button>
            <Button
              component="a"
              href="/health-book"
              sx={{
                my: { md: 1, sm: 2 },
                color: "text.primary",
                textTransform: "none",
              }}
            >
              Health Book
            </Button>
            <Button
              component="a"
              href="/events"
              sx={{
                my: { md: 1, sm: 2 },
                color: "text.primary",
                textTransform: "none",
              }}
            >
              Events
            </Button>
            <Button
              component="a"
              href="/contact"
              sx={{
                my: { md: 1, sm: 2 },
                color: "text.primary",
                textTransform: "none",
              }}
            >
              Contact
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
}

export default NavBar;
