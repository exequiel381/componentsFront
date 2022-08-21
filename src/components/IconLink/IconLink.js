import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import "./IconLink.css";
import { StyleLink } from "../StyledComponents/StyleLink";

import {
  faFacebookF,
  faWhatsapp,
  faTwitter,
  faLinkedin,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

function IconLink(props) {
  if (props.type === "Facebook") {
    return (
      <>
        <div className="Link_Div">
          <Link to={props.to} className="link">
            <FontAwesomeIcon className="i" icon={faFacebookF} />
          </Link>
        </div>
        <StyleLink to={props.to} style={{ textDecoration: "none" }}>
          <span>{props.Text}</span>
        </StyleLink>
      </>
    );
  }

  if (props.type === "WhatsApp") {
    return (
      <>
        <div className="Link_Div_wp">
          <Link to={props.to} className="link_wp">
            <FontAwesomeIcon className="i" icon={faWhatsapp} />
          </Link>
        </div>
        <StyleLink to={props.to} style={{ textDecoration: "none" }}>
          <span>{props.Text}</span>
        </StyleLink>
      </>
    );
  }

  return null;
}

export default IconLink;
