import React, { Component } from "react";
import ReactDOM from "react-dom";
import TMDBLogo from "../img/tmdb.svg";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

class SearchBox extends Component {
  handleChange(event) {
    event.target.select();
  }
  render() {
    return (
      //   <Navbar bg="light" expand="lg">
      //     <Navbar.Brand href="#home">
      //       <img
      //         src={TMDBLogo}
      //         width="30"
      //         height="30"
      //         className="d-inline-block align-top"
      //         alt="React Bootstrap logo"
      //       />
      //     </Navbar.Brand>
      //     <Navbar.Toggle aria-controls="basic-navbar-nav" />
      //     <Navbar.Collapse id="basic-navbar-nav">
      //       <Form inline>
      //         <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      //         <Button variant="outline-success">Search</Button>
      //       </Form>
      //     </Navbar.Collapse>
      //   </Navbar>
      <div class="col-xs-12 col-lg-12 searchcont">
        <div class="row">
          <div class="col-xs-12 col-sm-6 col-lg-3">
            <img
              src={TMDBLogo}
              width="180"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </div>
          <div class="col-xs-12 col-sm-6 col-lg-9 my-auto" >
            <Form inline>
              <FormControl
                type="text"
                placeholder="Search"
                className="mr-sm-2 col-md-7 my-auto mx-auto"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          </div>
        </div>
      </div>
    );
  }
}
export default SearchBox;
