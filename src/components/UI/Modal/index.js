import React, { Component } from "react";
import { ModalWrapper } from "./styles";
import Backdrop from "../Backdrop/";
import PropTypes from "prop-types";

class Modal extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    // rerender this component olny when prop.show
    //is changed and if props children is changed
    return (
      nextProps.show !== this.props.show ||
      nextProps.children !== this.props.children
    );
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
