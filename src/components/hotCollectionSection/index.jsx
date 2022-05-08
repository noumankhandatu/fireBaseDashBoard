import { TableCell, TableRow } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import pic from "../../assets/image/ava.png";
import Button from "../buttons";
import BasicTable from "../table";
const columns = [
  "id",
  " product name",
  "description",
  "art price",
  "image",
  "creator name",
  "sequence",
  "action",
];

const clients = [
  "1",
  "holaa",

  " una nzr asar bila",
  "0.513ETH",
  { type: "img", src: pic },
  " helloo",
  "sauna",
];
const rows = [clients, clients, clients, clients, clients];

const HotCollection = () => {
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
            <img src={`${col.src}`} />
          </TableCell>
        ) : (
          <TableCell className={classes.col}>{col}</TableCell>
        )
      )}

      <TableCell>
        <Button className={classes.btnview} variant="outline">
          view{" "}
        </Button>{" "}
        <Button variant="contain">delete</Button>
      </TableCell>
    </TableRow>
  ));
  return <BasicTable tableName="Hot Collections" head={head} body={body} />;
};
export default HotCollection;
const useStyles = makeStyles((theme) => ({
  textcell: {
    color: theme.palette.color.secondary,
  },
  col: {
    color: theme.palette.color.primary,
  },
  btnview: {
    [theme.breakpoints.down("sm")]: {
      marginBottom: 10,
    },
  },
}));
