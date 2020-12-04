import React from "react";
import { Link } from "react-router-dom";
import "./splash_page.css";
import { useSpring, animated } from "react-spring";
import ScrollPage from "./parallax";
import { render } from "react-dom";
import { useRef } from "react";
import clamp from "lodash-es/clamp";
import swap from "lodash-move";
// import { useGesture } from "react-use-gesture";
// import { useSprings, animated, interpolate } from "react-spring";

const SplashPage = () => {
  //   const props = useSpring({ opacity: toggle ? 1 : 0 });
  //   const [props, set, stop] = useSpring(() => ({ opacity: 1 }));
  //   // Update spring with new props
  //   set({ opacity: toggle ? 1 : 0 });
  //   // Stop animation
  //   stop();
  return <ScrollPage />;
};

export default SplashPage;
