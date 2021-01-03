import React from "react";
import ReactPlayer from "react-player/file";
import "./feed_video.css";
import { withRouter, Link } from "react-router-dom";
import DraggableVideo from "../calendar/draggablevideo";
import {unsavePost, savePost} from '../../actions/post_actions';
import {connect} from 'react-redux';

class VideoPlayer extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      playing: false,
      muted: true,
    };

    this.vidRef = React.createRef();

    this.jumpToTime = this.jumpToTime.bind(this);
    this.saveVid = this.saveVid.bind(this);
    this.unsaveVid = this.unsaveVid.bind(this);
    this.toggleSave = this.toggleSave.bind(this);
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

  saveVid() {
   const body = {userId: this.props.userId}
   this.props.savePost(this.props._id, body)
  }

  unsaveVid(){
    this.props.unsavePost(this.props._id, this.props.userId);
  }

  toggleSave(){
    this.props.isSaved ? this.unsaveVid() : this.saveVid();
  }

  render() {

    const {isSaved, openCalendar} = this.props;

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
      <div className={`vedio-border ${openCalendar ? "vertical" : ""}`}>
      <div className="dragvideo-wrapper">
        <DraggableVideo id={this.props._id} 
        contents={
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
        }/>
        </div>
        
        <div id="labels">
          
          <Link to={`/show/${this.props._id}`}>
            <h1 id="title">{this.props.title}</h1>
          </Link>
          <p id="username">by {this.props.user ? this.props.user.username : ""}</p>
          <button className={`${isSaved ? "un" : ""}save-btn`} onClick={this.toggleSave}>
            {isSaved ? "Unsave" : "Save"}
          </button>
        </div>
      </div>
    );
  }
}

const mStP = (state, ownProps) => {
  return {
  userId: state.session.userInfo.id,
  isSaved: state.session.userInfo.saved.includes(ownProps._id),
  openCalendar: state.ui.openCalendar
}}

const mDtP = dispatch => ({
  savePost: (postId, body) => dispatch(savePost(postId, body)),
  unsavePost: (postId, userId) => dispatch(unsavePost(postId, userId))
})



export default withRouter(connect(mStP, mDtP)(VideoPlayer));
