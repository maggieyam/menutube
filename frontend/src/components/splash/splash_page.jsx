import React from "react";
import dessert from "../../images/cooking.gif";
import "./splash_page.css";
import { connect } from "react-redux";
import { openModal } from "../../actions/modal_actions";
import { logout } from "../../actions/session_actions";
// import ScrollPage from "./parallax";

const mDTP = (dispatch) => ({
  logout: () => dispatch(logout()),
  openModal: (modalType) => dispatch(openModal(modalType)),
});

class SplashPage extends React.Component {
  render() {
    return (
      <div className="splash-pg">
        <div className="splash-welcome">
          <div className="splash-img-bg">
            <img className="splash-img" src={dessert} />
          </div>
          <div className="splash-intro">
            <h1>MenuTube</h1>
            <div className="splash-desc">
              <span className="splash-text">
                Create recipe tutorials and post them.
              </span>

              <span className="splash-text">
                Not sure what to eat or what to make?
              </span>

              <span className="splash-text">
                Check out what others are making!
              </span>
            </div>
            <div
              className="splash-span-signup"
              style={{ backgroundColor: "transparent" }}
            >
              <button
                onClick={() => this.props.openModal("signup")}
                className="splash-signup-btn"
              >
                Join Us
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(null, mDTP)(SplashPage);
