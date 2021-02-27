import React, { Component } from "react";
import "./App.css";

import Home from "./views/home";
import SearchPage from "./views/searchPage";
import Card from "./components/card";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

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
      <Router>
        <div>
          <Switch>
            <Route path="/search">
              <SearchPage />
            </Route>
            <Route path="/movie">
              <Card />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
