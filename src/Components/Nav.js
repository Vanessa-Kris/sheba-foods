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
// import { Link } from "react-router-dom";

const drawerWidth = 240;

function NavBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  NavBar.propTypes = {
    window: PropTypes.func,
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        Sheba Foods
      </Typography>
      <Divider />
      <Box>
        <List sx={{ flexDirection: "column" }}>
          <ListItem disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText>Home</ListItemText>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText>About Us</ListItemText>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText>Shop</ListItemText>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText>Recipies</ListItemText>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText>Events</ListItemText>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
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
              sx={{
                mr: { md: 2, sm: 1 },
                my: { md: 1, sm: 2 },
                color: "text.secondary",
              }}
            >
              Home
            </Button>
            <Button
              sx={{
                mr: { md: 2, sm: 1 },
                my: { md: 1, sm: 2 },
                color: "text.secondary",
              }}
            >
              About Us
            </Button>
            <Button
              sx={{
                mr: { md: 2, sm: 1 },
                my: { md: 1, sm: 2 },
                color: "text.secondary",
              }}
            >
              Shop
            </Button>
            <Button
              sx={{
                mr: { md: 2, sm: 1 },
                my: { md: 1, sm: 2 },
                color: "text.secondary",
              }}
            >
              Recipies
            </Button>
            <Button
              sx={{
                mr: { md: 2, sm: 1 },
                my: { md: 1, sm: 2 },
                color: "text.secondary",
              }}
            >
              Health Book
            </Button>
            <Button
              sx={{
                mr: { md: 2, sm: 1 },
                my: { md: 1, sm: 2 },
                color: "text.secondary",
              }}
            >
              Events
            </Button>
            <Button
              sx={{
                mr: { md: 5, sm: 1 },
                my: { md: 1, sm: 2 },
                color: "text.secondary",
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
