import React from "react";
import "./contact.css";
import tim from "../../images/tim.jpeg";
import jared from "../../images/jared.png";
import tony from "../../images/tony.jpeg";
import maggie from "../../images/maggie.jpeg";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Contacts = () => {
  return (
    <div>
      <div className="contact-pg">
        <h4 className="contact-header">Contact Us</h4>

        <div className="contact-container">
          <div className="contact" style={{ borderColor: "yellow" }}>
            <img src={tim} alt="contact-tim" />
            <div className="contact-info">
              <label className="contact-label">Tim Bedford</label>
              <p className="contact-position">Team Leader</p>
              <div className="contact-links">
                <a
                  href="https://github.com/tbeddy"
                  className="contact-git"
                  target="_blank"
                >
                  <FontAwesomeIcon icon={faGithub} />
                </a>
                <a
                  href="https://www.linkedin.com/in/timcmbedford/"
                  className="contact-linkedin"
                  target="_blank"
                >
                  <FontAwesomeIcon icon={faLinkedin} />
                </a>
              </div>
            </div>
          </div>
          <br></br>
          <div className="contact" style={{ borderColor: "red" }}>
            <img src={tony} alt="contact-tony" />
            <div className="contact-info">
              <label className="contact-label">Tony Chen</label>
              <p className="contact-position">Flex Developer</p>
              <div className="contact-links">
                <a
                  href="https://github.com/tabemono"
                  className="contact-git"
                  target="_blank"
                >
                  <FontAwesomeIcon icon={faGithub} />
                </a>
                <a
                  href="https://www.linkedin.com/in/tony-chen-830850201/"
                  className="contact-linkedin"
                  target="_blank"
                >
                  <FontAwesomeIcon icon={faLinkedin} />
                </a>
              </div>
            </div>
          </div>
          <div className="contact" style={{ borderColor: "orange" }}>
            <img src={jared} alt="contact-jared" />
            <div className="contact-info">
              <label className="contact-label">Jared GreenBerg</label>
              <p className="contact-position">Head Frontend</p>
              <div className="contact-links">
                <a
                  href="https://github.com/jared-greenberg"
                  className="contact-git"
                  target="_blank"
                >
                  <FontAwesomeIcon icon={faGithub} />
                </a>
                <a
                  href="https://www.linkedin.com/in/jared-greenberg-996a581b4/"
                  className="contact-linkedin"
                  target="_blank"
                >
                  <FontAwesomeIcon icon={faLinkedin} />
                </a>
              </div>
            </div>
          </div>
          <div className="contact" style={{ borderColor: "purple" }}>
            <img src={maggie} alt="contact-maggie" />
            <div className="contact-info">
              <label className="contact-label">Maggie Yan</label>
              <p className="contact-position">Head Backend</p>
              <div className="contact-links">
                <a
                  href="https://github.com/maggieyam/"
                  className="contact-git"
                  target="_blank"
                >
                  <FontAwesomeIcon icon={faGithub} />
                </a>
                <a
                  href="https://www.linkedin.com/in/maggie-yan-0a32056a/"
                  className="contact-linkedin"
                  target="_blank"
                >
                  <FontAwesomeIcon icon={faLinkedin} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
