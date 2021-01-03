import React from 'react';

class DraggableVideo extends React.Component {

  

  dragStart(e){
    const video = e.target;
    const data = {postId: video.id, formerdate: video.getAttribute("formerdate"), formeridx: video.getAttribute("formeridx")}
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
        formerdate={this.props.date}
        formeridx={this.props.idx}>
          {this.props.contents}
      </figure>
      
    )
  }
}

export default DraggableVideo;