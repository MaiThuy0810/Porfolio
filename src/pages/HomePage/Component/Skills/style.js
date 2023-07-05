// import "../../../../assets/css/style.scss";
import styled from "styled-components";
import { device } from "../../../../styles/media";
import theme from "../../../../styles/theme";

export const WrapSkill = styled.section`
  background-color: ${theme.colors.blackColor};
`;

export const SkillContent = styled.div`
  text-align: center;

  ${device.tablet} {
  }
  ${device.mobile} {
  }
`;
export const WrapCardSkill = styled.div`
  /* width: 100%; */
  display: flex;
  /* justify-content: space-between; */
  flex-wrap: wrap;
`;
export const WrapCard = styled.div`
  padding-left: 0.7rem;
  padding-right: 0.7rem;
  flex: 0 0 25%;
  font-size: 20px;
  /* padding: 0px 2px; */
  ${device.tablet} {
  }
  ${device.mobile} {
  }

  .hover {
    border: 2px solid ${theme.colors.mainYellow};
    color: ${theme.colors.mainYellow};
    height: 15vw;
    &:after {
      height: 0;
      width: 100%;
      top: 0;
      left: 0;
      background: ${theme.colors.mainYellow};
      z-index: -1;
    }
    &:hover {
      color: whitesmoke;
      &:after {
        height: 100%;
      }
    }
  }
`;
export const Card = styled.div`
  font-family: Arial;
  font-size: 25px;
  text-transform: uppercase;
  /* padding: 18px 50px; */
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 30px;
  transition: 0.4s all cubic-bezier(0.25, 0.46, 0.45, 0.94);
  position: relative;
  z-index: 2;
  &:after {
    content: "";
    position: absolute;
    transition: 0.4s all cubic-bezier(0.25, 0.46, 0.45, 0.94);
  }

  ${device.tablet} {
    font-size: 18px;
  }
  ${device.mobile} {
    font-size: 13px;
    margin-bottom: 10px;
  }
  /* &:hover {
    border: 1px solid ${theme.colors.mainYellow};
    color: ${theme.colors.mainYellow};
    transition: 0.4s;
  } */
`;
