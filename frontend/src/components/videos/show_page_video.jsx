import React from "react";
import ReactPlayer from "react-player/file";
import "./show_page_video.css";

export default class VideoPlayer extends React.Component {
  constructor(props) {
    super(props);

    this.vidRef = React.createRef();

    this.jumpToTime = this.jumpToTime.bind(this);
  }

  formatSeconds(secs) {
    let remainingSecs = secs % 60;
    let remainingMins = Math.floor(secs / 60);
    if (remainingSecs < 10) {
      remainingSecs = "0" + remainingSecs;
    }
    return `${remainingMins}:${remainingSecs}`;
  }

  jumpToTime(secs) {
    if (this.vidRef.current) {
      this.vidRef.current.seekTo(secs);
    }
  }

  render() {
    // const timestampList = this.props.timestamps.map((ts, idx) => (
    //   <li key={idx}>
    //     <button onClick={() => this.jumpToTime(ts)}>
    //       {this.formatSeconds(ts)}
    //     </button>
    //   </li>
    // ));
    return (
      <div>
        <div className="show-video-container">
          <ReactPlayer
            ref={this.vidRef}
            url={this.props.url}
            controls
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
        <div className="video-info">
          <div className="timestamps-section">
            <p>Timestamps</p>
            {/* <ul>{timestampList}</ul> */}
          </div>
          <div className="tags-section">
            <p>Tags</p>
          </div>
        </div>
      </div>
    );
  }
}
