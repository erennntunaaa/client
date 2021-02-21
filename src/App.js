import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import background from "./img/background.png";

// Search Bar
import SearchBar from "./components/searchBar";
// Nav Bar
import NavigationBar from "./components/navbar";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { apiResponse: "" };
  }

  callAPI() {
    fetch("http://localhost:9000/testAPI")
      .then((res) => res.text())
      .then((res) => this.setState({ apiResponse: res }))
      .catch((err) => err);
  }

  componentDidMount() {
    this.callAPI();
  }

  render() {
    return (
      <div className="App" style={{ backgroundImage: `url(${background})` }}>
        <NavigationBar />
        <SearchBar />
        <p className="App-intro">{this.state.apiResponse}</p>
      </div>
    );
  }
}

export default App;
