import React from "react";
import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ListItem from "@material-ui/core/ListItem";
import SideBarArray from "../arrays/sidebararray";
import { Box } from "@material-ui/core";
import logo from "../../assets/logo.png";
const drawerWidth = 240;

export default function MiniDrawer() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(true);
  const handleDrawerOpen = () => {
    setOpen(!open);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
      >
        <div className={classes.toolbar}>
          <img src={logo} alt="" width="120px" />
          <IconButton onClick={handleDrawerOpen} className={classes.btnMagic}>
            <MenuIcon />
          </IconButton>
        </div>
        <Divider />
        <List>
          {SideBarArray.map((items) => {
            return (
              <Box display="flex" alignItems="center">
                <ListItem button>
                  <Box pl={0.4}>
                    <img src={items.icon} style={{ width: "28px" }} alt="" />
                  </Box>
                  <Typography
                    variant="h2"
                    style={{ textTransform: "capitalize" }}
                  >
                    <Box pl={3}> {items.text}</Box>
                  </Typography>
                </ListItem>
              </Box>
            );
          })}
        </List>
      </Drawer>
    </div>
  );
}
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  btnMagic: {
    color: theme.palette.color.wolf,
    backgroundColor: " #00639B ",
    paddingLeft: "36px",
    paddingRight: "31px",
  },
  appBar: {
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: "none",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap",
  },
  drawerOpen: {
    color: theme.palette.color.wolf,
    backgroundColor: " #00639B ",
    position: "relative",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    color: theme.palette.color.wolf,
    backgroundColor: " #00639B ",
    position: "relative",
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: "hidden",
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9) + 1,
    },
  },
  toolbar: {
    display: "flex",
    paddingTop: "14px",
    paddingBottom: "14px",
    color: theme.palette.color.wolf,
    backgroundColor: " #00639B ",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));
