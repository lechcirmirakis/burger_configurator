import styled from "styled-components";
import { devices } from "../../../styles/mediaQueries";

export const NavigationItemsBox = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  align-items: center;
  height: 100%;
  flex-flow: column;

  @media ${devices.mobileL} {
    flex-flow: row;
  }
`;
