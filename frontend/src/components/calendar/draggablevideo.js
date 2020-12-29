import React from 'react';

class DraggableVideo extends React.Component {

  

  dragStart(e){
    const video = e.target;
    const data = {postId: video.id, formerDate: video.getAttribute("formerDate"), formerIdx: video.getAttribute("formerIdx")}
    e.dataTransfer.setData('videoInfo', JSON.stringify(data))

  }

  dragOver(e){
    e.stopPropagation();
  }

  render(){
    return (
      <figure id={this.props.id} 
        draggable={true} 
        onDragStart={this.dragStart} 
        onDragOver={this.dragOver}
        formerDate={this.props.date}
        formerIdx={this.props.idx}>
          {this.props.contents}
      </figure>
      
    )
  }
}

export default DraggableVideo;