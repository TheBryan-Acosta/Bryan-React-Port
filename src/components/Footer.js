import React from "react";
import {
	FacebookShareButton,
	FacebookIcon,
	TwitterShareButton,
	TwitterIcon,
	LinkedinShareButton,
	LinkedinIcon,
} from "react-share";

const Footer = () => {
	return (
		<div className="footer row">
			<div id="footer-text" className="col-lg-6 col-md-6 col-sm-12">
				<div className="">
					<p>Austin, Tx</p>
				</div>
				<div className="">
					<a href="tel:512-529-6813">512-529-6813</a>
				</div>
				<div className="">
					<p>bryanacostadelacruz@gmail.com</p>
				</div>
			</div>

			<div className="col-lg-6 col-md-6 col-sm-12">
				<div className="smicon">
					<LinkedinShareButton
						url={"https://www.linkedin.com/in/bryan-acosta-0094b320b/"}
					>
						<LinkedinIcon className="mx-3" size={46}></LinkedinIcon>
					</LinkedinShareButton>
				</div>
			</div>
		</div>
	);
};

export default Footer;
