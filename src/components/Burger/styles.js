import styled from "styled-components";
import { devices } from "../../styles/mediaQueries";

export const BurgerWrapper = styled.div`
  width: 100%;
  margin: 0 auto;
  height: 250px;
  overfloww: scroll;
  text-align: center;
  font-weight: bold;
  font-size: 1.2rem;

  @media ${devices.laptop} and (min-height: 700px) {
    width: 700px;
    height: 600px;
  }

  @media ${devices.mobileL} and (min-height: 400px) {
    width: 350px;
    height: 300px;
  }

  @media ${devices.mobileL} and (min-height: 401px) {
    width: 450px;
    height: 400px;
  }
`;
