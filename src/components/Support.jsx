import React from "react";
import { Button } from "@mui/material";
import Headshake from "react-reveal/HeadShake";
import "../static/styles/components/support.scss";

export default function Support() {
  return (
    <div className="support">
      <div className="support-text box">
        <h3 className="heading_1_alt">Experience great support</h3>
        <p className="lead">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est autem
          qui laboriosam odit tempora ab, doloribus obcaecati iusto quaerat nam.
        </p>
        <Headshake>
          <a className="" href="/">
            <Button className="support_btn">Call now</Button>
          </a>
        </Headshake>
      </div>
      <div className="img_wrap box">
        <img src={require("../static/images/supp.jpg")} alt="" />
      </div>
    </div>
  );
}
