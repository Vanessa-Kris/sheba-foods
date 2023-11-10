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
            bgcolor: "orange",
            align: "center",
            justifyContent: "center",
            display: upperNavVisible ? "flex" : "none",
            p: 1,
          }}
        >
          <Box
            sx={{
              m: "auto",
              display: "flex",
            }}
          >
            <Typography
              variant="body2"
              sx={{ fontSize: { xs: "13px" }, fontWeight: 500 }}
            >
              Get balanced diet! get Tom Brown Whole Meal Now.{" "}
            </Typography>
            <Button
              component="a"
              href="/products"
              variant="contained"
              size="small"
              sx={{
                borderRadius: "30px",
                mx: { md: 2, xs: 2 },
                width: { xs: "40%", md: "100px" },
                textTransform: "none",
              }}
            >
              Buy Now
            </Button>
          </Box>
          <Box justifyContent="flex-end">
            <FaCircleXmark
              onClick={handleNavToggle}
              style={{ marginRight: 7, fontSize: "20px" }}
            />{" "}
          </Box>
        </Box>

        <Toolbar>
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
              ml: { md: 5, sm: 2 },
              my: { md: 1, sm: 2 },
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
                mr: { md: 2, sm: 1 },
                my: { md: 1, sm: 2 },
                color: "text.secondary",
                textTransform: "none",
              }}
            >
              Home
            </Button>
            <Button
              component="a"
              href="/about"
              sx={{
                mr: { md: 2, sm: 1 },
                my: { md: 1, sm: 2 },
                color: "text.secondary",
                textTransform: "none",
              }}
            >
              About Us
            </Button>
            <Button
              component="a"
              href="/products"
              sx={{
                mr: { md: 2, sm: 1 },
                my: { md: 1, sm: 2 },
                color: "text.secondary",
                textTransform: "none",
              }}
            >
              Shop
            </Button>
            <Button
              component="a"
              href="/stockist"
              sx={{
                mr: { md: 2, sm: 1 },
                my: { md: 1, sm: 2 },
                color: "text.secondary",
                textTransform: "none",
              }}
            >
              Distributors
            </Button>
            <Button
              component="a"
              href="/recipies"
              sx={{
                mr: { md: 2, sm: 1 },
                my: { md: 1, sm: 2 },
                color: "text.secondary",
                textTransform: "none",
              }}
            >
              Recipies
            </Button>
            <Button
              component="a"
              href="/health-book"
              sx={{
                mr: { md: 2, sm: 1 },
                my: { md: 1, sm: 2 },
                color: "text.secondary",
                textTransform: "none",
              }}
            >
              Health Book
            </Button>
            <Button
              component="a"
              href="/events"
              sx={{
                mr: { md: 2, sm: 1 },
                my: { md: 1, sm: 2 },
                color: "text.secondary",
                textTransform: "none",
              }}
            >
              Events
            </Button>
            <Button
              component="a"
              href="/contact"
              sx={{
                mr: { md: 5, sm: 1 },
                my: { md: 1, sm: 2 },
                color: "text.secondary",
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
