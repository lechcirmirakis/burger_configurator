import React from "react";
import { ModalWrapper } from "./styles";

const modal = props => {
  return <ModalWrapper>{props.children}</ModalWrapper>;
};

export default modal;
