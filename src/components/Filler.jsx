import React from "react";
import { CheckBoxRounded } from "@mui/icons-material";
import "../static/styles/components/convert-airtime.scss";

export default function Filler({
  title,
  subtitle,
  point1,
  point2,
  className = "",
}) {
  return (
    <div className={`convert_cont ${className}`}>
      <div className="content">
        <h3 className="title">{title}</h3>
        <p className="lead subtitle">{subtitle}</p>
        <div className="list">
          <span>
            <CheckBoxRounded className="icon" />
            <p className="lead">{point1}</p>
          </span>

          <span>
            <CheckBoxRounded className="icon" />
            <p className="lead">{point2}</p>
          </span>
        </div>
      </div>
    </div>
  );
}
