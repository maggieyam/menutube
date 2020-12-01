import React from 'react';
import SignupFormContainer from '../../components/session/signup_form_container';
import LoginFormContainer from '../../components/session/login_form_container';

class Modal extends React.Component {

  renderedComponent(modalType){
    return modalType === "signup" ? <SignupFormContainer /> : <LoginFormContainer />
  }

  render() {
  
    const { modalType } = this.props;
  
    if (!modalType) return null;

    return (
      <div className="modal-wrapper">
        <div className="modal-contents">
          {this.renderedComponent(modalType)}
        </div>
      </div>
    )
  }

}

export default Modal;