import React from "react";
import LogoWhite from "../../../../assets/img/png/logo-white.png";
import SocialLinks from "../../SocialLinks";

import "./MyInfo.scss";

export default function MyInfo() {
  return (
    <div className="my-info">
      <img src={LogoWhite} alt="Carlos Tognarell"></img>
      <h4>Pagina Test de desarrollo React</h4>
      <SocialLinks></SocialLinks>
    </div>
  );
}
