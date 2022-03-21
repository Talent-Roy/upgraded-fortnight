import React from "react";
import "../static/styles/components/giftcard-sample-hero.scss";

export default function GiftcardSampleHero() {
  return (
    <div className="giftcard_sample_hero">
      <div className="box ">
        <img src={require("../static/images/giftcard.png")} alt="" />
      </div>

      <div className="box sm-none">
        <img src={require("../static/images/giftcard3.png")} alt="" />
      </div>

      <div className="box sm-none">
        <img src={require("../static/images/giftcard2.png")} alt="" />
      </div>
    </div>
  );
}
