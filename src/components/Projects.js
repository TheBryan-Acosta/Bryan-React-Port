import React from "react";
import MF from "../components/mf.png";
import SKB from "../components/skb.jpg";
import BSE from "../components/bse.jpg";
import CHAR from "../components/character.jpg";

function Projects() {
  return (
    <div id="projects" className="projects row">
      <div className="py-5">
        <div className="">
          <div className="row">
            <div id="img1" className=" col-lg-3 col-md-6 col-sm-12">
              <div className="box">
                <h3>Movie Fusion</h3>
                <img className="img-project" src={MF} alt="mf..."></img>

                <h6>
                  {" "}
                  Modern Web App that fetches information on movies and TV shows
                </h6>
                <a
                  href="https://github.com/ShiromaJh/Movie-Fusion"
                  className="btn-main"
                >
                  Repo
                </a>
              </div>
            </div>
            {/* */}
            <div id="img2" className="col-lg-3 col-md-6 col-sm-12">
              <div className="box">
                <h3>SKB</h3>
                <img className="img-project" src={SKB} alt="skb..."></img>

                <h6> M.E.R.N Stack Kanban constructor</h6>
                <a href="https://github.com/ShiromaJh/SKB" className="btn-main">
                  Repo
                </a>
              </div>
            </div>
            {/* */}
            <div id="img3" className="col-lg-3 col-md-6 col-sm-12">
              <div className="box">
                <h3>Book Search Engine</h3>
                <img className="img-project" src={BSE} alt="bse..."></img>

                <h6>
                  {" "}
                  React.JS app designed for searching and saving your favorite
                  books
                </h6>
                <a
                  href="https://github.com/ShiromaJh/Book-Search-Enginev2.0"
                  className="btn-main"
                >
                  Repo
                </a>
              </div>
            </div>
            <div id="img4" className="col-lg-3 col-md-6 col-sm-12">
              <div className="box">
                <h3>Characterholic</h3>
                <img className="img-project" src={CHAR} alt="bse..."></img>

                <h6>Character creation app for DnD</h6>
                <a
                  href="https://github.com/dylgrn/Chacterholic"
                  className="btn-main"
                >
                  Repo
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
