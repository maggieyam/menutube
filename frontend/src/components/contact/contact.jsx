import React from "react";
import "./contact.css";

import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Contacts = () => {
  return (
    <div className="contact-pg">
      <h4 className="contact-header">Contact Us</h4>

      <div className="contact-container">
        <div className="contact" style={{ borderColor: "yellow" }}>
          <img
            src="https://media-exp1.licdn.com/dms/image/C4E35AQHL1X2ger4r4w/profile-framedphoto-shrink_200_200/0/1608068205428?e=1608246000&v=beta&t=6joWJLZlx6s4yheTlcjarpMDpQLi_bzKFxY0Hw-vlaI"
            alt="contact-tim"
          />
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
        <div className="contact" style={{ borderColor: "grey" }}>
          <img
            src="https://media-exp1.licdn.com/dms/image/C4E35AQHP1nu2XMBAzg/profile-framedphoto-shrink_200_200/0/1608068538630?e=1608246000&v=beta&t=v_d9qz-DoCA8rRBLFKJCigVWNLi_RqZ_MKbT_TI0n_g"
            alt="contact-tony"
          />
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
          <img
            src="https://media-exp1.licdn.com/dms/image/C4D35AQG3IPUfQbq9-A/profile-framedphoto-shrink_200_200/0/1608094919451?e=1608246000&v=beta&t=LYUs0VB6ZMugulWzm8upZL368njiXDc9AtRpDWBmQG8"
            alt="contact-jared"
          />
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
          <img
            src="https://media-exp1.licdn.com/dms/image/C4E35AQHCTX-L8zJKvA/profile-framedphoto-shrink_200_200/0/1608095077372?e=1608246000&v=beta&t=COZoojcCgnaF9wU2GIRPqD79ZgfButHADWxXq0aP69s"
            alt="contact-maggie"
          />
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
  );
};

export default Contacts;
