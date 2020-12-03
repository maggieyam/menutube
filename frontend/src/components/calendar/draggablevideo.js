import React from 'react';

class DraggableVideo extends React.Component {

  

  dragStart(e){
    const video = e.target;
    
    e.dataTransfer.setData('videoId', video.id)
    debugger
  }

  dragOver(e){
    e.stopPropagation();
  }

  render(){
    return (
      <div id={this.props.id} draggable={true} onDragStart={this.dragStart} onDragOver={this.dragOver}>
        {this.props.contents}
      </div>
      
    )
  }
}

export default DraggableVideo;