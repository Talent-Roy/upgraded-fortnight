import React from "react";
import "../static/styles/components/hero.scss";
import ButtonContained from "./utils/buttons/ButtonContained";

export default function Hero({ title, subtitle, img }) {
  return (
    <div className="hero_cont">
      <div className="text_cont box">
        <h1 className="heading_1 title">{title}</h1>
        <p className="lead subtitle">{subtitle}</p>
        <ButtonContained ctaLink="/signup" ctaText="start now" />
      </div>
      <div className="img_cont box">
        <img src={img} alt={title} />
      </div>
    </div>
  );
}
