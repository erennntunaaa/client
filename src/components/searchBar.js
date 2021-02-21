import React from "react";

const SearchBar = ({ keyword, setKeyword }) => {
  const BarStyling = {
    width: "20rem",
    background: "#F2F1F9",
    border: "none",
    padding: "0.5rem",
  };
  return (
    <div className="SearchBar">
      <header>
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <h1 className="App-title">Movie Club</h1>
      </header>
      <input
        style={BarStyling}
        key="random1"
        value={keyword}
        placeholder={"search country"}
        onChange={(e) => setKeyword(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;
