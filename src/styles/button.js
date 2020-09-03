import styled from "styled-components";
import Touched from "../hoc/Touched";

export const Button = styled.button`
  display: block;
  font: inherit;
  padding: 5px 8px;
  margin: 0 5px;
  cursor: pointer;
  outline: none;
  border-radius: 20px;
`;

const TouchedButton = Touched(Button);

export const ControlButton = styled(TouchedButton)`
  border: 1px solid #aa6817;
  width: 86px;
  color: white;
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
