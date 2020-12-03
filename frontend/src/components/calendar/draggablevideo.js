import React from 'react';

class DraggableVideo extends React.Component {

  

  dragStart(e){
    const video = e.target;
    e.dataTransfer.setData('videoId', video.id)

  }

  dragOver(e){
    e.stopPropagation();
  }

  render(){
    return (
      <div id={this.props.id} draggable={true} onDragStart={this.dragStart} onDragOver={this.dragOver}>
        <video controls src="https://menu-tube-dev.s3.amazonaws.com/clock.mov"></video>
      </div>
      
    )
  }
}

export default DraggableVideo;