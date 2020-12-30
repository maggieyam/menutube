import React from "react";
import dessert from "../../images/cooking.gif";
import "./splash_page.css";

// import ScrollPage from "./parallax";

const SplashPage = () => {
  return (
    <div className="splash-pg">
      <img src={dessert} style={{ width: "20%" }} />
      <h1 className="splash-welcome" style={{ fontSize: "25px" }}>
        Welcome to MenuTube
      </h1>
    </div>
  );
};

export default SplashPage;
