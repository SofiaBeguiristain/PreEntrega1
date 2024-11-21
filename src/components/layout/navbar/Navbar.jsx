import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
  Box,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import { Link } from "react-router-dom";
import { CartWidget } from "../../common/cartWidget/CartWidget";
import MenuIcon from "@mui/icons-material/Menu";
import React, { useState } from "react";

export const Navbar = ({ darkMode }) => {
  const [openDrawer, setOpenDrawer] = useState(false);

  const toggleDrawer = (open) => () => {
    setOpenDrawer(open);
  };

  return (
    <>
      <AppBar
        position="sticky"
        sx={{
          backgroundColor: darkMode ? "#FF7043" : "#FFCCBC",
        }}
      >
        <Toolbar>
          <Link to="/" style={{ flexGrow: 1 }}>
            <img
              src="https://res.cloudinary.com/dyj4xvjna/image/upload/v1728600578/logoaltapinta_mzlarw.png"
              alt="Logo"
              style={{
                width: "100px",
                height: "100px",
                objectFit: "contain",
              }}
            />
          </Link>

          <Box sx={{ display: { xs: "none", sm: "flex" }, gap: "20px" }}>
            <Button component={Link} to="/" sx={{ color: "white" }}>
              Todas
            </Button>
            <Button
              component={Link}
              to="/category/premium"
              sx={{ color: "white" }}
            >
              Sin alcohol
            </Button>
            <Button
              component={Link}
              to="/category/clasicas"
              sx={{ color: "white" }}
            >
              Clásicas
            </Button>
          </Box>

          <CartWidget />

          <IconButton
            sx={{ color: "white", display: { xs: "block", sm: "none" } }}
            onClick={toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Drawer (menú lateral) para pantallas pequeñas */}
      <Drawer anchor="right" open={openDrawer} onClose={toggleDrawer(false)}>
        <List sx={{ width: 250 }}>
          <ListItem
            button
            component={Link}
            to="/"
            onClick={toggleDrawer(false)}
          >
            <ListItemText primary="Todas" />
          </ListItem>
          <ListItem
            button
            component={Link}
            to="/category/premium"
            onClick={toggleDrawer(false)}
          >
            <ListItemText primary="Sin alcohol" />
          </ListItem>
          <ListItem
            button
            component={Link}
            to="/category/clasicas"
            onClick={toggleDrawer(false)}
          >
            <ListItemText primary="Clásicas" />
          </ListItem>
        </List>
      </Drawer>
    </>
  );
};
