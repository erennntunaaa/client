import React from "react";
import background from "../img/background.png";

// Search Bar
import SearchBar from "../components/searchBar";
// Nav Bar
import NavigationBar from "../components/navbar";
import Footer from "../components/footer";

const Home = function () {
  return (
    <div className="App" style={{ backgroundImage: `url(${background})` }}>
      <NavigationBar />
      <SearchBar />
      <Footer />
    </div>
  );
};

export default Home;

// <p className="api">{this.state.apiResponse}</p>
