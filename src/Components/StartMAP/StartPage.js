import React from "react";
import AboutIMG from "../FontAndImages/images/AboutIMG.png";
import "../StartMAP/StartPage.css";
import { FaGithub, FaLinkedinIn, FaInstagram, FaBehance } from "react-icons/fa";
import MyPDF from "../FontAndImages/PDF/OktayCV.pdf";

const StartPage = () => {
  const GithubClick = () => {
    window.open("https://github.com/Oktaay");
  };
  const LinkedinClick = () => {
    window.open("https://www.linkedin.com/in/ogtayaliyev/");
  };
  const InstagramClick = () => {
    window.open("https://www.instagram.com/oktayink/");
  };
  const BehanceClick = () => {
    window.open("https://www.behance.net/oktayink");
  };
  return (
    <section id="StartPage">
      <div className="AboutShort">
        <div className="IMGoktay">
          <a href={MyPDF} download="My_CV_OKTAY.pdf">
            <img src={AboutIMG} alt="" className="imgok"></img>
          </a>
        </div>

        <div className="Presentation">
          <h1>
            HEJ! MITT NAMN ÄR
            <br />
            OKTAY
          </h1>

          <p>
            Jag är en kreativ <strong>webbutvecklare</strong> och{" "}
            <strong>grafisk formgivare</strong> från <strong> Stockholm</strong>
            . Har kvalificerad yrkesexamen inom webbutveckling.
          </p>
          <div className="Social">
            <FaGithub size="1.5em" className="git" onClick={GithubClick} />

            <FaLinkedinIn
              size="1.5em"
              className="linked"
              onClick={LinkedinClick}
            />

            <FaInstagram
              className="insta"
              size="1.5em"
              onClick={InstagramClick}
            />
            <FaBehance
              className="Behance"
              size="1.5em"
              onClick={BehanceClick}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default StartPage;
