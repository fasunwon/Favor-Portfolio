import { Fade } from "react-reveal";
import React from "react";
import { Card, CardBody, Button } from "reactstrap";

const ProjectCard = ({ data }) => {
  return (
    <Fade left duration={1500} distance="80px">
      <Card className="shadow-lg--hover shadow mt-4">
        <CardBody>
          <div className="d-flex px-3">
            <div className="pl-4">
              <h3>{data.name}</h3>
              <p className="description mt-3">{data.desc}</p>
              {data.github ? (
                <Button
                  className="btn-icon"
                  color="github"
                  href={data.github}
                  target="_blank"
                >
                  <span className="btn-inner--icon">
                    <i className="fa fa-github"></i>
                  </span>
                </Button>
              ) : null}
              {data.link ? (
                <Button
                  className="btn-icon"
                  color="success"
                  href={data.link}
                  target="_blank"
                >
                  <span className="nav-link-inner--text ml-1">Live Demo </span>
                  <span className="btn-inner--icon">
                    <i className="fa fa-arrow-right mr-2" />
                  </span>
                </Button>
              ) : null}
            </div>
          </div>
        </CardBody>
      </Card>
    </Fade>
  );
};

export default ProjectCard;
