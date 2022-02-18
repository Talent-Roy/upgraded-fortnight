import React from "react";
import "../static/styles/components/page-header.scss";
import { Typography, Button } from "@mui/material";

const PageHeader = ({ backgroundImage }) => (
  <div
    className="page_header_cont"
    style={{ backgroundImage: `url(${backgroundImage})` }}
  >
    <div className="header_content">
      <div className="text_content box">
        <Typography variant="h1" className="title">
          Fast and reliable solutions at your finger tips
        </Typography>
        <p className="lead">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
          magnam nostrum quaerat assumenda culpa iste vitae quam eius inventore
          veniam.
        </p>
        <Button className="hero_btn">get started</Button>
      </div>
      <div className="img_content box">
        <img src={require("../static/images/hero.gif")} alt="" />
      </div>
    </div>
  </div>
);

export default PageHeader;
