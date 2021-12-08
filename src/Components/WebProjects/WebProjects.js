import React from "react";
import "../WebProjects/WebProjects.css";
import dyren from "../FontAndImages/images/DYREN.jpg";
import group from "../FontAndImages/images/13group.jpg";
import kyndia from "../FontAndImages/images/kyndia.jpg";
import oktayink from "../FontAndImages/images/oktayink.jpg";

const WebProjects = () => {
  const DyrenWeb = () => {
    window.open("http://www.dyrenadvokat.se/");
  };
  return (
    <section>
      <div className="web-grid-container">
        <h1>WEB PROJECTS</h1>
        <div className="Dyren">
          <img src={dyren} alt="" className="dyren-img"></img>
          <div class="knapp">
            <div class="knapp-text" onClick={DyrenWeb}>
              <p>BESÖK</p>
            </div>
          </div>
        </div>
        <div className="Group">
          <img src={group} alt="" className="group-img"></img>
        </div>
        <div className="Kyndia">
          <img src={kyndia} alt="" className="kyndia-img"></img>
        </div>
        <div className="Oktayink">
          <img src={oktayink} alt="" className="oktay-img"></img>
        </div>
      </div>
    </section>
  );
};

export default WebProjects;
