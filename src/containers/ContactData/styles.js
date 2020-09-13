import styled from "styled-components";
import { devices } from "../../styles/mediaQueries";

export const ContactDataWrapper = styled.main`
  margin: 20px auto;
  width: 80%;
  text-align: center;
  box-shadow: 0 2px 3px #ccc;
  padding: 10px;

  @media ${devices.mobileL} {
    width: 500px;
  }

  input {
    display: block;
  }
`;
