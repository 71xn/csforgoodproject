import React, { Component } from "react";
import { Navbar, Nav, Button } from "react-bootstrap";

import logo from "../logo.png";

export default class Navigation extends Component {
  click = () => {
    window.open("https://github.com/71xn");
  };

  render() {
    return (
      <Navbar bg="dark" variant="dark" fixed="top" expand="lg">
        <Navbar.Brand href="/">
          <img
            alt=""
            src={logo}
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{" "}
          #CSFORGOOD - European Pollution Visualization
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto"></Nav>
          <Button variant="outline-success" onClick={this.click}>
            Support Me on GitHub!
          </Button>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
