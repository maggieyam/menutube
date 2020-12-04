import React from 'react';
import './login_form.css';


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

   errors(field){
    if (this.props.errors[field]) {
      return <p className="session-error">{this.props.errors[field]}</p>
    }
    return 
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.loginUser(this.state);
  }

  render() {
    return (
      <div className="login-wrapper">
        <form id="login-form" onSubmit={this.handleSubmit}>
          <h2>Login</h2>
          <div className="username">
            <label htmlFor="login-username">Username</label>
            <input 
                type="text" 
                id="login-username"
                value={this.state.username}
                onChange={this.changeField("username")}
            />
            {this.errors("username")}
          </div>

          <div className="password">
            <label htmlFor="login-password">Password</label>
            <input 
                type="password" 
                id="login-password"
                value={this.state.password}
                onChange={this.changeField("password")}
            />
            {this.errors("password")}
          </div>
          
          <input type="submit" value="Log In"/>
        </form>

      </div>
    )
  }



}

export default LoginForm;