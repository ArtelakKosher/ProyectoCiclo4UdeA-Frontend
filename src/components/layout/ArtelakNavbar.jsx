import React from "react";
import "../../assets/styles/artelak-navbar.css";
import { StyledEngineProvider } from "@mui/material/styles";
import { useState } from "react";

import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

import { Divider, Drawer } from "@mui/material";
import { styled, useTheme } from "@mui/material/styles";
import {
  FaHome,
  FaBoxes,
  FaHeart,
  FaShoppingCart,
  FaAddressBook,
  FaSearch,
  FaUser,
} from "react-icons/fa";
import { GoSignIn, GoSignOut } from "react-icons/go";

import {
  SearchBar,
  SearchBarInput,
  SearchContainer,
  IconNavLink,
} from "./ArtelakNavbarStyled";

import { Badge } from "@mui/material";

import { Image, ChakraProvider } from "@chakra-ui/react";

import imgLogo from "/images/logo/artelak20cm.png";

import { Link } from "react-router-dom";

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "space-between",
}));

const ArtelakLogoWrapper = styled("div")(() => ({
  height: "55px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}));

const SearchBarButton = styled("div")(() => ({
  border: "none",
  fontSize: "20px",
  borderRadius: "50%",
  minHeight: "40px",
  minWidth: "40px",
  color: "white",
  background: "#cc9e6a",
  cursor: "pointer",
  BorderColor: "white",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}));

const StyledList = styled(List)({
  // selected and (selected + hover) states
  '&& .Mui-selected, && .Mui-selected:hover': {
    borderRadius: "5px",
    backgroundColor: '#cc9e6a',
    '&, & .MuiListItemIcon-root': {
      color: 'white',
    },
  },
  // hover states
  '& .MuiListItemButton-root:hover': {
    borderRadius: "5px",
    backgroundColor: '#cc9e6a',
    '&, & .MuiListItemIcon-root': {
      color: 'ywhite',
    },
  },
});

const ArtelakNavbar = () => {
  const theme = useTheme();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  return (
    <>
      <StyledEngineProvider injectFirst>
        <AppBar
          position="static"
          style={{
            background: "#12284C",
            height: "80px",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Toolbar>
            <div className="appbar__wrapper">
              <div className="appbar__logo">
                <IconButton
                  className="appbar__menu"
                  size="large"
                  edge="start"
                  color="inherit"
                  aria-label="menu"
                  sx={{ mr: 1 }}
                  onClick={() => setIsDrawerOpen(true)}
                >
                  <MenuIcon />
                </IconButton>
                <ArtelakLogoWrapper>
                  <ChakraProvider>
                    <Image src={imgLogo} alt="Logo" height="40px" />
                  </ChakraProvider>
                </ArtelakLogoWrapper>
              </div>
              <div className="appbar__search">
                <SearchBar>
                  <SearchBarInput
                    type="text"
                    placeholder="Buscar productos (e.j. queso)"
                  />
                  <SearchBarButton type="submit">
                    <FaSearch size={25} />
                  </SearchBarButton>
                </SearchBar>
              </div>
              <div className="appbar__icons">
                <IconNavLink to="/home">
                  <FaHome size={25} />
                </IconNavLink>
                <IconNavLink to="/products">
                  <FaBoxes size={25} />
                </IconNavLink>
                <IconNavLink to="/cart">
                  <Badge
                    badgeContent={1}
                    sx={{
                      "& .MuiBadge-badge": {
                        right: -5,
                        color: "white",
                        backgroundColor: "#cc9e6a",
                      },
                    }}
                  >
                    <FaShoppingCart size={25} />
                  </Badge>
                </IconNavLink>
                <IconNavLink to="/login">
                  <FaUser size={25} />
                </IconNavLink>
              </div>
            </div>
          </Toolbar>
        </AppBar>

        <SearchContainer>
          <SearchBar>
            <SearchBarInput
              type="text"
              placeholder="Buscar productos (e.j. queso)"
            />
            <SearchBarButton type="submit">
              <FaSearch size={25} />
            </SearchBarButton>
          </SearchBar>
        </SearchContainer>

        <Drawer
          anchor="left"
          open={isDrawerOpen}
          onClose={() => setIsDrawerOpen(false)}
          PaperProps={{
            sx: {
              backgroundColor: "#12284C",
              color: "white",
            },
          }}
        >
          <Box p={2} width="250px" role="presentation" textAlign="center">
            <DrawerHeader>
              <Typography variant="h6" component="div">
                Menú
              </Typography>
              <IconButton onClick={() => setIsDrawerOpen(false)}>
                {theme.direction === "ltr" ? (
                  <ChevronLeftIcon style={{ color: "white" }} />
                ) : (
                  <ChevronRightIcon />
                )}
              </IconButton>
            </DrawerHeader>
            <Divider style={{ background: "white" }} />
            <StyledList>
              <ListItem
                component={Link}
                to="/home"
                disablePadding
                style={{ textDecoration: "none", color: "white" }}
              >
                <ListItemButton>
                  <ListItemIcon style={{ color: "white" }}>
                    <FaHome />
                  </ListItemIcon>
                  <ListItemText primary="Inicio" />
                </ListItemButton>
              </ListItem>
              <ListItem
                component={Link}
                to="/login"
                disablePadding
                style={{ textDecoration: "none", color: "white" }}
              >
                <ListItemButton>
                  <ListItemIcon style={{ color: "white" }}>
                    <GoSignIn />
                  </ListItemIcon>
                  <ListItemText primary="Ingresar" />
                </ListItemButton>
              </ListItem>
              <ListItem
                component={Link}
                to="/products"
                disablePadding
                style={{ textDecoration: "none", color: "white" }}
              >
                <ListItemButton>
                  <ListItemIcon style={{ color: "white" }}>
                    <FaBoxes />
                  </ListItemIcon>
                  <ListItemText primary="Productos" />
                </ListItemButton>
              </ListItem>
              <ListItem
                component={Link}
                to="/favorites"
                disablePadding
                style={{ textDecoration: "none", color: "white" }}
              >
                <ListItemButton>
                  <ListItemIcon style={{ color: "white" }}>
                    <FaHeart />
                  </ListItemIcon>
                  <ListItemText primary="Favoritos" />
                </ListItemButton>
              </ListItem>
              <ListItem
                component={Link}
                to="/cart"
                disablePadding
                style={{ textDecoration: "none", color: "white" }}
              >
                <ListItemButton>
                  <ListItemIcon style={{ color: "white" }}>
                    <FaShoppingCart />
                  </ListItemIcon>
                  <ListItemText primary="Carrito" />
                </ListItemButton>
              </ListItem>
              <ListItem
                component={Link}
                to="/contact"
                disablePadding
                style={{ textDecoration: "none", color: "white" }}
              >
                <ListItemButton>
                  <ListItemIcon style={{ color: "white" }}>
                    <FaAddressBook />
                  </ListItemIcon>
                  <ListItemText primary="Contácto" />
                </ListItemButton>
              </ListItem>
              <ListItem
                component={Link}
                to="#"
                disablePadding
                style={{ textDecoration: "none", color: "white" }}
              >
                <ListItemButton>
                  <ListItemIcon style={{ color: "white" }}>
                    <GoSignOut />
                  </ListItemIcon>
                  <ListItemText primary="Salir" />
                </ListItemButton>
              </ListItem>
            </StyledList>
          </Box>
        </Drawer>
      </StyledEngineProvider>
    </>
  );
};

export default ArtelakNavbar;
