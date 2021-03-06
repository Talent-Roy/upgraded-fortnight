import React from "react";
import { Paper, Button } from "@mui/material";
import Zoom from "react-reveal/Zoom";
import "../static/styles/components/app-section.scss";

const AppSection = () => {
  return (
    <div className="app_section">
      <Paper elevation={6} variant="div" className="content_wrap">
        <div className="img_cont box">
          <Zoom>
            <img
              src={require("../static/images/app2.png")}
              alt="download kaapo app"
            />
          </Zoom>
        </div>
        <div className="text_cont box">
          <h1 className="title heading_1">Join us on mobile</h1>
          <p className="lead">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
            consequuntur necessitatibus consectetur non deserunt est magni harum
            dolore nisi fugit!
          </p>
          <div className="btn_box">
            <Button className="get_btn app_store">
              <div className="logo">
                <img
                  src={require("../static/images/Apple-logo.png")}
                  alt="download kappo app on apple store "
                />
              </div>
              <div className="cta">
                <small>Download on the </small>
                <br />
                <b> App store</b>
              </div>
            </Button>
            <Button className="get_btn google_play">
              <div className="logo">
                <img
                  src={require("../static/images/playstore.png")}
                  alt="download kappo app on play store "
                />
              </div>
              <div className="cta">
                <small>Get it on</small>
                <br />
                <b>Google play</b>
              </div>
            </Button>
          </div>
        </div>
      </Paper>
    </div>
  );
};

export default AppSection;
