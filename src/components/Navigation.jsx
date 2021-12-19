import React, { useState } from "react";
import { Link } from "react-router-dom";
import { greetings, socialLinks } from "../portfolio";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import { Button } from "reactstrap";
//import AssignmentIcon from "@material-ui/icons/Assignment";
import {
  UncontrolledCollapse,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
} from "reactstrap";
import "./Navigation.css";
import Typed from "react-typed";
const Navigation = () => {
  const [collapseClasses, setCollapseClasses] = useState("");
  const onExiting = () => setCollapseClasses("collapsing-out");
  const onExited = () => setCollapseClasses("");
  return (
    <>
      <header className="header-global">
        <Navbar
          className="navbar-main navbar-transparent navbar-light headroom"
          expand="lg"
          id="navbar-main"
        >
          <NavbarBrand className="mr-lg-5" to="/" tag={Link}>
            <Typed
              className="pos"
              strings={[greetings.name, "Success is Assured"]}
              typeSpeed={50}
              backSpeed={60}
              loop
            />
          </NavbarBrand>
          <button className="navbar-toggler" id="navbar-global">
            <span className="navbar-toggler-icon " />
          </button>
          <UncontrolledCollapse
            toggler="#navbar-global"
            navbar
            className={collapseClasses}
            onExiting={onExiting}
            onExited={onExited}
          >
            <div className="navbar-collapse-header">
              <Row>
                <Col className="collapse-brand" xs="6">
                  <Link to="/">
                    <h3 className="text-black" id="nav-title">
                      {greetings.name}
                    </h3>
                  </Link>
                </Col>
                <Col className="collapse-close" xs="6">
                  <Link to="/">
                    <h3 className="navbar-toggler" id="navbar-global">
                      <span />
                      <span />
                    </h3>
                  </Link>
                </Col>
              </Row>
            </div>
            <Nav className="align-items-lg-center ml-lg-auto" navbar>
              <NavItem>
                <NavLink
                  className="nav-link-icon"
                  href={socialLinks.linkedIn}
                  target="_blank"
                >
                  <div className="btn-wrapper text-lg">
                    <Button
                      className="btn-icon-only rounded-circle"
                      color="twitter"
                    >
                      <span className="btn-inner-icon">
                        <LinkedInIcon />
                      </span>
                    </Button>
                    <span className="nav-link-inner--text d-lg-none ml-2">
                      LinkedIn
                    </span>
                  </div>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className="nav-link-icon"
                  href={socialLinks.github}
                  target="_blank"
                >
                  <div className="btn-wrapper text-lg">
                    <Button
                      className="btn-icon-only rounded-circle"
                      color="github"
                    >
                      <span className="btn-inner-icon">
                        <GitHubIcon />
                      </span>
                    </Button>
                    <span className="nav-link-inner--text d-lg-none ml-2">
                      Github
                    </span>
                  </div>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className="nav-link-icon"
                  href={socialLinks.codepen}
                  target="_blank"
                >
                  <div className="btn-wrapper text-lg">
                    <Button
                      className="btn-icon-only rounded-circle"
                      color="instagram"
                    >
                      <span className="btn-inner-icon">
                        <i className="fa fa-codepen" />
                      </span>
                    </Button>
                    <span className="nav-link-inner--text d-lg-none ml-2">
                      Codepen
                    </span>
                  </div>
                </NavLink>
              </NavItem>
            </Nav>
          </UncontrolledCollapse>
        </Navbar>
      </header>
    </>
  );
};

export default Navigation;
