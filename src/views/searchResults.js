import React, { Component } from "react";
import background from "../img/background.png";
class SearchResults extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: [],
    };
  }

  componentDidMount() {
    fetch("http://localhost:9000/api/movie/search/James")
      .then((res) => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result.results,
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            error,
          });
        }
      );
  }

  render() {
    const { error, isLoaded, items } = this.state;
    if (error) {
      return (
        <div className="App" style={{ backgroundImage: `url(${background})` }}>
          Error: {error.message}
        </div>
      );
    } else if (!isLoaded) {
      return (
        <div className="App" style={{ backgroundImage: `url(${background})` }}>Loading...</div>
      );
    } else {
      return (
        <div className="App" style={{ backgroundImage: `url(${background})` }}>
          <ul>
            {items.map((item) => (
              <li key={item.id} className="listItems">
                {item.id} {item.title}
              </li>
            ))}
          </ul>
        </div>
      );
    }
  }
}

export default SearchResults;
