import React from "react";
import { ReactComponent as YoutubeIcon } from "../../../assets/img/svg/youtube.svg";
import { ReactComponent as TwitterIcon } from "../../../assets/img/svg/twitter.svg";
import { ReactComponent as FacebookIcon } from "../../../assets/img/svg/facebook.svg";
import { ReactComponent as LinkedIcon } from "../../../assets/img/svg/linkedin.svg";

import "./SocialLinks.scss";
import { Link } from "react-router-dom";

export default function SocialLinks() {
  return (
    <div className="social-links">
      <a href="https://www.youtube.com" className="youtube" target="_blank">
        <YoutubeIcon></YoutubeIcon>
      </a>
      <a href="https://www.twitter.com" className="twitter" target="_blank">
        <TwitterIcon></TwitterIcon>
      </a>
      <a href="https://www.facebook.com" className="facebook" target="_blank">
        <FacebookIcon></FacebookIcon>
      </a>
      <a href="https://www.linkedin.com" className="linkedin" target="_blank">
        <LinkedIcon></LinkedIcon>
      </a>
    </div>
  );
}
