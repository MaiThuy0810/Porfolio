import "../../assets/fonts/stylesheet.css";
import styled from "styled-components";
import { device } from "../../styles/media";
import theme from "../../styles/theme";

export const FooterSign = styled.h1`
  font-size: 70px;
  font-family: The Scientist;
  color: ${theme.colors.mainYellow};
  text-align: center;
  padding-top: 150px;
  margin-bottom: 120px;
  font-weight: 500;
  ${device.tablet} {
    font-size: 60px;
  }
  ${device.mobile} {
    font-size: 50px;
    margin-bottom: 100px;
    padding-top: 100px;
  }
`;
export const WrapFooter = styled.footer`
  background: ${theme.colors.blackColor};
`;

export const WrapBottom = styled.div`
  /* background: red; */
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const FootTagA = styled.a`
  text-decoration: none;
`;
export const FootName = styled.p`
  color: ${theme.colors.mainYellow};
  margin: 16px;
  font-size: 16px;
  cursor: pointer;
  transition: 0.5s;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  ${device.tablet} {
    font-size: 13px;
  }
  ${device.mobile} {
    font-size: 10px;
    margin: 10px;
  }
  &:hover {
    color: ${theme.colors.white};
  }
`;
