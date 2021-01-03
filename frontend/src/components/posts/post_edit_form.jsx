import React from 'react';
import { withRouter } from 'react-router-dom';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import 'semantic-ui-css/semantic.min.css';
import './create_post_form.css';
import './post_edit_form.css';
import Loader from 'react-loader-spinner';
import { Dropdown } from 'semantic-ui-react';
const aws = require('../../config/aws');

const config = {
  bucketName: aws.BUCKET_NAME,
  region: 'us-east-1',
  accessKeyId: aws.ID,
  secretAccessKey: aws.SECRET,
}

const convertStepTimeToSeconds = step => {
  const { minutes, seconds } = step;
  step["timestamp"] = (parseInt(minutes) * 60) + parseInt(seconds); 
  delete step["minutes"];
  delete step["seconds"];
  return step;
}

const convertStepTimeToMinutesAndSeconds = step => {
  const { timestamp } = step;
  step["minutes"] = Math.floor(timestamp / 60);
  step["seconds"] = timestamp % 60;
  delete step["timestamp"];
  return step;
}

const filterOutFalseTags = tags => {
  if (!tags) return {};
  let newTags = {};
  Object.keys(tags).forEach(tag => {
    // Save the tags with truthy values
    if (!!tags[tag]) newTags[tag] = tags[tag];
  })
  delete newTags["_id"];
  return newTags;
}

class EditPostForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      title: "",
      steps: []
    }
    this.changeTitle = this.changeTitle.bind(this);
    this.errors = this.errors.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.loaderSpinner = this.loaderSpinner.bind(this);
    this.fileLoader = React.createRef();
    this.handleTag = this.handleTag.bind(this);
    this.changeStep = this.changeStep.bind(this);
    this.addStep = this.addStep.bind(this);
    this.removeStep = this.removeStep.bind(this);
  }

  componentDidMount() {
    this.props.fetchTags();
    this.props.fetchPost(this.props.match.params.id).then(({post}) => {
      this.setState({
        title: post.title,
        steps: post.steps.map(step => convertStepTimeToMinutesAndSeconds(step)),
        diet: filterOutFalseTags(post.diet),
        nutrition: filterOutFalseTags(post.nutrition),
        ingredients: filterOutFalseTags(post.ingredients)
      })
    });
  }

  changeTitle(e) {
    e.preventDefault();
    this.setState({ title: e.currentTarget.value });
  }

  changeStep(e, type, idx) {
    let { steps } = this.state;
    steps[idx][type] = e.target.value;
    this.setState({ steps });
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
      title: this.state.title,
      steps: this.state.steps.map(step => convertStepTimeToSeconds(step)),
      nutrition: this.state.nutrition,
      diet: this.state.diet,
      ingredients: this.state.ingredients
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
        <Loader type="Grid" color="#E3E733" height={100} width={100} />
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

  addStep() {
    this.setState({
      steps: this.state.steps.concat([{
        description: "",
        minutes: 0,
        seconds: 0
      }])
    })
  }

  removeStep(e, idx) {
    e.preventDefault();
    let { steps } = this.state;
    steps.splice(idx, 1);
    this.setState({ steps });
  }

  render() {
    if (!this.state.diet) return null;
    
    const { steps } = this.state;
    const stepsList = (
      <div className="steps-input-div">
          {steps.map(({minutes, seconds, description}, idx) => (
              <div key={idx} className="step">
                <input className="step-minutes-input"
                  type="number" max="19" min="0"
                  value={minutes > 9 ? minutes : `0${minutes}`}
                  onChange={e => this.changeStep(e, "minutes", idx)}/>
                <p className="time-hyphen">:</p>
                <input className="step-seconds-input"
                  type="number" max="59" min="0"
                  value={seconds > 9 ? seconds : `0${seconds}`}
                  onChange={e => this.changeStep(e, "seconds", idx)}
                />
                <input className="step-description-input"
                  type="text" maxLength="100" value={description}
                  onChange={e => this.changeStep(e, "description", idx)}
                />
                <button
                  type="button"
                  className={`remove-step-button ${idx % 2 === 0 ? "even" : "odd"}-button`}
                  onClick={e => this.removeStep(e, idx)}
                ><p>Remove</p></button>
              </div>
            )
          )}
          <button id="add-step-button" type="button" onClick={this.addStep}>
            <p>{steps.length === 0 ? "Begin adding time steps" : "Add another step"}</p>
          </button>
      </div>
    )
    
    return (
      <div className="edit-post-contents">
        <form className="post-form" onSubmit={this.handleSubmit}>
          {this.loaderSpinner()}
          <h1 id="post-form-title">{`Make Changes to "${this.props.post.title}" `}</h1>
          <div className="title-input-div">
            <label htmlFor="post-title">Title:</label>
            <input
              id="post-title"
              type="text"
              value={this.state.title}
              onChange={this.changeTitle} />
            {this.errors("title")}
          </div>

          <label> Diet/Restrictions:
            <Dropdown
              placeholder='Diet'
              fluid
              multiple
              search
              selection
              closeOnChange
              options={this.optionify(this.props.diet)}
              value={Object.keys(this.state.diet)}
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
              value={Object.keys(this.state.nutrition)}
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
              value={Object.keys(this.state.ingredients)}
              onChange={this.handleTag}
            />
          </label>

          {stepsList}

          <input id="edit-post" type="submit" value="Apply Changes" />
        </form>
      </div>
    )
  }

}

export default withRouter(EditPostForm);