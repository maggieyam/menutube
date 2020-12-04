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
        <Link to="/">{currentUser.userInfo.username}</Link>
        <button onClick={() => logout()}>Log Out</button>
      </div>
    );
  }

  loggedOut() {
    const { openModal } = this.props;

    return (
      <div className="nav-left">
        <div className="nav-right">
          <button onClick={() => openModal("signup")}>Sign Up</button>
          <button onClick={() => openModal("login")}>Log In</button>
        </div>
      </div>
    );
  }

  render() {
    const { currentUser } = this.props;

    return (
      <nav className="navbar">
        <h1>MenuTube</h1>

        {currentUser.isAuthenticated ? this.loggedIn() : this.loggedOut()}
      </nav>
    );
  }
}

export default NavBar;
