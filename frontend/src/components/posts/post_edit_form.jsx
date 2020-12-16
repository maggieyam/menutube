import React from 'react';
import { withRouter } from 'react-router-dom';
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

class EditPostForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      title: ""
    }
    this.changeTitle = this.changeTitle.bind(this);
    this.errors = this.errors.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.loaderSpinner = this.loaderSpinner.bind(this);
    this.fileLoader = React.createRef();
    this.handleTag = this.handleTag.bind(this);
  }

  componentDidMount() {
    this.props.fetchTags();
    this.props.fetchPost(this.props.match.params.id).then(({post}) => {
      this.setState({...post})
    });
  }

  changeTitle(e) {
    e.preventDefault();
    this.setState({ title: e.currentTarget.value });
  }

  errors(field) {
    if (this.props.errors[field]) {
      return <p className="posting-error">{this.props.errors[field]}</p>
    }
    return
  }

  handleTag(e, data) {
    const bools = {};
    data.value.map(category => bools[category] = true);
    this.setState({ [data.placeholder.toLowerCase()]: bools })
  }

  handleSubmit(e) {
    e.preventDefault();

    this.props.loadingOn();
    const editedPost = {
      title: this.state.title
    }
    this.props.editPost(this.props.post._id, editedPost).then(() => {
      this.props.loadingOff();
      this.props.clearPostErrors();
      this.props.history.push(`/show/${this.props.post._id}`);
    })
  }

  loaderSpinner() {
    if (this.props.loading) {
      return (
        <Loader type="Grid" color="#ee82ee" height={100} width={100} />
      )
    }
    return
  }

  optionify(category) {
    const options = Object.keys(category).map(tag => {
      return { key: tag, text: tag[0].toUpperCase() + tag.slice(1), value: tag }
    })
    options.pop();
    return options
  }

  render() {
    if (!this.props.diet) return null;
    
    return (
      <form className="post-form" onSubmit={this.handleSubmit}>
        {this.loaderSpinner()}

        <div className="title-input-div">
          <label htmlFor="post-title">New title:</label>
          <input
            id="post-title"
            type="text"
            value={this.state.title}
            onChange={this.changeTitle} />
          {this.errors("title")}
        </div>
        <input id="submit-post" type="submit" value="Apply Changes" />
      </form>
    )
  }

}

export default withRouter(EditPostForm);