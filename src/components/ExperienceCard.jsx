import React, { useState, createRef } from "react";
import {
  Card,
  CardBody,
  CardTitle,
  CardText,
  CardSubtitle,
  CardHeader,
  Col,
} from "reactstrap";
import ColorThief from "colorthief";
import { Fade } from "react-reveal";
const ExperienceCard = ({ data }) => {
  const [colorArrays, setcolorArrays] = useState([]);
  const imgRef = createRef();
  function getColorArray() {
    const colorTheif = new ColorThief();
    setcolorArrays(colorTheif.getColor(imgRef.current));
  }

  function rgb(values) {
    return typeof values === "undefined" ? null : `rgb(${values.join(", ")})`;
  }
  return (
    <Fade left duration={1500} distance="80px">
      <Card className="shadow-lg--hover shadow border-0 text-center rounded ">
        <CardHeader style={{ background: rgb(colorArrays) }}>
          <h3 className="text-white">{data.company}</h3>
        </CardHeader>
        <CardBody className="py-5">
          <img
            ref={imgRef}
            alt="logo"
            className="bg-white rounded-circle p-3 mb-3 img-center img-fluid shadow-lg"
            src={data.companyLogo}
            onLoad={() => getColorArray()}
            style={{ width: "130px" }}
          />
          <CardTitle tag="h5">{data.role}</CardTitle>
          <CardSubtitle>{data.date}</CardSubtitle>
          <CardText className="description my-3 text-left">
            {data.desc}
            <ul>
              {data.descBullets?.map((desc) => (
                <li key={desc}>{desc}</li>
              ))}
            </ul>
          </CardText>
          <div></div>
        </CardBody>
      </Card>
    </Fade>
  );
};

export default ExperienceCard;
