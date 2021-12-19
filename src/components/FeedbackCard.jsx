import React from "react";
import { Fade } from "react-reveal";
import { Card, CardBody } from "reactstrap";
const FeedbackCard = ({ data }) => {
  return (
    <Fade right duration={1500} distance="80px">
      <Card className="card-lift--hover shadow mt-4">
        <CardBody>
          <div className="d-flex px-3">
            <div className="pl-4">
              <h5 className="text-info">{data.name}</h5>
              <p className="description mt-3">{data.feedback}</p>
            </div>
          </div>
        </CardBody>
      </Card>
    </Fade>
  );
};

export default FeedbackCard;
