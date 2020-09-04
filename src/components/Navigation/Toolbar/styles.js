import styled from "styled-components";
import { devices } from "../../../styles/mediaQueries";

export const ToolbarWrapper = styled.header`
  height: 56px;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background-color: #703b09;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  z-index: 90;
`;

export const NavigationWrapper = styled.nav`
  height: 100%;
`;
