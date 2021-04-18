import React, { Component } from "react";
import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";

export default class Navigation extends Component {
  click = () => {
    window.open("https://github.com/71xn");
  };

  render() {
    return (
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="/" color="purple">
          React-Bootstrap
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="#link">Info</Nav.Link>
          </Nav>
          <Button variant="outline-success" onClick={this.click}>
            Support Us on GitHub!
          </Button>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
