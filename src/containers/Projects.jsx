import React from "react";
import { Col, Container, Row } from "reactstrap";
import { Fade } from "react-reveal";
import ProjectCard from "../components/ProjectCard";
import { projectInfo } from "../portfolio";
const Projects = () => {
  return (
    <section className="section section-lg">
      <Container>
        <div className="d-flex p-4">
          <div>
            <div className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-info">
              <i class="fa fa-bookmark"></i>
            </div>
          </div>
          <div className="pl-4">
            <h4 className="display-3 text-info">Projects</h4>
          </div>
        </div>
        <Row className="row-grid alig-item-center">
          {projectInfo?.map((data) => {
            return (
              <Col className="order-lg-1" lg="6">
                <ProjectCard key={data} data={data} />
              </Col>
            );
          })}
        </Row>
      </Container>
    </section>
  );
};

export default Projects;
