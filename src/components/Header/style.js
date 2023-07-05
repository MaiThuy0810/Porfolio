// @import "../../assets/css/style.scss";
import styled from "styled-components";
import "../../assets/fonts/stylesheet.css";
import { device } from "../../styles/media";
import theme from "../../styles/theme";

export const WrapperHeader = styled.header`
  position: fixed;
  color: ${theme.colors.mainYellow};
  top: 0;
  left: 0;
  width: 100%;
  height: 100px;
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${device.tablet} {
    height: 80px;
  }
  ${device.mobile} {
    height: 60px;
  }
  &.active {
    background-color: ${theme.colors.blackColor};

    transition: 0.4s;
    opacity: initial;

    .selected {
      color: ${theme.colors.white};
    }
    span {
      &:hover {
        color: ${theme.colors.white};
      }
      &:after {
        display: block;
        content: "";

        border-bottom: solid 3px ${theme.colors.white};
        transform: scaleX(0);
        transition: transform 250ms ease-in-out;
      }
      &:hover:after {
        transform: scaleX(1);
      }
    }
  }
  &#mobile {
    ${device.desktop} {
    }
    ${device.tablet} {
    }
    ${device.mobile} {
      background-color: ${theme.colors.blackColor};
    }
  }
`;
export const ContentHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Logo = styled.div`
  font-size: 20px;
  font-weight: 700;
  cursor: pointer;
  text-transform: uppercase;
  white-space: nowrap;
  ${device.tablet} {
    font-size: 15px;
  }
  ${device.mobile} {
    font-size: 13px;
  }
`;
export const MenuWrapper = styled.div`
  display: flex;
  text-transform: uppercase;
  ${device.mobile} {
    display: none;
  }
  .selected {
    color: ${theme.colors.greenCl};
  }
`;
export const WrapTagA = styled.div`
  margin-left: 80px;
  cursor: pointer;
  letter-spacing: 1.5px;
  transition: 0.5s;
  font-weight: 600;
  ${device.tablet} {
    margin-left: 30px;
  }
  ${device.mobile} {
  }
  span {
    font-size: 15px;
    &:hover {
      color: ${theme.colors.greenCl};
    }
    &:after {
      display: block;
      content: "";

      border-bottom: solid 3px ${theme.colors.greenCl};
      transform: scaleX(0);
      transition: transform 250ms ease-in-out;
    }
    &:hover:after {
      transform: scaleX(1);
    }
  }
`;
export const Span = styled.span`
  width: 100px;
  background-color: red;
  height: 10px;
  transition: 0.5s;
`;
