import React from "react";
import LeftImage from "../FontAndImages/images/bild1.jpg";
import MiddleLeftImage from "../FontAndImages/images/bild3.jpg";
import MiddleRightImage from "../FontAndImages/images/bild5.jpg";
import RightImage from "../FontAndImages/images/bild2.jpg";
import MiddleRight from "../FontAndImages/images/bild4.jpg";
import MiddleLeft from "../FontAndImages/images/bild6.jpg";
import Last from "../FontAndImages/images/bild7.jpg";
// _______LOGOS______
import Logo1 from "../FontAndImages/images/logo1.jpg";
import Logo2 from "../FontAndImages/images/logo2.jpg";
import Logo3 from "../FontAndImages/images/logo3.jpg";
import Logo4 from "../FontAndImages/images/logo4.jpg";
import Logo5 from "../FontAndImages/images/logo5.jpg";
import Logo6 from "../FontAndImages/images/logo6.jpg";
import Logo7 from "../FontAndImages/images/logo7.jpg";
import Logo8 from "../FontAndImages/images/logo8.jpg";

import "../Gallery/Gallery.css";

const Gallery = () => {
  return (
    <section id="thirdPage">
      <div className="gallery-Grid-Container">
        <h1>ILLUSTRATIONS</h1>
        <div className="LeftImage">
          <img src={LeftImage} alt="" className="bild1"></img>
          <div class="middle">
            <div class="text">John Doe</div>
          </div>
        </div>
        <div className="MiddleLeftImage">
          <img src={MiddleLeftImage} alt="" className="bild1"></img>
        </div>
        <div className="MiddleRightImage">
          <img src={MiddleRightImage} alt="" className="bild1"></img>
        </div>
        <div className="RightImage">
          <img src={RightImage} alt="" className="bild1"></img>
        </div>
        <div className="MiddleRight">
          <img src={MiddleRight} alt="" className="bild1"></img>
        </div>
        <div className="MiddleLeft">
          <img src={MiddleLeft} alt="" className="bild1"></img>
        </div>
        <div className="Last">
          <img src={Last} alt="" className="bild1"></img>
        </div>

        {/* _______LOGOS______ */}
      </div>
    </section>
  );
};

export default Gallery;
