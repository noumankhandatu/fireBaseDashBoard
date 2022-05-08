import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Pagination } from "@material-ui/lab";

export default function PaginationRounded() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Pagination count={16} />
    </div>
  );
}
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    paddingTop: "20px",
    paddingBottom: "30px",
    justifyContent: "center",

    "& > *": {
      marginTop: theme.spacing(2),
    },
    "& .MuiButtonBase-root:hover": {},
    "& .MuiPaginationItem-page.Mui-selected": {
      color: theme.palette.color.alpha,
      backgroundColor: theme.palette.icon.secondary,
    },

    "& .MuiPaginationItem-root": {
      color: theme.palette.color.main,
    },
  },
}));
