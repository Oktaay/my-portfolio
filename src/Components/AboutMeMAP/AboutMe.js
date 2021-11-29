import React from "react";
import "../AboutMeMAP/AboutMe.css";
import { IoLogoJavascript } from "react-icons/io";
import {
  SiCsharp,
  SiAdobeillustrator,
  SiAdobephotoshop,
  SiAdobeindesign,
  SiContainerd,
  SiAdobelightroom,
  SiAdobexd,
  SiAdobepremierepro,
} from "react-icons/si";
import { FaHtml5, FaCss3Alt, FaBootstrap, FaGithub } from "react-icons/fa";

function AboutMe() {
  return (
    <section className="SecondPage">
      <div className="container-grid-class">
        <div className="ommig">
          <h1>VEM ÄR JAG</h1>
          <p>
            Hej! Oktay Aliyev heter jag, är 28 år gammal uppväxt i Sundsvall och
            bor sedan 10 år tillbaka i Hufvudstaden Stockholm med min sambo Bea.
          </p>

          <p>
            Jag är utbildad webbutvecklare och självlärd grafisk formgivare.
            Webbutveckling har alltid varit en stor passion för mig och det är
            något som jag ständigt vill utvecklas i.
          </p>

          <p>
            I samband med att jag tog examen i webbutveckling började jag att
            jobba i en fitness butik som butikschef. I och med detta började jag
            att frilansade som grafisk designer/illustratör och webbutvecklare
            vid sidan av.
          </p>

          <p>
            Idrott och hälsa är en stor del av mitt liv och har under mer än 25
            års tid utövat kampsport och har bland annat representerat det
            svenska landslaget i karate. Som person är jag social, positiv och
            målmedveten både privat och inom jobb och gillar att umgås med
            vänner.
          </p>
          <p>Bästa hälsningar Oktay </p>
        </div>
        <div className="kompetens1">
          <div className="it">
            <h1 className="title1">KOMPETENSER</h1>
            <FaHtml5 size="4em" className="html-class" />
            <FaCss3Alt size="4em" className="css-class" />
            <FaBootstrap size="4em" className="bs-class" />
            <IoLogoJavascript size="4em" className="js-class" />
            <SiCsharp size="4em" className="csharp-class" />
            <FaGithub size="4em" className="git-class"></FaGithub>
          </div>
        </div>
        <div className="kompetens2">
          <div className="ui">
            <h1 className="title2">UI/Illustrations</h1>
            <SiAdobephotoshop
              size="4em"
              className="ps-class"
            ></SiAdobephotoshop>
            <SiAdobeillustrator
              size="4em"
              className="ai-class"
            ></SiAdobeillustrator>
            <SiAdobexd size="4em" className="xd-class"></SiAdobexd>

            <SiAdobelightroom
              size="4em"
              className="lrc-class"
            ></SiAdobelightroom>
            <SiAdobepremierepro
              size="4em"
              className="pr-class"
            ></SiAdobepremierepro>

            <SiAdobeindesign size="4em" className="in-class"></SiAdobeindesign>
          </div>
        </div>
      </div>
    </section>

    // <div className="container-class">
    //   <div className="grid-container">

    //     {/* -----KOMPETENSER------ */}
    //     <div className="kompetens">
    //
    //     </div>
    //     {/* ------SPRÅK------ */}
    //
    // </div>
  );
}

export default AboutMe;
