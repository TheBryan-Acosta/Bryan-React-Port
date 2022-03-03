import React from "react";
import author from "../assets/me.jpeg";

const About = () => {
	return (
		<div id="about" className="container-about">
			<div className="row">
				<div className="col-lg-6 col-12 ">
					<div className="photo-wrap mb-5">
						<img className="profile-img" src={author} alt="me..."></img>
					</div>
				</div>
				<div className="col-lg-6 col-xm-12">
					<h1 className="about-header">About Me</h1>
					<p className="about-text">
						I am a Full-Stack Developer with training and experience in
						front-end technologies such as HTML, React.js and Bootstrap, and
						using languages such as SQL with back-end services such as MongoDB,
						Mongoose and MLAB to build web applications. I successfully
						completed the University of Texas-Austin Coding program and have a
						variety of technical and developing skills I can bring to your
						organization.
					</p>
				</div>
			</div>
		</div>
	);
};

export default About;
