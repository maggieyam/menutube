import React from "react";
import "./footer.css";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
  return (
    <footer className="footer-fixed">
      <div className="footer-wrap">
        <span id="footer-names">Tim Bedford</span>
        <a
          href="https://www.linkedin.com/in/timcmbedford/"
          className="footer-icons"
          target="_blank"
        >
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <a
          href="https://github.com/tbeddy"
          className="footer-icons"
          target="_blank"
        >
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <span id="footer-names">Maggie Yan</span>
        <a
          href="https://www.linkedin.com/in/maggie-yan-0a32056a/"
          className="footer-icons"
          target="_blank"
        >
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <a
          href="https://github.com/maggieyam/"
          className="footer-icons"
          target="_blank"
        >
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <span id="footer-names">Jared Greenberg</span>
        <a
          href="https://www.linkedin.com/in/jared-greenberg-996a581b4/"
          className="footer-icons"
          target="_blank"
        >
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <a
          href="https://github.com/jared-greenberg"
          className="footer-icons"
          target="_blank"
        >
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <span id="footer-names">Tony Chen</span>
        <a
          href="https://www.linkedin.com/in/tony-chen-830850201/"
          className="footer-icons"
          target="_blank"
        >
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <a
          href="https://github.com/tabemono"
          className="footer-icons"
          target="_blank"
        >
          <FontAwesomeIcon icon={faGithub} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
