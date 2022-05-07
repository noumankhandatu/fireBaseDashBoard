import React from "react";
import { makeStyles, Typography, Box } from "@material-ui/core";
import Switch from "@material-ui/core/Switch";
import { useState } from "react";
import { toggleAction } from "../../Redux-Toolkit/buttonSlice";
import { useDispatch } from "react-redux";
import MenuIcon from "@material-ui/icons/Menu";
import IconButton from "@material-ui/core/IconButton";
import NotificationsIcon from "@material-ui/icons/Notifications";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import DrawerComponent from "../drawerComponent";

const Header = () => {
  const [mode, setMode] = useState(false);
  const dispatch = useDispatch();
  const handleChange = () => {
    setMode(!mode);
    dispatch(toggleAction(mode));
  };

  const classes = useStyles();
  const match = useMediaQuery("(max-width: 600px)");
  const [openDrawer, setopenDrawer] = useState(false);
  const handleDrawerOpen = () => {
    setopenDrawer(true);
  };

  const handleDrawerClose = () => {
    setopenDrawer(false);
  };
  return (
    <>
      <Box className={classes.head}>
        <Box className={classes.navbar}>
          <Box className={classes.logo}>
            <Typography variant="h1">Logo</Typography>
          </Box>
          <Box className={classes.right_nav}>
            <Switch onClick={handleChange} />
            {match ? (
              <Box>
                <IconButton
                  onClick={handleDrawerOpen}
                  className={classes.nav_icon}
                >
                  <MenuIcon />
                </IconButton>
              </Box>
            ) : (
              <Box className={classes.right_nav}>
                <a href="#">
                  <IconButton className={classes.nav_icon}>
                    <NotificationsIcon />
                  </IconButton>
                </a>

                <Box className={classes.admin_nav}>
                  <a href="#">
                    <Typography className={classes.nav_icon}>Admin</Typography>{" "}
                  </a>
                  <a href="#">
                    <IconButton className={classes.nav_icon}>
                      <AccountCircleIcon />
                    </IconButton>
                  </a>
                </Box>
              </Box>
            )}
            <DrawerComponent
              style={{ marginTop: "30px" }}
              openDrawer={openDrawer}
              handleDrawerClose={handleDrawerClose}
            />
          </Box>
        </Box>
        {/* <Typography variant="h1">Hello world</Typography> */}
      </Box>
    </>
  );
};

export default Header;
const useStyles = makeStyles((theme) => ({
  head: {
    color: theme.palette.color.main,
    backgroundColor: theme.palette.backgroundColor.main,
  },
  navbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },

  logo: {
    paddingLeft: 30,
  },
  right_nav: {
    display: "flex",
    alignItems: "center",
    paddingRight: 30,
    justifyContent: "space-between",
  },

  admin_nav: {
    display: "flex",
    alignItems: "center",
    paddingLeft: 20,
  },
  nav_icon: {
    color: theme.palette.color.primary,
  },
}));
