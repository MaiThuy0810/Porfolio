// import "../../../../assets/css/style.scss";
import styled from "styled-components";
import { device } from "../../../../styles/media";
import theme from "../../../../styles/theme";

export const BannerWrapper = styled.section`
  position: relative;
  ${device.tablet} {
    padding-top: 50px;
  }
  ${device.mobile} {
    padding-top: 100px;
  }
`;
export const BannerContent = styled.div`
  ${device.tablet} {
    margin-bottom: 150px;
  }
  ${device.mobile} {
    margin-bottom: 100px;
  }

  /* ${device.tablet} {
      margin-top: 10px;
    }
    ${device.mobile} {
      margin-top: 10px;
    } */
`;

export const Hello = styled.div`
  /* font-family: Cormorant SC; */
  margin-bottom: 3rem;
  font-size: 7rem;
  text-transform: capitalize;
  z-index: 1;
  -webkit-text-fill-color: white; /* Will override color (regardless of order) */
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: black;

  ${device.tablet} {
    font-size: 3rem;
    margin-bottom: 2rem;
  }
  ${device.mobile} {
    font-size: 6rem;
    margin-bottom: 1rem;
  }
  ${device.smallMobile} {
    font-size: 5rem;
  }
  &:after {
    content: " ";
    width: 170px;
    height: 4px;
    background-color: ${theme.colors.mainYellow};
    margin: 0px 0px 20px 26px;
    font-weight: bold;
    display: inline-block;
    ${device.mobile} {
      margin: 0px 0px 10px 1px;
      width: 150px;
    }
  }
`;
export const BannerText = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 50px;
  z-index: 1;
  ${device.tablet} {
    padding-top: 30px;
  }
  ${device.mobile} {
    display: initial;
  }
  span {
    font-size: 50px;
    color: black;
    ${device.tablet} {
      font-size: 40px;
    }
    ${device.mobile} {
      font-size: 35px;
    }
  }
  h1 {
    font-size: 100px;
    color: ${theme.colors.mainYellow};
    line-height: 130px;
    z-index: 2;
    margin: 10px;

    ${device.tablet} {
      line-height: 0px;
      margin: 30px;
    }
    ${device.mobile} {
      line-height: 60px;
    }
  }

  h1:nth-of-type(1) {
    /* font-family: Cormorant SC; */
    text-transform: uppercase;
    width: max-content;
    font-size: 170px;
    ${device.tablet} {
      line-height: 80px;
      font-size: 100px;
    }
    ${device.mobile} {
      font-size: 150px;

      margin: 30px 0px 30px 20px;
    }
    ${device.smallMobile} {
      font-size: 120px;

      margin: 30px 0px 30px 20px;
    }
  }
  h1:nth-of-type(2) {
    margin-left: 6rem;
    font-size: 40px;
    text-transform: uppercase;
    font-weight: 500;
    /* margin-bottom: 2em; */
    color: ${theme.colors.greenCl};
    white-space: nowrap;
    ${device.tablet} {
      margin-left: 4rem;
      font-size: 25px;
    }
    ${device.mobile} {
      font-size: 25px;
      margin-left: 6rem;
    }
  }
  h1:nth-of-type(3) {
    margin-left: 6rem;
    color: ${theme.colors.blackColor};
    font-family: tahoma;
    font-size: 3rem;
    font-weight: 100;
    line-height: 1.5;
    text-transform: uppercase;
    white-space: nowrap;
    overflow: hidden;
    position: relative;
    width: 550px;
    margin-bottom: 2em;
    ${device.tablet} {
      margin-left: 40px;
      /* font-size: 1rem; */
      margin-bottom: 40px;
    }
    ${device.mobile} {
      /* margin-left: 10px;
      font-size: 3rem;
      margin-bottom: 1em; */
      display: none;
    }
    span {
      font-size: 40px;
      margin-left: -260px;
      ${device.tablet} {
        font-size: 20px;
        margin-left: -335px;
      }
      ${device.mobile} {
        font-size: 25px;
        margin-left: 0px;
      }
    }

    @keyframes openclose {
      0% {
        top: 0.2rem;
        width: 0;
      }
      5% {
        width: 0;
      }
      15% {
        width: 230px;
      }
      30% {
        top: 0.2rem;
        width: 230px;
      }
      33% {
        top: 0.2rem;
        width: 0;
      }
      35% {
        top: 0.2rem;
        width: 0;
      }
      38% {
        top: -4.5rem;
      }
      48% {
        top: -4.5rem;
        width: 190px;
      }
      62% {
        top: -4.5rem;
        width: 190px;
      }
      66% {
        top: -4.5rem;
        width: 0;
        text-indent: 0;
      }
      71% {
        top: -9rem;
        width: 0;
        text-indent: 5px;
      }
      86% {
        top: -9rem;
        width: 285px;
      }
      95% {
        top: -9rem;
        width: 285px;
      }
      98% {
        top: -9rem;
        width: 0;
        text-indent: 5px;
      }
      100% {
        top: 0;
        width: 0;
        text-indent: 0;
      }
    }
  }
  img {
    /* max-height: 500px;
    width: auto; */
    height: auto;
    display: block;
    max-width: 100%;
  }
`;

export const BannerLeft = styled.div`
  width: 50%;
  ${device.tablet} {
    width: 55%;
  }
  ${device.mobile} {
    width: initial;
  }
`;
export const WrapperImage = styled.div`
  width: 100%;
  /* position: absolute; */
  /* top: 0; */
`;

export const Work = styled.div`
  ${device.tablet} {
    /* font-size: 30px; */
  }
`;

export const Message = styled.div`
  background-color: ${theme.colors.mainYellow};
  color: ${theme.colors.white};
  display: block;
  font-weight: 900;
  overflow: hidden;
  position: absolute;
  padding-left: 0.5rem;
  top: 0.2rem;
  left: 270px;
  animation: openclose 5s ease-in-out infinite;
  ${device.tablet} {
    left: 170px;
  }
  ${device.mobile} {
    left: 140px;
  }
`;
