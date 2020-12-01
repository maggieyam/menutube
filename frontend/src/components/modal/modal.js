import React from 'react';

class Modal extends React.Component {

  renderedComponent(modalType){
    return modalType === "signup" ? <SignUpContainer /> : <LogInContainer />
  }

  render() {

    const { modalType } = this.props;

    <div className="modal-wrapper">
      <div className="modal-contents">
        {this.renderedComponent(modalType)}
      </div>
    </div>
  }

}

export default Modal;