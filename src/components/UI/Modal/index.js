import React, { Component } from "react";
import PropTypes from "prop-types";

import Backdrop from "../Backdrop/";

import { ModalWrapper } from "./styles";

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
  show: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]),
  children: PropTypes.node,
  cancelOrderHandler: PropTypes.func,
};

export default Modal;
