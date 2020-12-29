import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import ReactPlayer from "react-player/file";
import DraggableVideo from "./draggablevideo";
import { addCalVideo, deleteCalVideo } from '../../actions/calendar_actions';
import { fetchPost } from '../../actions/post_actions';



class Slot extends React.Component {

  constructor(props){
    super(props);
    this.addVideo = this.addVideo.bind(this);
    this.removeVideo = this.removeVideo.bind(this);
    this.slotRef = React.createRef();
    this.state = { video: !!this.props.postId};
    this.storedVideo = this.storedVideo.bind(this);
  }

  componentDidMount(){
    if (this.props.postId) {
      this.props.fetchPost(this.props.postId);
    }
  }

  

  storedVideo() {

         return (
         <ReactPlayer
          className="react-player"
          url={this.props.post.url}
          playing={true}
          muted={true}
          height={"inherit"}
          width={"inherit"}
          style={{cursor: 'pointer'}}
          onClick={() => this.props.history.push(`/show/${this.props.postId}`)}
          config={{
            file: {
              attributes: {
                controlsList: ["nodownload"],
                disablePictureInPicture: true,
              },
            },
          }}
          />)
      
  }


  
  addVideo(e){
    e.preventDefault();
    if (this.props.post) return;

    const videoId = e.dataTransfer.getData('videoId');
    // const video = document.getElementById(videoId).cloneNode(true);
    
    const {date, idx} = this.props;
    let body = {
      date,
      idx: parseInt(idx),
      postId: videoId
    }

    this.props.addCalVideo(this.props.calId, body);
    // send post to backend

    // video.id = video.id+"a";
    // video.draggable = false;
    // video.style.height = "150px";
    // video.style.width = "150px";
    
    // e.target.appendChild(video);

    // let player = video.querySelector('video');
    // player.muted = true;

    // video.addEventListener("click", () => {
    //   this.props.history.push(`/show/${videoId}`);
    // })

    // this.setState({video: true})
  }

  dragOver(e){
    e.preventDefault()
  }

  removeVideo(e){
    e.preventDefault();
    // const slot = this.slotRef.current;
    // slot.removeChild(slot.firstChild);
    let {date, idx} = this.props;
    let body = {
      date,
      idx: parseInt(idx),
    }
    this.props.deleteCalVideo(this.props.calId, body);
    // this.setState({video: false})
  }


  render() {
    return (
      <div className={`slot ${this.props.className}`}
        onDrop={this.addVideo} 
        onDragOver={this.dragOver}
        ref={this.slotRef}>
        {(this.props.post) ? this.storedVideo() : null}
      {this.props.post ? <button onClick={this.removeVideo}>{'\u00D7'}</button> : null}
      </div>
    )
  }
}

const mStP = (state, ownProps) => {
  let [date, idx] = ownProps.className.split("-");
  let postId = state.entities.calendar[date][idx];
  return {
    date,
    idx,
    postId,
    post: state.entities.posts[postId]
  }
}

const mDtP = dispatch => ({
  addCalVideo: (calId, body) => dispatch(addCalVideo(calId, body)),
  deleteCalVideo: (calId, body) => dispatch(deleteCalVideo(calId, body)),
  fetchPost: postId => dispatch(fetchPost(postId))
})

export default withRouter(connect(mStP, mDtP)(Slot));