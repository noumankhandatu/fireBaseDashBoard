import { Box, TableCell, TableRow } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import pic from "../../assets/image/ava.png";
import Button from "../buttons";
import BasicTable from "../table";
import RacOptionsBtn from "./racOptionsBtn";
const columns = [
  "Date",
  "First Name",
  "Last Name ",
  "Tier",
  "Term",
  "Amount",
  "Interest",
  "Total",
];

const clients = [
  "4 Apr 2022",
  "Moses",
  "Kenwood",
  "F3",
  "31 days",
  "R400",
  "20%",
  "R480",
];
const rows = [clients, clients, clients, clients, clients];

const RcaCard = () => {
  const classes = useStyles();
  const head = columns.map((col, id) => (
    <TableCell key={id} className={classes.col}>
      {col}
    </TableCell>
  ));

  const body = rows.map((row, id) => (
    <TableRow key={id}>
      {row.map((col) =>
        col.type ? (
          <TableCell className={classes.col}>
            <img src={`${col.src}`} alt="" />
          </TableCell>
        ) : (
          <TableCell className={classes.col}>{col}</TableCell>
        )
      )}

      <TableCell>
        <Box display="flex" alignItems="center">
          <Box pr={3}>
            <Button
              style={{ backgroundColor: "white", width: "109px" }}
              variant="contained"
            >
              Approve
            </Button>
          </Box>
          <Box>
            <Button
              style={{ backgroundColor: "#36A2DA", width: "109px" }}
              variant="contained"
              color="primary"
            >
              Reject
            </Button>
          </Box>    
        </Box>
        {/* <Box className={classes.actionBtn}>
          <Button className={classes.btnview} variant="outline">
            view
          </Button>
          <RacOptionsBtn />
        </Box> */}
      </TableCell>
    </TableRow>
  ));
  return (
    <BasicTable tableName="Requests" head={head} body={body} addBtn="Add" />
  );
};
export default RcaCard;
const useStyles = makeStyles((theme) => ({
  textcell: {
    color: theme.palette.color.secondary,
  },
  col: {
    color: theme.palette.color.primary,
  },
  actionBtn: {
    display: "flex",
    alignItems: "center",
  },
  btnview: {
    [theme.breakpoints.down("sm")]: {
      marginBottom: 10,
    },
  },
}));
