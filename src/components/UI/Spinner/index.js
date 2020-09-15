import React from "react";

import gifLoader from "../../../assets/loader.svg";
import { SpinnerBox } from "./styles";

const spinner = () => {
  return (
    <SpinnerBox>
      <img src={gifLoader} alt="loader"></img>
    </SpinnerBox>
  );
};

export default spinner;
