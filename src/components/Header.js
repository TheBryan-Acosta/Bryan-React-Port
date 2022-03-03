import React from "react";
import Typed from "react-typed";
import { Link } from "react-scroll";

const Header = () => {
  return (
    <div className="header-wrapper">
      <div className="main-info">
        <h1>Justin Hoffman</h1>
        <Typed
          className="typed-text"
          strings={[
            "Full Stack Developer",
            "Musician",
            "Gamer",
            "Computer Building",
          ]}
          typeSpeed={40}
          backSpeed={75}
          loop
        />
        <Link duration={100} smooth={true} to="contact" class="btn-main" href="#">
          Hire Me
        </Link>
      </div>
    </div>
  );
};

export default Header;
