import styled from "styled-components";
import { devices } from "../../../styles/mediaQueries";

export const CheckoutSummaryWrapper = styled.div`
  text-align: center;
  width: 80%;
  margin: 0 auto;

  @media ${devices.mobileL} {
    width: 500px;
  }
`;

export const ButtonsBox = styled.div`
  displlay: flex;
  justify-content: center;
`;
