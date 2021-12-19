import React from "react";
import { Button, Container, Row, Col } from "reactstrap";
import { greetings } from "../portfolio";
import GreetingLottie from "../components/DisplayLottie";
import code from "../assets/lottie/coding.json";
import "./Greetings.css";
import { Fade } from "react-reveal";
const Greetings = () => {
  return (
    <Fade top duration={1500} distance="80px">
      <main>
        <div className="position-relative">
          <div className="section section-lg section-shaped pb-250">
            <div className="shape shape-style-1 bg-gradient-info">
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
            </div>
            <Container className="py-lg-md d-flex">
              <div className="col px-0">
                <Row>
                  <Col lg="6">
                    <h1 className="display-3 text-white">
                      {greetings.title + " "}
                    </h1>
                    <p className="lead text-white">{greetings.description}</p>
                    <div className="btn-wrapper my-4">
                      <Button
                        className="btn-white btn-icon mb-3 mb-sm-0 ml-1"
                        color="default"
                        href={greetings.resumeLink}
                        target="_blank"
                      >
                        <span className="btn-inner--text">📰Resume</span>
                      </Button>
                    </div>
                  </Col>
                  <Col lg="6">
                    <GreetingLottie animationData={code} />
                  </Col>
                </Row>
              </div>
            </Container>
            <div class="custom-shape-divider-bottom-1639863049">
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
          </div>
        </div>
      </main>
    </Fade>
  );
};

export default Greetings;
