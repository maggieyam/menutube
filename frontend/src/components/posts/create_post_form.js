import React from 'react';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import 'semantic-ui-css/semantic.min.css'
import Loader from 'react-loader-spinner';
import { uploadFile } from 'react-s3';
import { Dropdown } from 'semantic-ui-react';
const awsDev = require('../../config/aws_dev');
// import awsProd from '../../config/aws_dev'cp;


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
    this.loaderSpinner = this.loaderSpinner.bind(this);
    this.fileLoader = React.createRef();
    this.handleTag = this.handleTag.bind(this);
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
      return <p className="session-error">{this.props.errors[field]}</p>
    }
    return 
  }

  handleTag(e, data){
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
        this.props.createPost(post).then(this.props.loadingOff())
      }

    ).catch(err => {
      this.props.loadingOff()
      console.log(err)
    })
  }

  loaderSpinner(){
    if (this.props.loading){
      return (
        <Loader type="Grid" color="#00BFFF" height={80} width={80} />          
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


  render() {

    if (!this.props.diet) return null;

    return (
      <form onSubmit={this.handleSubmit}>
        {this.loaderSpinner()}
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


        <Dropdown 
          placeholder='Diet'
          fluid
          multiple
          search
          selection
          options={this.optionify(this.props.diet)}
          onChange={this.handleTag}
        />

        <Dropdown 
          placeholder='Nutrition'
          fluid
          multiple
          search
          selection
          options={this.optionify(this.props.nutrition)}
          onChange={this.handleTag}
        />

        <Dropdown 
          placeholder='Ingredients'
          fluid
          multiple
          search
          selection
          options={this.optionify(this.props.ingredients)}
          onChange={this.handleTag}
        /> 

        <input type="submit" value="Submit Video" />
      </form>    
    )
  }

}

export default CreatePostForm;

