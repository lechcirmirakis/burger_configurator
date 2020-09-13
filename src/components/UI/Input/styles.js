import styled from "styled-components";

export const InputWrapper = styled.div`
  width: 100%;
  padding: 10px;
  box-sizing: border-box;

  .inputElement {
    width: 100%;
    outline: none;
    border: 1px solid #ccc;
    background-color: white;
    font: inherit;
    padding: 6px 10px;

    &:focus {
      outline: none;
      background-color: #efefef;
    }
  }
`;

export const LabelBox = styled.label`
  font-weight: bold;
  display: block;
  margin-bottom: 8px;
`;

export const InputBox = styled.input``;
export const TextareaBox = styled.textarea``;
