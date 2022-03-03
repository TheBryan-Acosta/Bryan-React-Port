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
          <a href="tel:512-202-1802">512-202-1802</a>
        </div>
        <div className="">
          <p>justinhoffman193@gmail.com</p>
        </div>
      </div>

      <div className="col-lg-6 col-md-6 col-sm-12">
        <div className="smicon">
          <LinkedinShareButton
            url={"https://www.linkedin.com/in/justin-hoffman-b409a7171/"}
          >
            <LinkedinIcon className="mx-3" size={46}></LinkedinIcon>
          </LinkedinShareButton>
        </div>
      </div>
    </div>
  );
};

export default Footer;
