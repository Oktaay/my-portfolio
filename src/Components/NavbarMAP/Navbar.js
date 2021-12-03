import React, { useState, useEffect } from "react";
import "../NavbarMAP/Navbar.css";
import burger from "../FontAndImages/images/hamburger.png";
import "../FontAndImages/fonts/simple.ttf";
import MyPDF from "../FontAndImages/PDF/OktayCV.pdf";

const Navbar = () => {
  return (
    <header>
      <h1 className="logo">OKTAYINK</h1>
      <input type="checkbox" id="nav-toggle" className="nav-toggle" />
      <nav>
        <ul className="list">
          <li className="items">
            <a href="">Start</a>
          </li>
          <li className="items">
            <a href="">Vem är jag</a>
          </li>
          <li className="items">
            <a href="">project</a>
          </li>
          <li className="items">
            <a href={MyPDF} download="My_CV_OKTAY.pdf">
              cv
            </a>
          </li>
          <li className="items">
            <a href="">Kontakt</a>
          </li>
        </ul>
      </nav>
      <label for="nav-toggle" className="nav-toggle-label">
        <img src={burger} alt=""></img>
      </label>
    </header>
  );
};

export default Navbar;
/**/
