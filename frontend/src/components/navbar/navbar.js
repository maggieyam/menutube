import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faPlus, faUsers } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.loggedIn = this.loggedIn.bind(this);
    this.calText = this.calText.bind(this);
  }

  calText(){
    return this.props.openCalendar ? "Close" : "Open"
  }

  loggedIn() {
    const { logout, currentUser } = this.props;
    // TO FIX... link will route to show page
    return (
      <>
        <div className="nav-right">
          <h3 className="nav-username">
          Hello, {currentUser.userInfo.username}!
          </h3>
          <div className="right-buttons">
            <Link className="add-post" to="/new_post">
              New Post<FontAwesomeIcon icon={faPlus} className="icon" size="lg"/>
            </Link>
            <button id="cal-checkbox" 
                onClick={() => this.props.toggleCalendar()}
                className={`${this.props.openCalendar ? "other" : ""}`}
            >
              {this.calText()} Calendar
            </button>
            <button onClick={() => logout()} className="navbar-btn" id="logout">
              Logout
            </button>
          </div>
        </div>
      </>
    );
  }

  

  navBar() {
    return(
      <div className="navbar">
        <div className="nav-left">
          <h1 id="brand">
              <Link to="/feed">MenuTube</Link>
          </h1>
          <div class="source-link">
          <a
              href="https://github.com/maggieyam/menutube"
              className="gh-link"
              target="_blank"
            >
              <FontAwesomeIcon icon={faGithub} className="icon github" size="sm"/>
            </a>
            <p>Site Github</p>
          </div>
          <div class="contact-link">
            <Link className="gh-link" to={"/team"} target="_blank">
              <FontAwesomeIcon icon={faUsers} className="icon" size="sm"/>
            </Link>
            <p>The Creators</p>
          </div>
        </div>
        {this.loggedIn()}       
      </div>
    )
    

  }

  render() {
    const { currentUser } = this.props;
    return (
      <>
        {currentUser.isAuthenticated ? this.navBar() : null}
      </>
    );
  }
}

export default NavBar;
