import React from 'react';
import SignupForm from '../../components/session/signup_form';
import LoginForm from '../../components/session/login_form';
import './modal.css';

class Modal extends React.Component {

  renderedComponent(modalType){
    return modalType === "signup" ? <SignupForm /> : <LoginForm />
  }

  render() {
  
    const { modalType } = this.props;
  
    if (!modalType) return null;

    return (
      <div className="modal-wrapper" onClick={() => {
        this.props.closeModal()
        this.props.clearSessionErrors()
      }}>
        <div className=" modal-contents " onClick={(e) => e.stopPropagation()}>
          {this.renderedComponent(modalType)}
        </div>
      </div>
    )
  }

}

export default Modal;