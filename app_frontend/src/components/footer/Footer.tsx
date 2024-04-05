import React from "react";
import "../footer/Footer.css";
import { Home } from "@mui/icons-material";
import StackedBarChartIcon from "@mui/icons-material/StackedBarChart";

export default function Footer() {
  return (
    <>
      <div className="footerWrapper">
        <button className="homeButton">
          <Home className="homeIcon" />
          <span className="iconName">ホーム</span>
        </button>
        <button className="recordButton">
          <StackedBarChartIcon className="recordIcon" />
          <span className="iconName">Myレコード</span>
        </button>
      </div>
    </>
  );
}
