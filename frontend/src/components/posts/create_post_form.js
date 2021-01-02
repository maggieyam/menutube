import React from 'react';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import 'semantic-ui-css/semantic.min.css'
import './create_post_form.css'
import Loader from 'react-loader-spinner';
import { uploadFile } from 'react-s3';
import { Dropdown } from 'semantic-ui-react';
const aws = require('../../config/aws');

const config = {
  bucketName: aws.BUCKET_NAME,
  region: 'us-east-1',
  accessKeyId: aws.ID,
  secretAccessKey: aws.SECRET,
}

class CreatePostForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = { title: "", fileTooLarge: false }
    this.changeTitle = this.changeTitle.bind(this);
    this.errors = this.errors.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.loaderSpinner = this.loaderSpinner.bind(this);
    this.fileLoader = React.createRef();
    this.handleTag = this.handleTag.bind(this);
    this.testVideo = React.createRef();
    this.setupVideo = this.setupVideo.bind(this);
    this.checkVideoDuration = this.checkVideoDuration.bind(this);
  }

  componentDidMount(){
    this.props.fetchTags()
  }

  
  changeTitle(e){
    e.preventDefault();
    this.setState({title: e.currentTarget.value});
  }

  errors(field){
    if (this.props.errors[field]) {
      return <p className="posting-error">{this.props.errors[field]}</p>
    }
    return 
  }

  handleTag(e, data){
    e.stopPropagation();
    const bools = {};
    data.value.map(category => bools[category] = true);
    this.setState({[data.placeholder.toLowerCase()]: bools })
  }

  
  handleSubmit(e){
    e.preventDefault();

    const video = this.fileLoader.current.files[0]
    this.props.loadingOn();
    uploadFile(video, config).then(
      data => {

        const post = {
          title: this.state.title,
          url: data.location,
          nutrition: this.state.nutrition,
          diet: this.state.diet,
          ingredients: this.state.ingredients
        }
        this.props.createPost(post).then(() => {
           this.props.loadingOff();
           this.props.clearPostErrors();
           this.props.history.push('/feed')
        })
      }

    ).catch(err => {
      this.props.loadingOff()
      console.log(err)
    })
  }

  loaderSpinner(){
    if (this.props.loading){
      return (
        <Loader type="Grid" color="#E3E733" height={100} width={100} />          
      )
    }
    return
  }

  optionify(category) {
    const options = Object.keys(category).map(tag => {
      return {key: tag, text: tag[0].toUpperCase() + tag.slice(1), value: tag}
    })
    options.pop();
    return options
  }

  setupVideo(e) {
    if (e.currentTarget.files.length > 0) {
      const url = URL.createObjectURL(e.currentTarget.files[0]);
      this.testVideo.current.setAttribute('src', url);
    }
  }

  checkVideoDuration(e) {
    this.setState({
      fileTooLarge: this.testVideo.current.duration > 1200
    });
  }

  render() {
    if (!this.props.diet) return null;

    const fileSizeError = !this.state.fileTooLarge ? null : (
      <div id="file-size-error">
        <p>Videos can only be 20 minutes or less.</p>
      </div>
    );

    return (
      <div className="create-post-contents">
        <form className="post-form" onSubmit={this.handleSubmit}>
          {this.loaderSpinner()}
        <h1 id="post-form-title">Create a Post!</h1>

        <div className="title-input-div">
        <label htmlFor="post-title">Enter a title:</label>
        <input
          id="post-title" 
          type="text" 
          value={this.state.title}
          onChange={this.changeTitle}/>  
          {this.errors("title")}
        </div>

        <div className="vid-input-div">
            <input 
            id="video-input"
            type="file" 
            ref={this.fileLoader}
            onChange={this.setupVideo}
            accept="video/*"/>
        </div>

        {fileSizeError}

        <video
          id="test-video"
          ref={this.testVideo}
          onCanPlayThrough={this.checkVideoDuration}
        />
        
          <label> Diet/Restrictions: 
            <Dropdown 
              placeholder='Diet'
              fluid
              multiple
              search
              selection
              closeOnChange
              options={this.optionify(this.props.diet)}
              onChange={this.handleTag}
            />
          </label>

          <label> Nutrition: 
          <Dropdown 
            placeholder='Nutrition'
            fluid
            multiple
            search
            selection
            options={this.optionify(this.props.nutrition)}
            onChange={this.handleTag}
          />
          </label>

          <label>Ingredients:
          <Dropdown 
            placeholder='Ingredients'
            fluid
            multiple
            search
            selection
            options={this.optionify(this.props.ingredients)}
            onChange={this.handleTag}
          /> 
          </label>
          <input id="submit-post" type="submit" value="Submit Post"
            disabled={this.state.fileTooLarge}
          />
        </form>    
      </div>
    )
  }

}

export default CreatePostForm;

