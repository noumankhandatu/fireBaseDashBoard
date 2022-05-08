import {
  Box,
  Button,
  ButtonGroup,
  IconButton,
  makeStyles,
} from "@material-ui/core";
import React, { useState } from "react";
import MoreVertIcon from "@material-ui/icons/MoreVert";

const RacOptionsBtn = () => {
  const classes = useStyles();
  const [state, setState] = useState(false);
  const handleClick = () => {
    setState(!state);
  };
  return (
    <Box className={classes.mainContainer}>
      {state && (
        <ButtonGroup orientation="vertical" className={classes.btnGroup}>
          <Button className={classes.btn}>One</Button>
          <Button className={classes.btn}>Two</Button>
        </ButtonGroup>
      )}
      <IconButton className={classes.iconButton} onClick={handleClick}>
        <MoreVertIcon />
      </IconButton>
    </Box>
  );
};

export default RacOptionsBtn;

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    display: "flex",
    flexDirection: "row",
  },
  btnGroup: {
    marginLeft: "10px",
    borderRadius: "0px",
  },
  btn: {
    backgroundColor: theme.palette.backgroundColor.main,
    height: "25px",
    borderColor: theme.palette.color.main,
    borderRadius: "3px",
    color: theme.palette.color.main,

    fontSize: "11px",
    "&:hover": {
      backgroundColor: "#0FA9FF",
      color: "#FFFFFF",
    },
  },
  iconButton: {
    color: theme.palette.color.main,
  },
}));
