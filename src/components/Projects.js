import React from "react";
import Proj1 from "../assets/threewasll.jpg";
import Proj2 from "../assets/proj2.png";
import Proj3 from "../assets/proj3.png";

function Projects() {
	return (
		<div id="projects" className="projects row">
			<div className="py-5">
				<div className="">
					<div className="row">
						<div id="img1" className=" col-lg-3 col-md-6 col-sm-12">
							<div className="box">
								<h3>PokeParent</h3>
								<img className="img-project" src={Proj1} alt="mf..."></img>

								<h6> Select your pokemon!</h6>
								<a
									href="https://github.com/hankhint/pokeparent"
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
								<img className="img-project" src={Proj2} alt="skb..."></img>

								<h6>Crypttok</h6>
								<a
									href="https://github.com/liuyfab/Project2-EventSurvey"
									className="btn-main"
								>
									Repo
								</a>
							</div>
						</div>
						{/* */}
						<div id="img3" className="col-lg-3 col-md-6 col-sm-12">
							<div className="box">
								<h3>Marvelous</h3>
								<img className="img-project" src={Proj3} alt="bse..."></img>

								<h6>
									{" "}
									React.JS app designed for searching across the marvel api,
									with featured heros every week.
								</h6>
								<a
									href="https://github.com/taylorkeltgen/marvelous"
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
