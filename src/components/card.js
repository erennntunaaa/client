import React, { Component } from "react";
import ReactDOM from "react-dom";
import background from "../img/background.png";
import SearchBox from "./search";
import Box from "@material-ui/core/Box";
const TMBDBLogo = "./images/tmdb.svg";
let numeral = require("numeral");

let backdropIMG;

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: [],
    };
  }

  componentDidMount() {
    fetch("http://localhost:9000/api/movie/search/id/472715")
      .then((res) => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result,
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
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

    let data = this.props.data;
    // if movie ID found, then...

    let posterIMG = "https://image.tmdb.org/t/p/w500" + items.poster_path,
      production = items.production_companies,
      totalRevenue = items.revenue,
      productionList = nestedDataToString(production),
      noData = "-",
      genres = items.genres,
      genresList = nestedDataToString(genres);
    backdropIMG = "https://image.tmdb.org/t/p/original" + items.backdrop_path;

    // conditional statements for no data
    if (items.vot_average === "undefined" || items.vote_average === 0) {
      items.vote_average = noData;
    } else {
      items.vote_average = items.vote_average + " / 10";
    }

    // if (totalRevenue === "undefined" || totalRevenue === 0) {
    //   totalRevenue = noData;
    // } else {
    //   totalRevenue = numeral(data.revenue).format("($0,0)");
    // }

    if (items.poster_path == null) {
      posterIMG =
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSols5HZxlQWyS9JY5d3_L9imbk0LiziHiyDtMZLHt_UNzoYUXs2g";
    }

    return (
      <div className="App" style={{ backgroundImage: `url(${backdropIMG})` }}>
        <div id="outer-container" className="MovieBody">
          <div class="container">
            <div class="row">
              <div class="col-xs-12 col-lg-10 offset-lg-1">
                <SearchBox></SearchBox>
                <div class="col-xs-12 cardcont nopadding">
                  <div class="row">
                    <div class="poster-container nopadding col-xs-12 col-md-4 pull-md-8 col-lg-5 pull-lg-7 ">
                      <img id="postertest" className="poster" src={posterIMG} />
                    </div>
                    <div class="meta-data-container col-xs-12 col-md-8 push-md-4 col-lg-7 push-lg-5">
                      <div class="card-body">
                        <h1 class="card-title">{items.title}</h1>
                        <span className="tagline">{items.tagline}</span>
                        <p class="card-text">{items.overview}</p>
                        <div className="additional-details">
                          <span className="genre-list">{genresList}</span>
                          <span className="production-list">
                            {productionList}
                          </span>
                          <Box m={2} />
                          <div className="row nopadding release-details">
                            <div className="col-md-6">
                              {" "}
                              Original Release:{" "}
                              <span className="meta-data">
                                {items.release_date}
                              </span>
                            </div>
                            <div className="col-md-6">
                              {" "}
                              Vote Average:{" "}
                              <span className="meta-data">
                                {items.vote_average}
                              </span>
                            </div>
                            <div className="col-md-6">
                              {" "}
                              Running Time:{" "}
                              <span className="meta-data">
                                {items.runtime} mins
                              </span>{" "}
                            </div>
                            
                            <div className="col-md-6">
                              {" "}
                              Revenue:{" "}
                              <span className="meta-data">{totalRevenue === 0 ? "-" : totalRevenue}</span>
                            </div>
                          </div>
                        </div>

                        <p class="card-text">
                          <small class="text-muted">
                            Last updated 3 mins ago
                          </small>
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* <div className="Card">
                  <div class="card mb-3">
                    <div class="row no-gutters">
                      <div class="col-md-2"></div>
                      <div class="col-md-2.6">
                        <img
                          id="postertest"
                          className="poster"
                          src={posterIMG}
                        />
                      </div>
                      <div class="col-md-6 cardBody-style">
                        <div class="card-body">
                          <h2 class="card-title">{items.title}</h2>
                          <p class="card-text">{items.overview}</p>
                          <div className="col-xs-6">
                            {" "}
                            Original Release:{" "}
                            <span className="meta-data">
                              {items.release_date}
                            </span>
                          </div>
                          <div className="col-xs-6">
                            {" "}
                            Vote Average:{" "}
                            <span className="meta-data">
                              {items.vote_average}
                            </span>
                          </div>
                          <p class="card-text">
                            <small class="text-muted">
                              Last updated 3 mins ago
                            </small>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-1"></div>
                </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function nestedDataToString(nestedData) {
  let nestedArray = [],
    resultString;
  if (nestedData !== undefined) {
    nestedData.forEach(function (item) {
      nestedArray.push(item.name);
    });
  }
  resultString = nestedArray.join(", "); // array to string
  return resultString;
}
export default Card;

// <div className="col-xs-12 cardcont nopadding">
//           <div className="meta-data-container col-xs-12 col-md-8 push-md-4 col-lg-7 push-lg-5">
//             <h1>{items.title}</h1>

//             {/* <span className="tagline">{data.tagline}</span> */}
//             <p>{items.overview}</p>
//             <div className="additional-details">
//               <span className="genre-list">{genresList}</span>
//               <span className="production-list">{productionList}</span>
//               <div className="row nopadding release-details">
//                 <div className="col-xs-6">
//                   {" "}
//                   Original Release:{" "}
//                   <span className="meta-data">{items.release_date}</span>
//                 </div>
//                 {/* <div className="col-xs-6">
//                 {" "}
//                 Running Time:{" "}
//                 <span className="meta-data">{data.runtime} mins</span>{" "}
//               </div>
//               <div className="col-xs-6">
//                 {" "}
//                 Box Office: <span className="meta-data">{totalRevenue}</span>
//               </div> */}
//                 <div className="col-xs-6">
//                   {" "}
//                   Vote Average:{" "}
//                   <span className="meta-data">{items.vote_average}</span>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="poster-container nopadding col-xs-12 col-md-4 pull-md-8 col-lg-5 pull-lg-7 ">
//             <img id="postertest" className="poster" src={posterIMG} />
//           </div>
//         </div>
