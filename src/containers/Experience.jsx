import React from "react";
import { Col, Container, Row } from "reactstrap";
import ExperienceCard from "../components/ExperienceCard";
import { experienceInfo } from "../portfolio";
const Experience = () => {
  return (
    <section className="section section-lg">
      <Container>
        <div className="d-flex p-3">
          <div>
            <div className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-info">
              <i className="fa fa-code" aria-hidden="true"></i>
            </div>
          </div>
          <div className="pl-4">
            <h4 className="display-3 text-info">Experience</h4>
          </div>
        </div>
        <Row className="row-grid align-item-center">
          {experienceInfo?.map((data, i) => {
            return (
              <Col className="order-lg-1" lg="6">
                <ExperienceCard key={i} data={data} />
              </Col>
            );
          })}
        </Row>
      </Container>
    </section>
  );
};

export default Experience;
