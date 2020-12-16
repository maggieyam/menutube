import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faUsers } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.loggedIn = this.loggedIn.bind(this);
    this.loggedOut = this.loggedOut.bind(this);
  }

  loggedIn() {
    const { logout, currentUser } = this.props;
    // TO FIX... link will route to show page
    return (
      <div className="nav-right">
        <Link to="/posts/saved" className="nav-username">
          Hello, {currentUser.userInfo.username}!
        </Link>
        <Link className="add-post" to="/new_post">
          <i className="fas fa-plus-circle fa-2x"></i>
        </Link>
        <button onClick={() => logout()} className="navbar-btn" id="logout">
          Log Out
        </button>
      </div>
    );
  }

  loggedOut() {
    const { openModal } = this.props;

    return (
      <div className="nav-right">
        {/* <img src={blueButton} onClick={() => openModal("signup") } id="btn-blue" />Sign Up */}

        <button
          onClick={() => openModal("signup")}
          className="navbar-btn"
          id="signup"
        >
          Sign Up
        </button>
        <button
          onClick={() => openModal("login")}
          className="navbar-btn"
          id="login"
        >
          Log In
        </button>
      </div>
    );
  }

  render() {
    const { currentUser } = this.props;

    return (
      <div className="navbar">
        <div className='about'>
          <a
            href="https://github.com/maggieyam/menutube"
            className="gh-link"
            target="_blank"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <Link className="gh-link" to={"/team"} target="_blank">
            <FontAwesomeIcon icon={faUsers} />
          </Link>
        </div>

        <h1 id="brand">
          <Link to="/feed">MenuTube</Link>
        </h1>

        {currentUser.isAuthenticated ? this.loggedIn() : this.loggedOut()}
      </div>
    );
  }
}

export default NavBar;
