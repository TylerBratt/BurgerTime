import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faFacebook,
  faTwitter,
  faInstagram
} from "@fortawesome/free-brands-svg-icons";
import OrderLinks from '../src/components/OrderLinks'

export default function SocialFollow() {
  return (
    <div class="social-container">
      <div>
      <a href="https://www.facebook.com"
         target="_blank"
        className="facebook social">
        <FontAwesomeIcon icon={faFacebook} size="2x" />
      </a>
      <a href="https://www.twitter.com"
         target="_blank"
         className="twitter social">
        <FontAwesomeIcon icon={faTwitter} size="2x" />
      </a>
      <a href="https://www.instagram.com"
        target="_blank"
        className="instagram social">
        <FontAwesomeIcon icon={faInstagram} size="2x" />
      </a>
      </div>
      
      <div>
        <OrderLinks />
      </div>
      
    </div>
  );
}