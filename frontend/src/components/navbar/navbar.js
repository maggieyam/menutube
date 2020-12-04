import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

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
        <Link to="/" className="nav-username">Hello, {currentUser.userInfo.username}!</Link>
        <button onClick={() => logout()} className="navbar-btn" id="logout">Log Out</button>
      </div>
    );
  }

  loggedOut() {
    const { openModal } = this.props;

    return (
      <div className="nav-right">
        {/* <img src={blueButton} onClick={() => openModal("signup") } id="btn-blue" />Sign Up */}

        <button onClick={() => openModal("signup") } className="navbar-btn" id="signup">Sign Up</button>
        <button onClick={() => openModal("login")} className="navbar-btn" id="login">Log In</button>
      </div>
    );
  }

  render() {
    const { currentUser } = this.props;

    return (
      <nav className="navbar">
        <h1>MenuTube</h1>
        <div className="nav-left">
          <h1 id="brand">MenuTube</h1>
        </div>

        {currentUser.isAuthenticated ? this.loggedIn() : this.loggedOut()}
      </nav>
    );
  }
}

export default NavBar;
