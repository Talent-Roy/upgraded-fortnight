import React from "react";
import { Button } from "@mui/material";

import "../static/styles/components/support.scss";

export default function Support() {
  return (
    <div className="support">
      <div className="support-text box">
        <h3 className="">Experience great support</h3>
        <p className="">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est autem
          qui laboriosam odit tempora ab, doloribus obcaecati iusto quaerat nam.
        </p>
        <div className="">
          <Button className="">
            <a className="support_btn" href="/">
              Call now
            </a>
          </Button>
        </div>
      </div>
      <div className="img_wrap box">
        <img src={require("../static/images/supp.jpg")} alt="" />
      </div>
    </div>
  );
}
