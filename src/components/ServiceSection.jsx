import React from "react";
import { Typography, Button } from "@mui/material";
import "../static/styles/components/service-section.scss";
import Fade from "react-reveal/Fade";

const ServiceSection = () => {
  return (
    <div className="service_section">
      <Fade left duration={1500}>
        <div className="airtime box">
          <div className="text_cont">
            <Typography variant="h3" className="title">
              top up on the go
            </Typography>
            <p className="lead">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequuntur, culpa.
            </p>
            <Button className="service_btn">learn more</Button>
          </div>
          <div className="img_cont">
            <img src={require("../static/images/hand-sim.png")} alt="" />
          </div>
        </div>
      </Fade>

      <Fade bottom duration={1500}>
        <div className="pay box">
          <div className="text_cont">
            <Typography variant="h3" className="title">
              pay utility bills
            </Typography>
            <p className="lead">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequuntur, culpa.
            </p>
            <Button className="service_btn">learn more</Button>
          </div>
          <div className="img_cont">
            <img src={require("../static/images/pay.png")} alt="" />
          </div>
        </div>
      </Fade>

      <Fade right duration={1500}>
        <div className="transfer box">
          <div className="text_cont">
            <Typography variant="h3" className="title">
              transfer and recieve
            </Typography>
            <p className="lead">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequuntur, culpa.
            </p>
            <Button className="service_btn">learn more</Button>
          </div>
          <div className="img_cont">
            <img src={require("../static/images/wallet.png")} alt="" />
          </div>
        </div>
      </Fade>
    </div>
  );
};

export default ServiceSection;
