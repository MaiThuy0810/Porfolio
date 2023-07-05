// import "../../../../assets/css/style.scss";
import styled from "styled-components";
import { device } from "../../styles/media";
import theme from "../../styles/theme";

export const BackTop = styled.div`
  /* background: red; */
  position: fixed;
  bottom: 50px;
  z-index: 2;

  right: 50px;
  ${device.tablet} {
    bottom: 10px;

    right: 10px;
  }
  ${device.mobile} {
    bottom: 10px;

    right: 10px;
  }
  .iconBack {
    width: 70px;
    height: 70px;
    background-color: ${theme.colors.mainYellow};
    position: relative;
    border-radius: 100%;
    cursor: pointer;
    transition: 0.5s;
    ${device.mobile} {
      width: 50px;
      height: 50px;
    }
    ${device.tablet} {
      width: 70px;
      height: 70px;
    }

    svg {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 50px;
      height: auto;
      color: ${theme.colors.white};
      animation: move 1s infinite;
      ${device.mobile} {
        width: 30px;
      }
      ${device.tablet} {
        width: 30px;
      }
    }
    @keyframes move {
      from {
        top: 27px;
      }
    }
  }

  .iconBack:hover {
    background-color: ${theme.colors.greenCl};
    transition: 0.5s;
  }
`;
export const WrapHome = styled.div``;
export const WrapperContact = styled.div`
  position: fixed;
  z-index: 2;
  .phone {
    color: green;
  }
  .address {
    color: ${theme.colors.red};
  }
  .mail {
    color: ${theme.colors.mainYellow};
  }
  bottom: 180px;
  right: 45px;
  ${device.mobile} {
    bottom: 100px;

    right: 0px;
  }
  ${device.tablet} {
    bottom: 100px;

    right: 5px;
  }
`;
export const ItemContact = styled.div`
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  cursor: pointer;
  svg {
    width: 30px;
    height: 30px;
    transition: 0.5s;
  }
  p {
    display: none;
    color: ${theme.colors.mainYellow};
    font-size: 20px;
    ${device.mobile} {
      font-size: 13px;
    }
  }
  &:hover {
    p {
      display: block;
    }
    svg {
      transition: 0.5s;
      width: 35px;
      height: 35px;
    }
  }
`;
export const WrapIcon = styled.div`
  background: #faf3e3;
  padding: 10px;
  border-radius: 100%;
  width: 40px;
  height: 40px;
  position: relative;
  ${device.mobile} {
    width: 30px;
    height: 30px;
  }
`;
export const Icon = styled.div`
  /* background: #faf3e3;
  padding: 10px;
  border-radius: 100%;
  width: 60px;
  height: 60px; */
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
