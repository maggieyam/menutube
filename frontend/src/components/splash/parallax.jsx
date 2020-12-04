import React from "react";
import ReactDOM from "react-dom";
import gif1 from "../../images/FoodVid_1.gif";
import gif2 from "../../images/FoodVid_2.gif";
import gif3 from "../../images/FoodVid_3.gif";
import { Parallax, ParallaxLayer } from "react-spring/renderprops-addons";
import "./splash_page.css";
import { withRouter } from "react-router-dom";
import dessert from "../../images/cooking.gif";
import dinner from "../../images/cooking2.gif";
import NavBar from "../navbar/navbar_container";

const url = (name, wrap = false) =>
  `${
    wrap ? "url(" : ""
  }https://awv3node-homepage.surge.sh/build/assets/${name}.svg${
    wrap ? ")" : ""
  }`;
const Pink = ({ children }) => (
  <span style={{ color: "#FF6AC1" }}>{children}</span>
);
const Yellow = ({ children }) => (
  <span style={{ color: "#EFF59B" }}>{children}</span>
);
const Lightblue = ({ children }) => (
  <span style={{ color: "#9AEDFE" }}>{children}</span>
);
const Green = ({ children }) => (
  <span style={{ color: "#57EE89" }}>{children}</span>
);
const Blue = ({ children }) => (
  <span style={{ color: "#57C7FF" }}>{children}</span>
);
const Gray = ({ children }) => (
  <span style={{ color: "#909090" }}>{children}</span>
);

class ScrollPage extends React.Component {
  render() {
    return (
      <Parallax ref={(ref) => (this.parallax = ref)} pages={3}>
        <ParallaxLayer
          offset={1}
          speed={1}
          style={{ backgroundColor: "#167e6c" }}
        />
        <ParallaxLayer
          offset={2}
          speed={1}
          style={{ backgroundColor: "#87BCDE" }}
        />

        <ParallaxLayer
          offset={0}
          speed={0}
          factor={3}
          style={{
            backgroundImage: url("star", true),
            backgroundSize: "cover",
          }}
        />

        <ParallaxLayer
          offset={1.3}
          speed={-0.3}
          style={{ pointerEvents: "none", zIndex: "2" }}
        >
          <div className="middle-text">
            <h1>Post Videos</h1>
          </div>
          <div className="gif-container">
            <img
              className="splash-gifs"
              src={gif1}
              style={{ width: "17%", marginLeft: "20%" }}
            />
            <img
              className="splash-gifs"
              src={gif2}
              style={{ width: "17%", marginLeft: "20%" }}
            />
            <img
              className="splash-gifs"
              src={gif3}
              style={{ width: "17%", marginLeft: "20%" }}
            />
          </div>
        </ParallaxLayer>

        <ParallaxLayer offset={1} speed={0.8} style={{ opacity: 0.1 }}>
          <img
            className="bg-gif"
            src="https://i.pinimg.com/originals/3f/2a/12/3f2a12ba15f5d2566553254b4a75f37c.gif"
            style={{ display: "block", width: "20%", marginLeft: "55%" }}
          />
          <img
            className="bg-gif"
            src="https://i.pinimg.com/originals/77/bd/95/77bd9523d3332fd28e3e0baf341a95b8.gif"
            style={{ display: "block", width: "10%", marginLeft: "15%" }}
          />
        </ParallaxLayer>

        <ParallaxLayer offset={1.75} speed={0.5} style={{ opacity: 0.1 }}>
          <img
            className="bg-gif"
            src={dinner}
            style={{ display: "block", width: "20%", marginLeft: "70%" }}
          />
          <img
            className="bg-gif"
            src="https://previews.123rf.com/images/nicknik93759375/nicknik937593751708/nicknik93759375170800110/85603932-meat-icons.jpg"
            style={{ display: "block", width: "20%", marginLeft: "40%" }}
          />
          <img
            className="bg-gif"
            src="https://img.freepik.com/free-vector/meat-icons-set-gastronomic-delicatessen-with-carbonate-sausage-frankfurters_1284-16579.jpg?size=338&ext=jpg"
            style={{ display: "block", width: "20%", marginLeft: "10%" }}
          />
        </ParallaxLayer>

        <ParallaxLayer offset={1} speed={0.2} style={{ opacity: 0.2 }}>
          <h1
            style={{
              display: "block",
              width: "15%",
              marginLeft: "70%",
              fontSize: "80px",
            }}
          >
            Learn Recipes
          </h1>
          <div className="text-box">
            <h2> Ingredients</h2>
          </div>
          <h1
            style={{
              display: "block",
              width: "20%",
              marginLeft: "5%",
              fontSize: "70px",
            }}
          >
            Diets
          </h1>
          <img
            className="bg-gif"
            src="https://i.pinimg.com/originals/6c/71/00/6c71007c4261415d6449648b3aa97954.gif"
            style={{ display: "block", width: "40%", marginBottom: "10%" }}
          ></img>
        </ParallaxLayer>

        <ParallaxLayer offset={1.6} speed={-0.1} style={{ opacity: 0.3 }}>
          {/* <img
            src={url("cloud")}
            style={{ display: "block", width: "20%", marginLeft: "60%" }}
          /> */}
          <h3>Save videos</h3>
          <img
            className="bg-gif"
            src="https://i.pinimg.com/originals/ef/69/cd/ef69cd230963b34100b23f7fdf5c47eb.gif"
            style={{
              display: "block",
              width: "15%",
              marginLeft: "40%",
            }}
          />
          {/* <img
            src={url("cloud")}
            style={{ display: "block", width: "10%", marginLeft: "80%" }}
          /> */}
        </ParallaxLayer>

        <ParallaxLayer offset={2.6} speed={0.4} style={{ opacity: 0.6 }}>
          <div>
            {/* <img
              src="https://i.pinimg.com/originals/d5/64/4d/d5644d150faa5d8b5793b80cd741bf4f.gif"
              style={{ display: "block", width: "20%", marginLeft: "5%" }}
            /> */}
            <img
              src="https://i.pinimg.com/originals/64/8a/7c/648a7ce812bb33c5c01c6766e4c308a6.gif"
              style={{ display: "block", width: "15%", marginLeft: "75%" }}
            />
          </div>
        </ParallaxLayer>

        <ParallaxLayer
          offset={2.5}
          speed={-0.4}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            pointerEvents: "none",
          }}
        >
          {/* <img src={url("earth")} style={{ width: "60%" }} /> */}
        </ParallaxLayer>

        <ParallaxLayer
          offset={2}
          speed={-0.3}
          style={{
            backgroundSize: "80%",
            backgroundPosition: "center",
            // backgroundImage: url("clients", true),
          }}
        />

        <ParallaxLayer
          offset={0}
          speed={0.1}
          onClick={() => this.parallax.scrollTo(1)}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "rgb(244,115,34)",
          }}
        >
          <img src={dessert} style={{ width: "20%" }} />
          <h1> Welcome to MenuTube</h1>
        </ParallaxLayer>

        <ParallaxLayer
          offset={1}
          speed={0.1}
          onClick={() => this.parallax.scrollTo(2)}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {/* <img src={url("bash")} style={{ width: "40%" }} /> */}
        </ParallaxLayer>

        <ParallaxLayer
          offset={2}
          speed={-0}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          onClick={() => this.parallax.scrollTo(0)}
        >
          {/* <img src={url("clients-main")} style={{ width: "40%" }} /> */}
        </ParallaxLayer>
      </Parallax>
    );
  }
}

ReactDOM.render(<ScrollPage />, document.getElementById("root"));

export default withRouter(ScrollPage);
