// import "../../../../assets/css/style.scss";
import styled from "styled-components";
import { device } from "../../../../styles/media";
import theme from "../../../../styles/theme";

export const WrapFront = styled.section``;

export const ContentAbout = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 50px 0px;
  ${device.mobile} {
    display: flex;
  }
  ${device.smallMobile} {
    display: flex;
    padding: 0px 0px;
  }
`;
export const ImageAbout = styled.div`
  img {
    transform: perspective(840px) rotateY(-23deg);
    max-height: 720px;
    ${device.tablet} {
      max-height: 530px;
    }
    ${device.mobile} {
      max-height: 1370px;
      width: 100%;
    }
  }
`;

export const WrapTextAbout = styled.div`
  position: relative;
`;

export const Sign = styled.div`
  margin-top: 60px;
  font-size: 70px;
  margin-left: 100px;
  font-family: The Scientist;
  ${device.mobile} {
    font-size: 25px;
    margin-top: 20px;
    margin-bottom: 30px;
  }
`;
export const AboutDes = styled.p`
  /* padding-left: 40px; */
  /* margin-top: 30px; */
  text-align: left;
  letter-spacing: 0.1px;
  line-height: 150%;
  color: ${theme.colors.blackColor};
  font-size: 30px;
  font-weight: 300;
  padding-left: 50px;
  ${device.tablet} {
    font-size: 18px;
  }
  ${device.mobile} {
    font-size: 13px;
    padding-left: 10px;
  }
  span {
    text-transform: capitalize;
    text-align: left;
    font-weight: 800;
    font-size: 20px;
    margin-top: 15px;
    display: block;
    ${device.tablet} {
      font-size: 18px;
    }
  }
`;
export const TetxName = styled.p`
  text-transform: uppercase;
  font-size: 35px;
  font-weight: 500;
  display: flex;
  justify-content: end;
  margin-bottom: 340px;
  ${device.tablet} {
    font-size: 25px;
    margin-bottom: 220px;
  }
  ${device.mobile} {
    font-size: 20px;
    margin-top: 10px;
    margin-bottom: 160px;
  }
  &:after {
    content: "";
    position: absolute;
    width: 2px;
    height: 250px;
    display: block;
    background-color: ${theme.colors.mainYellow};
    top: 70px;
    ${device.tablet} {
      height: 200px;
      top: 40px;
    }
    ${device.mobile} {
      height: 150px;
      top: 30px;
    }
  }
`;
export const ScrollBanner = styled.div`
  .m-scroll {
    display: flex;
    width: 100%;
    height: 600px;
    margin: auto;
    overflow: hidden;
    bottom: -505%;
    position: absolute;
    &__title {
      display: flex;
      top: 0;
      left: 0;
      align-items: center;
      justify-content: flex-start;
      white-space: nowrap;
      transform: scale(2);
      transition: all 1s ease;
      & > div {
        display: flex;
        animation: scrollText 15s infinite linear;
      }
      h1 {
        margin: 0;
        font-size: 50px;
        -webkit-text-fill-color: white;
        -webkit-text-stroke-width: 1px;
        -webkit-text-stroke-color: #00000026;
        transition: all 2s ease;
      }
      a {
        text-decoration: none;
        color: white;
        font-size: 50px;
        -webkit-text-fill-color: white;
        -webkit-text-stroke-width: 1px;
        -webkit-text-stroke-color: #00000026;
      }
    }
  }

  @keyframes scrollText {
    from {
      transform: translateX(0%);
    }
    to {
      transform: translateX(-50%);
    }
  }
`;
