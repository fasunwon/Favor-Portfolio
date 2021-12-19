import React from "react";
import { educationInfo } from "../portfolio";
import { Container, Col, Row } from "reactstrap";
import EducationCard from "../components/EducationCard";
import "./Education.css";
const Education = () => {
  return (
    <section className="section pb-0 bg-gradient-info my-5">
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
      <Container>
        <div className="d-flex px-3">
          <div>
            <div className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-info">
              <i className="fa fa-graduation-cap" aria-hidden="true"></i>
            </div>
          </div>
          <div className="pl-4">
            <h4 className="display-3 text-white">Education</h4>
          </div>
        </div>
        <Row className="row-grid align-item-center">
          {educationInfo?.map((info) => {
            return (
              <Col className="order-lg-1" lg="6">
                <EducationCard education={info} />
              </Col>
            );
          })}
        </Row>
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
    </section>
  );
};

export default Education;
