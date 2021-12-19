import React from "react";
import { Card, Badge, CardBody } from "reactstrap";
import { Fade } from "react-reveal";
import { Row } from "reactstrap";
const EducationCard = ({ education }) => {
  return (
    <Fade right duration={1500} distance="80px">
      <Card className="card-lift--hover shadow mt-4">
        <CardBody>
          <div className="d-flex px-3">
            <div className="pl-4">
              <Row>
                <span
                  className="iconify text-info fa-2x"
                  data-icon={education.rep}
                  data-inline="false"
                ></span>
                <h5 className="text-info ml-2">{education.schoolName}</h5>
              </Row>
              <h6>{education.subHeader}</h6>
              <Badge color="info" className="mr-1">
                {education.duration}
              </Badge>
              <p className="description mt-3">{education.description}</p>
              <ul>
                {education.descBullets?.map((desc) => {
                  return <li key={desc}>{desc}</li>;
                })}
              </ul>
            </div>
          </div>
        </CardBody>
      </Card>
    </Fade>
  );
};

export default EducationCard;
