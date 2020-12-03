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

    const options =  [{ key: 'angular', text: 'Angular', value: 'angular' },
  { key: 'css', text: 'CSS', value: 'css' },
  { key: 'design', text: 'Graphic Design', value: 'design' },
  { key: 'ember', text: 'Ember', value: 'ember' },
  { key: 'html', text: 'HTML', value: 'html' },
  { key: 'ia', text: 'Information Architecture', value: 'ia' },
  { key: 'javascript', text: 'Javascript', value: 'javascript' },
  { key: 'mech', text: 'Mechanical Engineering', value: 'mech' },
  { key: 'meteor', text: 'Meteor', value: 'meteor' },
  { key: 'node', text: 'NodeJS', value: 'node' },
  { key: 'plumbing', text: 'Plumbing', value: 'plumbing' },
  { key: 'python', text: 'Python', value: 'python' },
  { key: 'rails', text: 'Rails', value: 'rails' },
  { key: 'react', text: 'React', value: 'react' },
  { key: 'repair', text: 'Kitchen Repair', value: 'repair' },
  { key: 'ruby', text: 'Ruby', value: 'ruby' },
  { key: 'ui', text: 'UI Design', value: 'ui' },
  { key: 'ux', text: 'User Experience', value: 'ux' }];


class CreatePostForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = { title: "" }
    this.changeTitle = this.changeTitle.bind(this);
    this.errors = this.errors.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.loaderSpinner = this.loaderSpinner.bind(this);
    this.fileLoader = React.createRef();
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount(){
    this.props.fetchTags();  
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

  handleChange(e, data){
    this.setState({tags: data.value })
  }

  handleSubmit(e){
    e.preventDefault();

    const video = this.fileLoader.current.files[0]
    this.props.loadingOn();

    uploadFile(video, config).then(
      data => {

        const post = {
          title: this.state.title,
          url: data.location
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


  render() {
    debugger
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
          placeholder='Select'
          fluid
          multiple
          search
          selection
          options= {options}
          onChange={this.handleChange}
        />

        <input type="submit" value="Submit Video" />
      </form>    
    )
  }

}

export default CreatePostForm;

