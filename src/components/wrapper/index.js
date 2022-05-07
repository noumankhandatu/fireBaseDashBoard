import React from "react";
import { makeStyles } from "@material-ui/core";
/**
 * @dev Wrapper is container with holds data
 * @props Children takes only

 */
const Wrapper = ({ children }) => {
  const classes = useStyles();
  return <div className={classes.wraped}>{children}</div>;
};

export default Wrapper;
const useStyles = makeStyles((theme) => ({
  wraped: {
    paddingLeft: "20px",
    paddingTop: "3px",
    marginLeft: "20px",
  },
}));
