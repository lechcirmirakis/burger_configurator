import React, { Component } from "react";
import { ModalWrapper } from "./styles";
import Backdrop from "../Backdrop/";
import PropTypes from "prop-types";

class Modal extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.show !== this.props.show;
  }

  render() {
    const { show, children, cancelOrderHandler } = this.props;

    return (
      <>
        <Backdrop show={show} click={cancelOrderHandler} />
        <ModalWrapper show={show}>{children}</ModalWrapper>
      </>
    );
  }
}

Modal.propTypes = {
  show: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  cancelOrderHandler: PropTypes.func.isRequired,
};

export default Modal;
