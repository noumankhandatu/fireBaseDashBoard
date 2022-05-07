import React from "react";
import { Box, Typography } from "@material-ui/core";
import MiniDrawer from "../../components/sidebar";
import Wrapper from "../../components/wrapper";
import AssessmentIcon from "@material-ui/icons/Assessment";
import Button from "../../components/buttons";
import SearchBar from "../../components/searchbar";
import IconCard from "../../components/iconCard";
import Array from "../../components/arrays";
import { makeStyles } from "@material-ui/core";

const Dashboard = () => {
  const classes = useStyles();
  return (
    <Box display="flex" pt={5} className={classes.bgColor}>
      <MiniDrawer />
      <Wrapper>
        <Box display="flex" justifyContent="space-between">
          <SearchBar />
          <Button variant="inline" endIcon={<AssessmentIcon />}>
            Report
          </Button>
        </Box>
        <div className={classes.grid}>
          {Array.map((items) => {
            return (
              <IconCard
                count={items.count}
                text={items.text}
                icon={items.icon}
              />
            );
          })}
        </div>
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
      gridTemplateColumns: "1fr",
    },
  },
  bgColor: {
    height: "100vh",
    backgroundColor: theme.palette.backgroundColor.bgColor,
  },
}));
