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
        <h1 className="nav-username">
          Hello, {currentUser.userInfo.username}!
        </h1>
        <div className="nav-right">
          <a
            href="https://github.com/maggieyam/menutube"
            className="gh-link"
            target="_blank"
          >
            <FontAwesomeIcon icon={faGithub} className="icon github" size="sm"/>
          </a>
          <Link className="gh-link" to={"/team"} target="_blank">
            <FontAwesomeIcon icon={faUsers} className="icon" size="sm"/>
          </Link>
          <Link className="add-post" to="/new_post">
            {/* <i className="fas fa-plus-circle fa-2x" ></i> */}
            <FontAwesomeIcon icon={faPlus} className="icon" size="lg"/>
          </Link>
          <button id="cal-checkbox" 
              onClick={() => this.props.toggleCalendar()}
              className={`${this.props.openCalendar ? "other" : ""}`}
          >
            {this.calText()} Calendar
          </button>
          <button onClick={() => logout()} className="navbar-btn" id="logout">
            LogOut
          </button>
        </div>
      </>
    );
  }

  // loggedOut() {
  //   const { openModal } = this.props;

  //   return (
  //     <div className="nav-right">
  //       {/* <img src={blueButton} onClick={() => openModal("signup") } id="btn-blue" />Sign Up */}

  //       <button
  //         onClick={() => openModal("signup")}
  //         className="navbar-btn"
  //         id="signup"
  //       >
  //         Sign Up
  //       </button>
  //       <button
  //         onClick={() => openModal("login")}
  //         className="navbar-btn"
  //         id="login"
  //       >
  //         Log In
  //       </button>
  //     </div>
  //   );
  // }

  navBar() {
    return(
      <div className="navbar">
        <h1 id="brand">
            <Link to="/feed">MenuTube</Link>
          </h1>
        {/* <div className='about'> */}
        {this.loggedIn()}
        
        </div>
        // </div>
    )
    

  }

  render() {
    const { currentUser } = this.props;

    return (
      // <div className="navbar">
      //   <h1 id="brand">
      //       <Link to="/feed">MenuTube</Link>
      //     </h1>
      //   <div className='about'>
          
      //   <a
      //       href="https://github.com/maggieyam/menutube"
      //       className="gh-link"
      //       target="_blank"
      //     >
      //       <FontAwesomeIcon icon={faGithub} />
      //     </a>
      //     <Link className="gh-link" to={"/team"} target="_blank">
      //       <FontAwesomeIcon icon={faUsers} />
      //     </Link>
      //   </div>

        <>
          {currentUser.isAuthenticated ? this.navBar() : null}
        </>

      // </div>
    );
  }
}

export default NavBar;
