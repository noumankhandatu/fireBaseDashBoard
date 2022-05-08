import React from "react";
import { Box, Typography } from "@material-ui/core";
import MiniDrawer from "../../components/sidebar";
import Wrapper from "../../components/wrapper";
import AssessmentIcon from "@material-ui/icons/Assessment";
import Button from "../../components/buttons";
import SearchBar from "../../components/searchbar";
import IconCard from "../../components/iconCard";
import OrderNft from "../../components/orderNft";
import Array from "../../components/arrays";
import { makeStyles } from "@material-ui/core";
import ManageNft from "../../components/manageNft";
import RacCard from "../../components/rcaCard/index";
import FeatureArt from "../../components/featureArt";
const Dashboard = () => {
  const classes = useStyles();
  return (
    <Box display="flex" className={classes.bgColor}>
      <MiniDrawer />
      <Wrapper>
        <Box pt={3} pb={5}>
          <Typography variant="h1">
            <b>Dashboard</b>
          </Typography>
        </Box>
        <Box className={classes.entBox}>
          <Box className={classes.flexin}>
            <h2>
              <b>Overview</b>
            </h2>
            <SearchBar />
          </Box>
          <Box pt={5} pb={3}>
            <RacCard />
          </Box>
          <Box pt={5} pb={3}>
            <OrderNft />
          </Box>
          <Box pt={5} pb={3}>
            <FeatureArt />
          </Box>
        </Box>
      </Wrapper>
    </Box>
  );
};

export default Dashboard;
const useStyles = makeStyles((theme) => ({
  grid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr 1fr",
    gridGap: "10px",
    [theme.breakpoints.down("md")]: {
      gridTemplateColumns: "1fr 1fr 1fr",
    },
    [theme.breakpoints.down("sm")]: {
      gridTemplateColumns: "1fr 1fr",
    },
    [theme.breakpoints.down("xs")]: {
      gridTemplateColumns: "1fr",
    },
  },
  flexin: {
    display: "flex",
    justifyContent: "space-between",
    [theme.breakpoints.down("xs")]: {
      display: "block",
    },
  },
  bgColor: {
    backgroundColor: theme.palette.backgroundColor.bgColor,
  },
  entBox: {
    padding: "30px",
    borderRadius: "10px",
    backgroundColor: " #F1F1F1",
  },
}));
