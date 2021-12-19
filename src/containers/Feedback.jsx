import React from "react";
import { Col, Row, Container } from "reactstrap";
import FeedbackCard from "../components/FeedbackCard";
import { feedback } from "../portfolio";

const Feedback = () => {
  return (
    <section className="section section-lg">
      <Container>
        <div className="d-flex p-4">
          <div>
            <div className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-info">
              <i class="fa fa-star"></i>
            </div>
          </div>
          <div className="pl-4">
            <h4 className="display-3 text-info">Recommendations</h4>
          </div>
        </div>
        <Row className="row-grid alig-item-center">
          {feedback?.map((data, i) => {
            return (
              <Col key={i} className="order-lg-1" lg="6">
                <a
                  href={data.link}
                  target="_blank"
                  style={{ color: "inherit" }}
                >
                  <FeedbackCard data={data} />
                </a>
              </Col>
            );
          })}
        </Row>
      </Container>
    </section>
  );
};

export default Feedback;
