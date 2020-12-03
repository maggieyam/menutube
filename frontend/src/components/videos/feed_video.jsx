import React from "react";
import ReactPlayer from "react-player/file";
import "./feed_video.css";

export default class VideoPlayer extends React.Component {
  constructor(props) {
    super(props);

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
      null
      // <div className="playing-overlay">
      //   <button
      //     className="save-btn"
      //     // onClick={this.state.saved ? this.unsaveVid : this.saveVid}
      //   >
      //     save{/* {this.state.saved ? "u" : "s"} */}
      //   </button>
      // </div>
    ) : (
      <div className="paused-overlay">
        <p>{this.props.title}</p>
        <p>{this.props.user}</p>
      </div>
    );

    return (
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
          muted
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
    );
  }
}
