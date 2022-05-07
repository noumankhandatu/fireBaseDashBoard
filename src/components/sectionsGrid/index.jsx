import { Box, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import React from "react";
import Button from "../buttons";
import pic from "../../assets/ava.png";
import Divider from "../divider";

function Section() {
  const classes = useStyles();
  return (
    <Box className={classes.mainContainer}>
      <Box className={classes.headSection}>
        <Box className={classes.titleContainer}>
          <Typography variant="h2" className="typo">
            hot collection
          </Typography>
        </Box>
        <Box pt={6} className={classes.headingSection}>
          <Box>
            <Typography className={classes.headingTypo} variant="h4">
              product name
            </Typography>
          </Box>
          <Box>
            <Typography className={classes.headingTypo} variant="h4">
              description
            </Typography>
          </Box>
          <Box>
            <Typography className={classes.headingTypo} variant="h4">
              art price
            </Typography>
          </Box>
          <Box>
            <Typography className={classes.headingTypo} variant="h4">
              image
            </Typography>
          </Box>
          <Box>
            <Typography className={classes.headingTypo} variant="h4">
              creator name
            </Typography>
          </Box>
          <Box>
            <Typography className={classes.headingTypo} variant="h4">
              sequence
            </Typography>
          </Box>
          <Box>
            <Typography className={classes.headingTypo} variant="h4">
              action
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box pt={1}>
        {" "}
        <Divider blueDivider />
      </Box>
      <Box className={classes.detailsSecton}>
        {/* <Box>
          {" "}
          <Typography className={classes.headingDetails} variant="body1">
            {" "}
            01
          </Typography>
        </Box> */}
        <Box className={classes.detailsS}>
          {" "}
          <Typography className={classes.headingDetails} variant="body1">
            {" "}
            Lorem Ipsum
          </Typography>
        </Box>
        <Box className={classes.detailsS}>
          {" "}
          <Typography className={classes.headingDetails} variant="body1">
            {" "}
            fade away
          </Typography>
        </Box>
        <Box className={classes.detailsS}>
          {" "}
          <Typography className={classes.headingDetails} variant="body1">
            {" "}
            01
          </Typography>
        </Box>
        <Box className={classes.detailsS}>
          {" "}
          <Box
            pt={1}
            pb={1}
            pl={3}
            className={classes.headingDetails}
            variant="body1"
          >
            {" "}
            <img className={classes.imageavator} src={pic} alt="img" />
          </Box>
        </Box>
        <Box className={classes.detailsS}>
          {" "}
          <Typography className={classes.headingDetails} variant="body1">
            {" "}
            test02
          </Typography>
        </Box>
        <Box className={classes.detailsS}>
          {" "}
          <Typography className={classes.headingDetails} variant="body1">
            {" "}
            test02
          </Typography>
        </Box>
        <Box className={classes.detailsS}>
          <Box className={classes.Button}>
            {" "}
            <Button variant="outlined"> view</Button>{" "}
            <Button variant="contained"> delete</Button>
          </Box>
        </Box>
      </Box>
      <Box>
        {" "}
        <Divider blueDivider />
      </Box>
    </Box>
  );
}

export default Section;

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    height: 400,
    width: "90%",
    margin: "auto",
    border: "1px solid" + theme.border.main,
    boxSizing: " border-box",
    borderRadius: "8px",
  },
  titleContainer: {
    padding: "20px 40px 0px 70px",
  },
  headSection: {
    "& .typo": {
      textTransform: "uppercase",
    },
  },
  headingSection: {
    display: "flex",
    justifyContent: "space-around",
    // gridTemplateColumns: "repeat(7, 1fr)",
  },
  headingTypo: {
    textTransform: "capitalize",

    color: theme.palette.color.primary,
  },
  detailsSecton: {
    padding: "20px 0px 0px 0px",
    display: "flex",
    justifyContent: "space-around",

    // display: "grid",
    // placeContent: "center",
    // gridTemplateColumns: "repeat(7, 1fr)",
  },
  headingDetails: {
    color: theme.palette.color.secondary,
  },
  imageavator: {
    width: 51,
    height: 51,
    borderRadius: 50,
  },
  detailsS: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  Button: {},
}));
