import React from "react";
import { Box } from "@material-ui/core";
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
    <Box display="flex" pt={5} className={classes.bgColor}>
      <MiniDrawer />

      <Wrapper>
        <Box pb={5}>
          <h1>Dashboard</h1>
        </Box>
        <Box className={classes.flexin}>
          <Button variant="inline" endIcon={<AssessmentIcon />}>
            Overview
          </Button>
          <SearchBar />
        </Box>
        {/* <div className={classes.grid}>
          {Array.map((items) => {
            return (
              <IconCard
                count={items.count}
                text={items.text}
                icon={items.icon}
              />
            );
          })}
        </div> */}
        <Box pt={5} pb={3}>
          <RacCard />
        </Box>
        <Box pt={5} pb={3}>
          <OrderNft />
        </Box>
        {/* <Box pt={5} pb={3}>
          <ManageNft />
        </Box> */}
        <Box pt={5} pb={3}>
          <FeatureArt />
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
}));
