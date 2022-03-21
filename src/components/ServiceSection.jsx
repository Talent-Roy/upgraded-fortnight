import React from "react";
import { Typography } from "@mui/material";
// import { } from "@mui/icons-material";
import "../static/styles/components/service-section.scss";
import Fade from "react-reveal/Fade";
import ButtonOutlined from "./utils/buttons/ButtonOutlined";

const ServiceSection = ({
  title1,
  subtitle1,
  icon1,
  cta1,
  cta1Link,
  title2,
  subtitle2,
  cta2,
  cta2Link,
  icon2,
  title3,
  subtitle3,
  cta3,
  cta3Link,
  icon3,
}) => {
  return (
    <div className="service_section">
      <Fade left duration={1500}>
        <div className="airtime box">
          <div className="text_cont">
            <Typography variant="h3" className="title">
              {title1}
            </Typography>
            <p className="lead">{subtitle1}</p>
            <ButtonOutlined
              className="card_btn"
              ctaLink={cta1Link}
              ctaText={cta1}
            />
          </div>
          <div className="icon_wrap">
            <span className="icon">{icon1}</span>
          </div>
        </div>
      </Fade>

      <Fade bottom duration={1500}>
        <div className="pay box">
          <div className="text_cont">
            <Typography variant="h3" className="title">
              {title2}
            </Typography>
            <p className="lead">{subtitle2}</p>
            <ButtonOutlined
              className="card_btn"
              ctaLink={cta2Link}
              ctaText={cta2}
            />
          </div>
          <div className="icon_wrap">
            <span className="icon">{icon2}</span>
          </div>
        </div>
      </Fade>

      <Fade right duration={1500}>
        <div className="transfer box">
          <div className="text_cont">
            <Typography variant="h3" className="title">
              {title3}
            </Typography>
            <p className="lead">{subtitle3}</p>
            <ButtonOutlined
              className="card_btn"
              ctaLink={cta3Link}
              ctaText={cta3}
            />
          </div>
          <div className="icon_wrap">
            <span className="icon">{icon3}</span>
          </div>
        </div>
      </Fade>
    </div>
  );
};

export default ServiceSection;
