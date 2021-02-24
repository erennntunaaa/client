import React, { Component } from "react";
import "./App.css";
import background from "./img/background.jpg";

// Search Bar
import SearchBar from "./components/searchBar";
// Nav Bar
import NavigationBar from "./components/navbar";
import Footer from "./components/footer";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { apiResponse: "" };
  }

  callAPI() {
    fetch("http://localhost:9000/api")
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
        <p className="api">{this.state.apiResponse}</p>

        <Footer />
      </div>
    );
  }
}

export default App;
