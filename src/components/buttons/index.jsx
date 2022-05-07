import { alpha, Button, withStyles } from "@material-ui/core";

/**
 * @dev custom button designed upon Material UI's Button component. It accepts all props the MuI button accepts. moreover, the following props have been overridden. the default styles is contained primary
 * @props variant can be either contained or outlined
 * @props color can be primary or secondary
 */
export default withStyles((theme) => ({
  root: {
    boxSizing: "border-box",
    textAlign: "center",
    border: "none",
    fontWeight: 500,
    fontsize: 11,
  },

  outlined: {
    padding: " 20px 30px",
    color: theme.palette.color.alpha,
    background: theme.palette.backgroundColor.iconbg1,
    width: "90px",
    height: "37px",
    borderRadius: "50px",
    "&:hover": {
      backgroundColor: alpha(theme.palette.backgroundColor.iconbg1, 0.9),
    },
  },

  contained: {
    borderRadius: "50px",
    color: theme.palette.color.alpha,
    background: theme.palette.backgroundColor.iconbg2,
    width: "90px",
    height: "37px",
    "&:hover": {
      backgroundColor: alpha(theme.palette.backgroundColor.iconbg2, 0.9),
    },
  },
  inline: {
    borderRadius: "50px",
    color: theme.palette.color.main,
    backgroundColor: theme.palette.backgroundColor.main,
    height: "37px",
    "&:hover": {
      backgroundColor: alpha(theme.palette.backgroundColor.iconbg2, 0.9),
    },
  },
}))(Button);
