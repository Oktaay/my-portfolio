import React from "react";
import AboutIMG from "../FontAndImages/images/AboutIMG.png";
import "../StartMAP/StartPage.css";
import { FaGithub, FaLinkedinIn, FaInstagram, FaBehance } from "react-icons/fa";
const StartPage = () => {
  return (
    <section id="StartPage">
      <div className="container">
        <div className="AboutShort">
          <div className="IMGoktay">
            <img src={AboutIMG} alt="" width="400" className="imgok"></img>
          </div>

          <div className="Presentation">
            <h1>
              HEJ! MITT NAMN ÄR
              <br />
              OKTAY ALIYEV
            </h1>

            <p>
              Jag är en kreativ <strong>webbutvecklare</strong> och{" "}
              <strong>grafisk formgivare</strong> från{" "}
              <strong> Stockholm</strong>. Har kvalificerad yrkesexamen inom
              webbutveckling.
            </p>
            <div className="Social">
              <FaGithub size="1.5em" className="git" />
              <FaLinkedinIn size="1.5em" className="linked" />
              <FaInstagram size="1.5em" />
              <FaBehance size="1.5em" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StartPage;
