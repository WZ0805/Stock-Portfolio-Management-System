import {
  Card,
  Container,
  IconButton,
  InputBase,
  makeStyles,
  Menu,
  MenuItem,
  MenuList,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Toolbar,
  Typography,
} from "@material-ui/core";
import { Add } from "@material-ui/icons";
import { useState } from "react";
import SearchIcon from "@material-ui/icons/Search";

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(12),
  },
  text: {
    fontFamily: "Bungee",
    fontSize: theme.spacing(5),
    color: "#FF954A",
    marginLeft: theme.spacing(1),
  },
}));

export default function Right(props) {
  const classes = useStyles();
  const [userMenu, setUserMenu] = useState(false);
  let { currentUser, setCurrentUser } = props;
  return (
    <Container className={classes.container}>
      <Paper>
        {!currentUser && <h1 className={classes.text}>Join Us!!</h1>}
        {currentUser && <h1 className={classes.text}>Your Rank</h1>}
      </Paper>
    </Container>
  );
}