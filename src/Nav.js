import React from "react";
import "./Nav.css";
import GitHub from "./images/github.jpg";
import linkedin from "./images/linkedin.jpg";

const Nav = () => {
  return (
    <nav className="nav">
      <div className="nav__linksContainer">
        <a href="" className="nav__links">
          Acerca de mi
        </a>
        <a href="" className="nav__links">
          Portafolio
        </a>
        <a href="" className="nav__links">
          Contactame
        </a>
      </div>
      <div className="nav__socialMedia">
        <a href="">
          <img src={GitHub} alt="" />
        </a>
        <a href="">
          <img src={linkedin} alt="" />
        </a>
      </div>
    </nav>
  );
};

export default Nav;
