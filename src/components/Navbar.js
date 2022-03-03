import React from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-dark">
      <div className="Container">
        {/* <a class="navbar-brand" href="#">
          Navbar
        </a> */}
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item active">
              <Link
                duration={100}
                smooth={true}
                to="about"
                class="nav-link"
                href="#"
              >
                Home <span class="sr-only"></span>
              </Link>
            </li>
            <li class="nav-item">
              <Link
                duration={100}
                smooth={true}
                to="projects"
                class="nav-link"
                href="#"
              >
                Projects
              </Link>
            </li>
            <li class="nav-item">
              <Link
                duration={100}
                smooth={true}
                to="contact"
                class="nav-link"
                href="#"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
