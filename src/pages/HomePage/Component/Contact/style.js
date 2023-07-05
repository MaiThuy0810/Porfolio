// import "../../../../assets/css/style.scss";
import styled from "styled-components";
import { device } from "../../../../styles/media";
import theme from "../../../../styles/theme";

export const WrapperContact = styled.section`
  display: none;
  ${device.table} {
    display: none;
  }
`;
export const WrapContact = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  margin-top: 50px;
  padding-bottom: 50px;
  text-align: center;
  ${device.mobile} {
    display: initial;
    padding-top: 100px;
  }
`;
export const WrapBanner = styled.div`
  height: 600px;
  overflow-y: auto;
  width: 100%;
  display: block;
  position: relative;
  background-image: url(/banner.jpg);
  background-repeat: no-repeat;
  background-size: 100%;
`;

export const ContactTitle = styled.h2`
  color: ${theme.colors.mainYellow};
  letter-spacing: 0.5px;
  line-height: 150%;
  font-style: italic;
  text-align: center;
  ${device.tablet} {
    font-size: 35px;
  }
  ${device.mobile} {
    font-size: 25px;
    margin-top: 20px;
  }
`;
