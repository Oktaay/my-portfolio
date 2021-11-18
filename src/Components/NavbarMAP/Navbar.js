import React, { useState } from "react";
import "../NavbarMAP/Navbar.css";
import burger from "../FontAndImages/images/hamburger.png";
import "../FontAndImages/fonts/simple.ttf";

const Navbar = () => {
  const [name, setName] = useState("MARIO");

  const handleClick = () => {
    setName("Bea");
  };

  return (
    <>
      <div className="nav-container">
        <nav>
          <input type="checkbox" id="nav-toggle"></input>
          <label for="nav-toggle" class="burger-menu">
            <img src={burger} alt=""></img>
          </label>
          <div class="left-menu">
            <a href="#">Start</a>
            <a href="#">Vem är jag</a>
            <a href="#">CV</a>
            <a href="#">Kontakt</a>
          </div>
          <a href="#" class="logo">
            OKTAYINK
          </a>
        </nav>

        {/* <h2>Hompage</h2>
        <p>{name}</p>
        <button onClick={handleClick}>CLICK ME</button> */}
      </div>
    </>
  );
};

export default Navbar;
