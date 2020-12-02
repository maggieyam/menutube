import React from 'react';
import { uploadFile } from 'react-s3';
const awsDev = require('../../config/aws_dev');
// import awsProd from '../../config/aws_dev';


const config = {
  bucketName: awsDev.BUCKET_NAME,
  region: 'us-east-1',
  accessKeyId: awsDev.ID,
  secretAccessKey: awsDev.SECRET
}


class CreatePostForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = { title: "" }
    this.changeTitle = this.changeTitle.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.fileLoader = React.createRef();
  }

  
  changeTitle(e){
    e.preventDefault();
    this.setState({title: e.currentTarget.value});
  }

  handleSubmit(e){
    e.preventDefault();
    const video = this.fileLoader.current.files[0]
    uploadFile(video, config).then(
      data => {
        const post = {
          title: this.state.title,
          url: data.location
        }
        this.createPost(post);
      }
    ).catch(err => console.log(err))
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
        ref={this.fileLoader}/>  

        <input type="submit" value="Submit Video" />
      </form>    
    )
  }

}

export default CreatePostForm;

