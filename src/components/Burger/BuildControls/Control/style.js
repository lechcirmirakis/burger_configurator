import styled from "styled-components";

export const ControlWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 5px 0;

  .Less {
    background-color: #d39952;
    color: white;
  }

  .More {
    background-color: #8f5e1e;
    color: white;
  }

  .Less:hover,
  .Less:active {
    background-color: #daa972;
    color: white;
  }

  .More:hover,
  .More:active {
    background-color: #99703f;
    color: white;
  }
`;

export const ControlButton = styled.button`
  display: block;
  font: inherit;
  padding: 5px;
  margin: 0 5px;
  width: 80px;
  border: 1px solid #aa6817;
  cursor: pointer;
  outline: none;

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
`;

export const ControlLabel = styled.div`
  padding: 10px;
  font-weight: bold;
  width: 80px;
`;
