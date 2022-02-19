import React from "react";
import "../static/styles/components/page-header.scss";
import { Button } from "@mui/material";

const PageHeader = ({ backgroundImage }) => (
  <div
    className="page_header_cont"
    style={{ backgroundImage: `url(${backgroundImage})` }}
  >
    <div className="overlay"></div>
    <div className="header_content">
      <div className="text_content box">
        <h1 className="heading_1">
          Fast and reliable solutions at your finger tips
        </h1>
        <p className="lead">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
          magnam nostrum quaerat assumenda culpa iste vitae quam eius inventore
          veniam.
        </p>
        <Button className="hero_btn">get started</Button>
      </div>
      <div className="img_content box">
        <img
          src={require("../static/images/hero.gif")}
          alt="About kaapo, giftcards"
        />
      </div>
    </div>
  </div>
);

export default PageHeader;
