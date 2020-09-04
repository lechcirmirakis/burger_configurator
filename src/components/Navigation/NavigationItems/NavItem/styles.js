import styled from "styled-components";
import { devices } from "../../../../styles/mediaQueries";

export const NavItemBox = styled.li`
  margin: 10px 0;
  width: 100%;
  display: block;

  a {
    color: #8F5C2C;
    text-decoration: none;
    width: 100%;
    display: block;
  }

  a:hover,
  a:active,
  a:focus,
  a.active {
    color: #40a4c8;
  }

  @media ${devices.mobileL} {
    margin: 0;
    display: flex;
    width: auto;
    align-items: center;

    a {
      color: #fff;
      height: 100%;
      padding: 16px 10px;
      border-bottom: 4px solid transparent;
    }

    a:hover,
    a:active,
    a:focus,
    a.active {
      background-color: #8f5c2c;
      border-bottom: 4px solid #40a4c8;
      color: #fff;
    }
  }
`;
