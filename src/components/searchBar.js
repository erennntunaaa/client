import React from "react";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import IconButton from "@material-ui/core/IconButton";
import { makeStyles } from "@material-ui/core/styles";
import SearchIcon from "@material-ui/icons/Search";
import world from "../animation/world";
import LottieAnimation from "./lottieAnimation";

import Box from "@material-ui/core/Box";
import MovieTable from "../components/movieTable";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "2px 4px",
    display: "flex",
    alignItems: "center",
    width: "25%",
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
    margin: 10,
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    height: 28,
    margin: 4,
  },
}));

const SearchBar = ({ keyword, setKeyword }) => {
  

  const classes = useStyles();
  return (
    <div className="SearchBar">
      <LottieAnimation lotti={world} width={150} height={150} />
      <Box m={1} />
      <header>
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <h1 className="App-title">Movie Club</h1>
      </header>
      <Box m={1} />
      <Paper component="form" className={classes.root}>
        <InputBase
          className={classes.input}
          value={keyword}
          placeholder="i.e. Jurassic Park"
        />
        <IconButton
          type="submit"
          className={classes.iconButton}
          aria-label="search"
          href="/search"
        >
          <SearchIcon />
        </IconButton>
      </Paper>
      
      <MovieTable />
    </div>
  );
};

export default SearchBar;
