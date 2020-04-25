import React, { Component } from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { Link, withRouter } from "react-router-dom";

import Logo from "../../images/icon.png";

class NavigationBar extends Component {
  render() {
    let { pathname } = this.props.location;

    return (
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
        <Link className="navbar-brand" to="/">
          Tracker <img src={Logo} alt="logo" width="35" height="35" />{" "}
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <li className="nav-item">
              <Link
                className={pathname === "/" ? "nav-link active" : "nav-link"}
                to="/"
              >
                Home{" "}
              </Link>
            </li>

            <li className="nav-item">
              <Link
                className={
                  pathname === "/works" ? "nav-link active" : "nav-link"
                }
                to="/works"
              >
                Works{" "}
              </Link>
            </li>
          </Nav>
          <Nav>
            <li className="nav-item">
              <Link to="#!" className="nav-link btn btn-outline-danger">
                Logout
              </Link>
            </li>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default withRouter(NavigationBar);
