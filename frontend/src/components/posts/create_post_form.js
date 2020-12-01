import React from 'react';


class CreatePostForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      title: "",
      videoUrl: "",
      videoFile: null
    }
    this.addVideo = this.addVideo.bind(this);
    this.changeTitle = this.changeTitle.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  addVideo(e){
   const a = setFile(e.target.files[0])
   debugger
  }

  changeTitle(e){
    e.preventDefault();
    this.setState({title: e.currentTarget.value})
  }

  handleSubmit(){
    const postData = {
      title: this.state.title,
      url: this.state.videoUrl
    }
    debugger
    this.props.createPost(postData)
  }


  render() {
    return (
      <form onSubmit={this.handleSubmit}>
       <input 
        type="text" 
        value={this.state.title}
        onChange={this.changeTitle}/>  


        <input 
        type="file" 
        onChange={this.addVideo}/>  

        <input type="submit" value="Submit Video" />
      </form>    
    )
  }

}

export default CreatePostForm;

