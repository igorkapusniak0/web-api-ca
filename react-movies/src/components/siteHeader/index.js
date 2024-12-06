import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import MenuIcon from "@mui/icons-material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import Box from "@mui/material/Box";
import { useNavigate } from "react-router-dom";
import { styled } from "@mui/material/styles";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { setlogin, getLogin, getUsername } from "../../user/user";

const Offset = styled("div")(({ theme }) => theme.mixins.toolbar);

const SiteHeader = ({ history }) => {
  const [anchorElMedia, setAnchorElMedia] = useState(null);
  const [anchorElMenu, setAnchorElMenu] = useState(null);
  const [selectedMedia, setSelectedMedia] = useState("Movies");
  const [anchorElLogin, setAnchorElLogin] = useState(null);

  const openMedia = Boolean(anchorElMedia);
  const openMenu = Boolean(anchorElMenu);
  const openLogin = Boolean(anchorElLogin);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const navigate = useNavigate();

  const menuMovieOptions = [
    { label: "Home", path: "/movies" },
    { label: "Favorites", path: "/movies/favorites" },
    { label: "Upcoming", path: "/movies/upcoming" },
    { label: "Top Rated", path: "/movies/top_rated" },
  ];

  const menuShowOptions = [
    { label: "Home", path: "/shows" },
    { label: "Favorites", path: "/shows/favorites" },
    { label: "Upcoming", path: "/shows/upcoming" },
    { label: "Top Rated", path: "/shows/top_rated" },
  ];

  const mediaOptions = [
    { label: "Movies", path: "/movies/" },
    { label: "Shows", path: "/shows/" },
  ];

  const loginOptions = [
    { label: "Login", path: "/login/" },
    { label: "Register", path: "/register/" },
  ];

  const loggedIn = getLogin();
  const username = getUsername();

  const handleLogout = () => {
    console.log("Logged Out")
    setlogin(false); 
    navigate("/movies");
    navigate(0);
  };
  
  const loggedinOptions = [
    { label: `Hi, ${username}`, path: "/profile/" },
    { label: "Logout", onClick: handleLogout },
  ];

  

  const handleMenuSelect = (pageURL) => {
    navigate(pageURL, { replace: true });
    setAnchorElMenu(null);
  };

  const handleLoginSelect = (pageURL) => {
    navigate(pageURL, { replace: true });
    setAnchorElLogin(null);
  };

  const handleMediaSelect = (pageURL, mediaLabel) => {
    setSelectedMedia(mediaLabel);
    navigate(pageURL, { replace: true });
    setAnchorElMedia(null);
  };

  const handleMenu = (event) => {
    setAnchorElMenu(event.currentTarget);
  };
  const handleLogin = (event) => {
    setAnchorElLogin(event.currentTarget);
  };
  const handleMedia = (event) => {
    setAnchorElMedia(event.currentTarget);
  };

  const currentMenuOptions = selectedMedia === "Movies" ? menuMovieOptions : menuShowOptions;
  const currentLoginOptions = loggedIn ? loggedinOptions : loginOptions;

  return (
    <>
      <AppBar position="fixed" color="secondary">
        <Toolbar>
          <IconButton
            aria-label="menu"
            aria-controls="media-menu-appbar"
            aria-haspopup="true"
            onClick={handleMedia}
            color="inherit"
          >
            <MenuIcon />
          </IconButton>
          <Menu
            id="media-menu-appbar"
            anchorEl={anchorElMedia}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            open={openMedia}
            onClose={() => setAnchorElMedia(null)}
          >
            {mediaOptions.map((opt) => (
              <MenuItem
                key={opt.label}
                onClick={() => handleMediaSelect(opt.path, opt.label)}
              >
                {opt.label}
              </MenuItem>
            ))}
          </Menu>
          <Typography variant="h4" sx={{ marginRight: "50px" }}>
            TMDB Client
          </Typography>
          <Typography variant="h6" sx={{ justifyContent: "left", flexGrow: 1 }}>
            All you ever wanted to know about {selectedMedia}!
          </Typography>
          {isMobile ? (
            <>
              <IconButton
                aria-label="menu"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElMenu}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={openMenu}
                onClose={() => setAnchorElMenu(null)}
              >
                {currentMenuOptions.map((opt) => (
                  <MenuItem
                    key={opt.label}
                    onClick={() => handleMenuSelect(opt.path)}
                  >
                    {opt.label}
                  </MenuItem>
                ))}
              </Menu>
            </>
          ) : (
            <Box sx={{ display: "flex", justifyContent: "left", flexGrow: 1 }}>
              {currentMenuOptions.map((opt) => (
                <Button
                  key={opt.label}
                  color="inherit"
                  onClick={() => handleMenuSelect(opt.path)}
                >
                  {opt.label}
                </Button>
              ))}
            </Box>
          )}
          {isMobile ? (
            <>
              <IconButton
                aria-label="login"
                aria-controls="login-appbar"
                aria-haspopup="true"
                onClick={handleLogin}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="login-appbar"
                anchorEl={anchorElLogin}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={openLogin}
                onClose={() => setAnchorElLogin(null)}
              >
                {currentLoginOptions.map((opt) => (
                  <MenuItem
                    key={opt.label}
                    onClick={opt.onClick ? opt.onClick : () => handleLoginSelect(opt.path)}
                  >
                    {opt.label}
                  </MenuItem>
                ))}
              </Menu>
            </>
          ) : (
            <>
              {currentLoginOptions.map((opt) => (
                <Button
                  key={opt.label}
                  color="inherit"
                  onClick={opt.onClick ? opt.onClick : () => handleLoginSelect(opt.path)}
                >
                  {opt.label}
                </Button>
              ))}
            </>
          )}
        </Toolbar>
      </AppBar>
      <Offset />
    </>
  );
};

export default SiteHeader;
