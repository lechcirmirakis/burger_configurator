import styled from "styled-components";
import { devices } from "../../../../styles/mediaQueries";

export const NavToggleBox = styled.div`
  width: 40px;
  height: 100%;
  display: flex;
  flex-flow: column;
  justify-content: space-around;
  align-items: center;
  padding: 10px 0;
  box-sizing: border-box;
  cursor: pointer;

  div {
    width: 90%;
    height: 3px;
    background-color: white;
  }

  @media ${devices.mobileL} {
    display: none;
  }
`;
