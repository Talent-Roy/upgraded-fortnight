import React from "react";
import {
  HowToRegOutlined,
  HubOutlined,
  HourglassBottomOutlined,
} from "@mui/icons-material";
import "../static/styles/components/airtime-data.scss";

export default function Filler() {
  return (
    <div className="airtime_data_cont">
      <h3 className="heading_2 airtime_data_title">
        Purchase preferred data bundle of choice in Easy Steps.
      </h3>
      <div className="content_cont">
        <div className="box">
          <HowToRegOutlined className="icon" />
          <div className="content">
            <h4 className="title">Sign in</h4>
            <p className="lead">
              Begin by creating a new Kaapo account or logging in into am
              existing account
            </p>
          </div>
        </div>

        <div className="box">
          <HubOutlined className="icon" />
          <div className="content">
            <h4 className="title">View Rates</h4>
            <p className="lead">
              Select data-bundle/airtime to purchase and choose your
              network/amount from the dropdown menu.
            </p>
          </div>
        </div>

        <div className="box">
          <HourglassBottomOutlined className="icon" />
          <div className="content">
            <h4 className="title">Purchase</h4>
            <p className="lead">
              Purchase your data-bundle/airtime and get debited from your
              account Naira wallet.
            </p>
          </div>
        </div>
      </div>
      <button className="btn_main airtime_btn">get started</button>
    </div>
  );
}
