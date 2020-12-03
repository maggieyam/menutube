import React from "react";
import { Link } from "react-router-dom";
import gif1 from "../../images/FoodVid_1.gif";
import gif2 from "../../images/FoodVid_2.gif";
import gif3 from "../../images/FoodVid_3.gif";
import "./splash_page.css";

const SplashPage = () => {
  return (
    <div className="splash-page">
      <div className="splash-content"></div>
      <div className="splash-present">
        <div className="gif-container">
          <img className="splash-gifs" src={gif1}></img>
          <img className="splash-gifs" src={gif2}></img>
          <img className="splash-gifs" src={gif3}></img>
        </div>
      </div>
    </div>
  );
};

export default SplashPage;
