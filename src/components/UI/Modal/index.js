import React from "react";
import { ModalWrapper } from "./styles";
import Backdrop from "../Backdrop/";
import PropTypes from "prop-types";

const modal = ({ show, children, cancelOrderHandler }) => {
  return (
    <>
      <Backdrop show={show} click={cancelOrderHandler} />
      <ModalWrapper show={show}>{children}</ModalWrapper>
    </>
  );
};

modal.propTypes = {
  show: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  cancelOrderHandler: PropTypes.func.isRequired,
};

export default modal;
