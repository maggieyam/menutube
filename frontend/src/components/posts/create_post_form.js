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
    this.errors = this.errors.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.fileLoader = React.createRef();
  }

  
  changeTitle(e){
    e.preventDefault();
    this.setState({title: e.currentTarget.value});
  }

  errors(field){
    if (this.props.errors[field]) {
      return <p className="session-error">{this.props.errors[field]}</p>
    }
    return 
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
        this.props.createPost(post);

      }
    ).catch(err => console.log(err))
  }


  render() {
    return (
      <form onSubmit={this.handleSubmit}>
      
      <label htmlFor="post-title">Enter a title:</label>
       <input
        id="post-title" 
        type="text" 
        value={this.state.title}
        onChange={this.changeTitle}/>  
        {this.errors("title")}

        <input 
        type="file" 
        ref={this.fileLoader}/>
        {this.errors("")} 


        <input type="submit" value="Submit Video" />
      </form>    
    )
  }

}

export default CreatePostForm;

