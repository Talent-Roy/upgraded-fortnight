import React from "react";
import "../static/styles/components/partners.scss";

const Partners = () => {
  return (
    <div className="container partners">
      <div className="container brands_wrap">
        <div className="brand">
          <img src={require("../static/images/apple.png")} alt="" />
        </div>

        <div className="brand">
          <img src={require("../static/images/nike.png")} alt="" />
        </div>

        <div className="brand">
          <img src={require("../static/images/google.png")} alt="" />
        </div>

        <div className="brand">
          <img src={require("../static/images/amazon.png")} alt="" />
        </div>

        <div className="brand">
          <img src={require("../static/images/sephora.png")} alt="" />
        </div>

        <div className="brand">
          <img src={require("../static/images/nike.png")} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Partners;
