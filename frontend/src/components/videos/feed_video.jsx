import React from "react";
import ReactPlayer from "react-player/file";
import "./feed_video.css";
import { withRouter, Link } from "react-router-dom";
class VideoPlayer extends React.Component {
  constructor(props) {
    super(props);
    // ;
    this.state = {
      playing: false,
      muted: true,
      // saved: this.props.saved,
    };

    this.vidRef = React.createRef();

    this.jumpToTime = this.jumpToTime.bind(this);
    this.saveVid = this.saveVid.bind(this);
    this.playVid = this.playVid.bind(this);
    this.pauseVid = this.pauseVid.bind(this);
  }


  // formatSeconds(secs) {
  //   let remainingSecs = secs % 60;
  //   let remainingMins = Math.floor(secs / 60);
  //   if (remainingSecs < 10) {
  //     remainingSecs = "0" + remainingSecs;
  //   }
  //   return `${remainingMins}:${remainingSecs}`;
  // }

  jumpToTime(secs) {
    if (this.vidRef.current) {
      this.vidRef.current.seekTo(secs);
    }
  }

  playVid() {
    this.setState({
      playing: true,
      muted: false,
    });
  }

  pauseVid() {
    this.setState({
      playing: false,
      muted: true,
    });
  }

  saveVid() {}

  unsaveVid() {}

  render() {
    const overlay = this.state.playing ? (
      // <div className="playing-container">
        <div className="playing-overlay">
          
        </div>
      // </div>
    ) : (
      <div className="paused-overlay">     
      </div>
    );

    return (
      <div className="vedio-border">
        <div
          className="video-container"
          onMouseEnter={this.playVid}
          onMouseLeave={this.pauseVid}
        >
        {overlay}
        
        <ReactPlayer
          className="react-player"
          ref={this.vidRef}
          url={this.props.url}
          playing={this.state.playing}
          muted={this.state.muted}
          height={"inherit"}
          width={"inherit"}
          config={{
            file: {
              attributes: {
                controlsList: ["nodownload"],
                disablePictureInPicture: true,
              },
            },
          }}
          />
          
        </div>
        
        <div id="labels">
          
          <Link to={`/show/${this.props._id}`}>
            <h1 id="title">{this.props.title}</h1>
          </Link>
          <button
            className="save-btn"
            // onClick={this.state.saved ? this.unsaveVid : this.saveVid}
          >
            save{/* {this.state.saved ? "u" : "s"} */}
          </button>
          {/* <p id="username">{this.props.user.username}</p> */}
        </div>
      </div>
    );
  }
}

export default withRouter(VideoPlayer);
