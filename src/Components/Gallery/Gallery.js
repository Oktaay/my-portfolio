import React from "react";
import LeftImage from "../FontAndImages/images/bild1.jpg";
import MiddleLeftImage from "../FontAndImages/images/bild3.jpg";
import MiddleRightImage from "../FontAndImages/images/bild5.jpg";
import RightImage from "../FontAndImages/images/bild2.jpg";
import MiddleRight from "../FontAndImages/images/bild4.jpg";
import MiddleLeft from "../FontAndImages/images/bild6.jpg";
import Last from "../FontAndImages/images/bild7.jpg";
//icons
import { FaGithub, FaLinkedinIn, FaInstagram, FaBehance } from "react-icons/fa";
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
  const BehanceClick = () => {
    window.open("https://www.behance.net/oktayink");
  };

  const fredrik = () => {
    window.open(
      "https://www.behance.net/gallery/105457217/HEfitness-sledgehammer"
    );
  };
  const bealiten = () => {
    window.open("https://www.behance.net/gallery/126147661/Bea-Malecki");
  };
  const tupac = () => {
    window.open("https://www.behance.net/gallery/105456429/2pac");
  };
  const beayxa = () => {
    window.open("https://www.behance.net/gallery/126147969/Bea-Malecki-UFC");
  };
  const bas = () => {
    window.open(
      "https://www.behance.net/gallery/105435673/BAS-TERAPI-EP%28sold%29"
    );
  };
  const last = () => {
    window.open(
      "https://www.behance.net/gallery/105456819/AB-MAT-PU-HARD-HEFITNESS"
    );
  };
  const indian = () => {
    window.open(
      "https://www.behance.net/gallery/105457977/Nativ-indian-illustration"
    );
  };
  return (
    <section id="thirdPage">
      <div className="gallery-Grid-Container">
        <h1>ILLUSTRATIONS</h1>
        <div className="LeftImage">
          <img src={LeftImage} alt="" className="bild1"></img>
          <div class="middle">
            <div class="text">
              <FaBehance className="BE" size="3em" onClick={fredrik} />
            </div>
          </div>
        </div>
        <div className="MiddleLeftImage">
          <img src={MiddleLeftImage} alt="" className="bild1"></img>
          <div class="middle-bea-liten">
            <div class="text">
              <FaBehance className="BE" size="3em" onClick={bealiten} />
            </div>
          </div>
        </div>
        <div className="MiddleRightImage">
          <img src={MiddleRightImage} alt="" className="bild1"></img>
          <div class="middle-right-tupac">
            <div class="text">
              <FaBehance className="BE" size="3em" onClick={tupac} />
            </div>
          </div>
        </div>
        <div className="RightImage">
          <img src={RightImage} alt="" className="bild1"></img>
          <div class="right-bea-yxa">
            <div class="text">
              <FaBehance className="BE" size="3em" onClick={beayxa} />
            </div>
          </div>
        </div>
        <div className="MiddleRight">
          <img src={MiddleRight} alt="" className="bild1"></img>
          <div class="Middle-Basil">
            <div class="text">
              <FaBehance className="BE" size="3em" onClick={bas} />
            </div>
          </div>
        </div>
        <div className="MiddleLeft">
          <img src={MiddleLeft} alt="" className="bild1"></img>
          <div class="Middle-left-indian">
            <div class="text">
              <FaBehance className="BE" size="3em" onClick={indian} />
            </div>
          </div>
        </div>
        <div className="Last">
          <img src={Last} alt="" className="bild1"></img>
          <div class="Last-fredrik">
            <div class="text">
              <FaBehance className="BE" size="3em" onClick={last} />
            </div>
          </div>
        </div>
        <div className="visit-b">
          <FaBehance className="B" size="1.5em" onClick={BehanceClick} />
          <p>FOR MORE</p>
        </div>

        {/* _______LOGOS______ */}
      </div>
    </section>
  );
};

export default Gallery;
