import { Component } from "react";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";

class MovieTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: [],
    };
  }

  componentDidMount() {
    fetch("http://localhost:9000/api/movie/top_rated/")
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
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      const movies = [];
      items.map((item) => {
        const url = "https://image.tmdb.org/t/p/w500/" + item.poster_path;
        movies.push(
          <Col xs={6} md={2} className="trending-card">
            <div>
              <div>
                <img className="card-image" alt="Four Rooms" src={url}></img>
              </div>
            </div>
          </Col>
        );
      });
      return (
        // <ul>
        //   {items.map((item) => (
        //     <li>
        //       <p key={item.id}> {item.title}</p>{" "}
        //     </li>
        //   ))}
        // </ul>
        <Container className="trending-box">
          <h4 className="trending-title">Trending Now</h4>
          <Row className="movie-cards">
            {movies.slice(0,5)}
            {/* <Col xs={6} md={2} className="trending-card">
              <div>
                <div>
                  <img
                    className="card-image"
                    alt="Four Rooms"
                    src="https://image.tmdb.org/t/p/w500/xhU6hPDnk4s8iWWKoq4oEmNI600.jpg"
                  ></img>
                </div>
              </div>
            </Col>
            <Col xs={6} md={2} className="trending-card">
              <div>
                <div>
                  <img
                    className="card-image"
                    alt="Four Rooms"
                    src="https://image.tmdb.org/t/p/w500/72gkEGmcQhC8sA2rXgjSC7dg11w.jpg"
                  ></img>
                </div>
              </div>
            </Col>
            <Col xs={6} md={2} className="trending-card">
              <div>
                <div>
                  <img
                    className="card-image"
                    alt="Four Rooms"
                    src="https://image.tmdb.org/t/p/w500/clolk7rB5lAjs41SD0Vt6IXYLMm.jpg"
                  ></img>
                </div>
              </div>
            </Col>
            <Col xs={6} md={2} className="trending-card">
              <div>
                <div>
                  <img
                    className="card-image"
                    alt="Four Rooms"
                    src="https://image.tmdb.org/t/p/w500/6FfCtAuVAW8XJjZ7eWeLibRLWTw.jpg"
                  ></img>
                </div>
              </div>
            </Col>
            <Col xs={6} md={2} className="trending-card">
              <div>
                <div>
                  <img
                    className="card-image"
                    alt="Four Rooms"
                    src="https://image.tmdb.org/t/p/w500/xVNSgrsvpcAHPnyKf2phYxyppNZ.jpg"
                  ></img>
                </div>
              </div>
            </Col> */}
          </Row>
        </Container>
      );
    }
  }
}

export default MovieTable;
