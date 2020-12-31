import React from "react";
import dessert from "../../images/cooking.gif";
import "./splash_page.css";

// import ScrollPage from "./parallax";

const SplashPage = () => {
  return (
    <div className="splash-pg">
      <img className="splash-img" src={dessert} style={{ width: "40%" }} />
      <span className="splash-welcome" style={{ fontSize: "35px" }}>
        Welcome to MenuTube
      </span>
      {/* <div>
        <footer>
          Create recipe tutorials and post them.
        </footer>
      </div> */}
    </div>
  );
};

export default SplashPage;
