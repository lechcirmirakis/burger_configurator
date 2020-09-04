import styled from "styled-components";

export const NavItemBox = styled.li`
  margin: 0;
  display: flex;
  align-items: center;

  a {
    color: #fff;
    text-decoration: none;
    height: 100%;
    padding: 16px 10px;
    border-bottom: 4px solid transparent;
    display: block;
  }

  a:hover,
  a:active,
  a:focus,
  a.active {
    background-color: #8f5c2c;
    border-bottom: 4px solid #40a4c8;
  }
`;
