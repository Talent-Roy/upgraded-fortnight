import React from "react";
import "../static/styles/components/partners.scss";

const Partners = () => {
  return (
    <div className="container partners">
      <div className="container brands_wrap">
        <div className="brand">
          <img src={require("../static/images/xbox.png")} alt="" />
        </div>

        <div className="brand">
          <img src={require("../static/images/amazon-h.png")} alt="" />
        </div>

        <div className="brand">
          <img src={require("../static/images/paypa.png")} alt="" />
        </div>

        <div className="brand">
          <img src={require("../static/images/niks.png")} alt="" />
        </div>

        <div className="brand">
          <img src={require("../static/images/xbox.png")} alt="" />
        </div>

        <div className="brand">
          <img src={require("../static/images/paypa.png")} alt="" />
        </div>
        <div className="brand">
          <img src={require("../static/images/niks.png")} alt="" />
        </div>

        <div className="brand">
          <img src={require("../static/images/amazon-h.png")} alt="" />
        </div>

        <div className="brand">
          <img src={require("../static/images/xbox.png")} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Partners;
