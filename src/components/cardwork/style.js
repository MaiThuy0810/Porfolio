import "../../assets/fonts/stylesheet.css";
import styled from "styled-components";
import { device } from "../../styles/media";
import theme from "../../styles/theme";

export const WrapCardWork = styled.div`
  background-color: ${theme.colors.white};
  ${device.tablet} {
    background-color: ${theme.colors.white};
  }
  ${device.mobile} {
    display: initial;
  }
  .work {
    position: sticky;
    top: 0;
    padding-top: calc(var(--index) * var(--card-top-offset));
  }
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* margin-bottom: 90px; */
  /* ${device.tablet} {
    display: initial;
  }
  ${device.mobile} {
    display: initial;
  } */
`;
export const WrapName = styled.div`
  /* position: relative; */
  padding: 0px 80px;
  ${device.tablet} {
    padding: 0px 20px;
  }
  ${device.mobile} {
    padding: 0px 0px;
  }
  a {
    text-decoration: none;
    cursor: pointer;
    color: ${theme.colors.blackColor};
  }
`;
export const WrapImg = styled.div`
  img {
    height: auto;
    max-width: 100%;
  }
`;
export const TitleWork = styled.div`
  color: ${theme.colors.blackColor};

  font-size: 100px;
  font-weight: 400;
  letter-spacing: 25px;
  ${device.tablet} {
    line-height: initial;
    font-size: 40px;
    letter-spacing: 10px;
  }
  ${device.mobile} {
    font-size: 40px;
  }
`;
export const ViewDemo = styled.p`
  text-transform: uppercase;
  cursor: pointer;
  white-space: nowrap;
  font-weight: 700;
  margin-top: 25px;
  ${device.tablet} {
    margin-top: initial;
    margin-bottom: 50px;
  }
  ${device.mobile} {
    /* margin-top: initial;
    margin-bottom: 50px;
    letter-spacing: 3px;
    font-size: 10px; */
  }
  &:after {
    content: " ";
    margin-left: 20px;
    display: inline;
    width: 100px;
    height: 3px;
    background-color: ${theme.colors.mainYellow};
    position: absolute;
    top: 50%;
    transition: 0.5s;
  }
  &:hover::after {
    transition: 0.5s;
    width: 150px;
  }
  &:hover {
    transition: 0.5s;
    color: ${theme.colors.mainYellow};
  }
`;
export const WorkDes = styled.p`
  padding-left: 230px;
  max-width: 800px;
  text-align: start;
  color: ${theme.colors.border};
  ${device.tablet} {
    padding-left: 50px;
  }
  ${device.mobile} {
    padding-left: 0px;
  }
`;
export const WrapView = styled.div`
  position: relative;
  padding-left: 230px;
  ${device.tablet} {
    padding-left: 50px;
  }
  ${device.mobile} {
    padding-left: 0px;
  }
`;
