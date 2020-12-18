import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';



class Slot extends React.Component {

  constructor(props){
    super(props);
    this.addVideo = this.addVideo.bind(this);
    this.removeVideo = this.removeVideo.bind(this);
    this.slotRef = React.createRef();
    this.state = { video: false };
  }
  
  addVideo(e){
    e.preventDefault();
    if (this.state.video) return;

    const videoId = e.dataTransfer.getData('videoId');
    const video = document.getElementById(videoId).cloneNode(true);
    
    const [day, num] = this.props.className.split("-");
    // send post to backend

    video.id = video.id+"a";
    video.draggable = false;
    video.style.height = "150px";
    video.style.width = "150px";
    
    e.target.appendChild(video);

    let player = video.querySelector('video');
    player.muted = true;

    video.addEventListener("click", () => {
      this.props.history.push(`/show/${videoId}`);
    })

    this.setState({video: true})
  }

  dragOver(e){
    e.preventDefault()
  }

  removeVideo(e){
    e.preventDefault();
    const slot = this.slotRef.current;
    slot.removeChild(slot.firstChild)
    this.setState({video: false})
  }


  render() {
    return (
      <div className={`slot ${this.props.className}`}
        onDrop={this.addVideo} 
        onDragOver={this.dragOver}
        ref={this.slotRef}>
        {this.videoElement}
      {this.state.video ? <button onClick={this.removeVideo}>{'\u00D7'}</button> : null}
      </div>
    )
  }
}

const mDtP = dispatch => ({
  // submit calendar meal
})

export default withRouter(connect(null, mDtP)(Slot));