import styled from "styled-components";
import { device } from "../../styles/media";
import theme from "../../styles/theme";

export const WrapPhone = styled.div`
  padding: 10px;
  h4 {
    font-size: 25px;
    color: ${theme.colors.mainYellow};
    margin: 10px;
    text-transform: uppercase;

    ${device.tablet} {
      font-size: 20px;
    }
    ${device.mobile} {
      font-size: 15px;
    }
  }
  p {
    font-size: 25px;
    color: ${theme.colors.blackColor};
    white-space: nowrap;
    ${device.tablet} {
      font-size: 20px;
    }
    ${device.mobile} {
      font-size: 13px;
    }
  }
  svg {
    width: 50px;
    height: auto;
    fill: ${theme.colors.mainYellow};
    ${device.mobile} {
      width: 40px;
    }
  }
`;
