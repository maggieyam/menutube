import React from 'react';


class LoginForm extends React.Component {
  
  constructor(props){
    super(props);
    this.state = {
      username: "",
      password: ""
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  changeField(field){
    return e => {
      this.setState({[field]: e.currentTarget.value})
    }
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.loginUser(this.state);
  }

  render() {
    return (
      <div className="login-wrapper">
        <form onSubmit={this.handleSubmit}>

          <label htmlFor="login-username">Username</label>
          <input 
              type="text" 
              id="login-username"
              value={this.state.username}
              onChange={this.changeField("username")}
          />

          <label htmlFor="login-password">Password</label>
          <input 
              type="password" 
              id="login-password"
              value={this.state.password}
              onChange={this.changeField("password")}
          />
          
          <input type="submit" value="Log In"/>
        </form>

      </div>
    )
  }



}

export default LoginForm;