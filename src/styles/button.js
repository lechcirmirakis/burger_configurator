import styled, { keyframes } from "styled-components";
import Touched from "../hoc/Touched";

export const Button = styled.button`
  display: block;
  font: inherit;
  cursor: pointer;
  outline: none;
`;

const TouchedButton = Touched(Button);

export const ControlButton = styled(TouchedButton)`
  border: 1px solid #aa6817;
  width: 86px;
  color: white;
  padding: 5px 8px;
  margin: 0 5px;
  border-radius: 20px;
  background-color: ${props => (props.add ? "#8f5e1e" : "#d39952")};

  &:disabled {
    background-color: #ac9980;
    border: 1px solid #7e7365;
    color: #ccc;
    cursor: default;
  }

  &:disabled:hover {
    background-color: #ac9980;
    color: #ccc;
    cursor: not-allowed;
  }

  &:hover,
  &:active {
    background-color: ${props => (props.add ? "#99703f" : "#daa972")};
  }
`;

const enable = keyframes`
  0% {
    transform: scale(1);
  }
  60% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
`;

export const OrderButton = styled(TouchedButton)`
  background-color: #dad735;
  border: 1px solid #966909;
  color: #966909;
  font-size: 1.2em;
  padding: 10px 20px;
  margin: 20px 0;
  box-shadow: 2px 2px 2px #966909;
  border-radius: 40px;

  &:disabled {
    background-color: #c7c6c6;
    cursor: not-allowed;
    border: 1px solid #ccc;
    color: #888888;
  }

  &:hover,
  &:active {
    background-color: #a0db41;
    border: 1px solid #966909;
    color: #966909;
  }

  &:not(:disabled) {
    animation: ${enable} 0.3s linear;
  }
`;

export const OrderSummaryButton = styled(TouchedButton)`
  background-color: transparent;
  border: none;
  color: white;
  padding: 10px;
  margin: 10px;
  font-weight: bold;
  text-transform: uppercase;
  color: ${props => (props.cancel ? "#944317" : "#5C9210")};

  &:first-of-type {
    margin-left: 0;
    padding-left: 0;
  }
`;
