import React, { Fragment } from "react";
import { Container, Row, Col, UncontrolledTooltip } from "reactstrap";
import languages from "../assets/lottie/languages.json";
import { Fade } from "react-reveal";
import { skillsSection } from "../portfolio";
import DisplayLottie from "../components/DisplayLottie";
const Skills = () => {
  return (
    <Fade left duration={1500} distance="80px">
      <Container className="text-center my-5 section section-lg">
        <h1 className="h1">{skillsSection.title}</h1>
        <p className="lead">{skillsSection.subtitle}</p>
        <Row>
          <Col lg="6">
            <DisplayLottie animationData={languages} />
          </Col>
          <Col lg="6">
            <div className="d-flex justify-content-center flex-wrap mb-5">
              {skillsSection?.softwareSkills?.map((skill) => {
                return (
                  <Fragment key={skill.skillName}>
                    <div
                      id={skill.skillName}
                      className="icon icon-lg icon-shape shadow rounded-circle mb-5 mr-2"
                    >
                      <span
                        className="iconify"
                        data-icon={skill.fontAwesomeClassname}
                        data-inline="false"
                      ></span>
                    </div>
                    <UncontrolledTooltip
                      delay={0}
                      placement="bottom"
                      target={skill.skillName}
                    >
                      {skill.skillName}
                    </UncontrolledTooltip>
                  </Fragment>
                );
              })}
            </div>
            {skillsSection.skills?.map((skill) => {
              return <p key={skill}>{skill}</p>;
            })}
          </Col>
        </Row>
      </Container>
    </Fade>
  );
};

export default Skills;
