import React from "react";
import { Card, Col, Row, Container, Button } from "reactstrap";
import { animateScroll as scroll } from "react-scroll";
import "./Github.css";
const GithubProfileCard = ({ prof }) => {
  const toggleHome = () => {
    scroll.scrollToTop();
  };
  return (
    <Card className="section-lg bg-gradient-info border-0">
      <Container className="container">
        <div class="custom-shape-divider-top-1639862886">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M1200 120L0 16.48 0 0 1200 0 1200 120z"
              class="shape-fill"
            ></path>
          </svg>
        </div>
        <Row>
          <Col className="order-lg-2" lg="4">
            <img
              src={prof.avatar_url}
              style={{ width: "200px" }}
              className="rounded-circle img-center img-fluid shadow shadow-lg--hover mb-4"
              alt=""
              srcSet=""
            />
          </Col>
          <Col lg="8" className="order-lg-1">
            <h2 className="text-white">Get in Touch!</h2>
            <p className="lead text-white mt-3">
              Feel free to email me regarding any inquires or collaborative
              project startups. SEE YOU SOON! ✌🏿
            </p>
            <p className="lead text-white mt-3">
              Email:{" "}
              <a href="mailto:favor_fasunwon21@hotmail.com">
                favor_fasunwon21@hotmail.com
              </a>
            </p>
            <Button color="default" onClick={toggleHome}>
              <i className="fa fa-arrow-up" /> Back to Top
            </Button>
          </Col>
        </Row>
      </Container>
    </Card>
  );
};

export default GithubProfileCard;
