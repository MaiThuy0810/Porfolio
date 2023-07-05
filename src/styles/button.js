import styled, { css } from "styled-components";
import { device } from "./media";

type Size = "large" | "medium" | "small";

interface ButtonStyleProps {
  readonly size?: Size;
  readonly long?: boolean;
}

const ButtonSize: { [key in Size]: number } = {
  large: 44,
  medium: 40,
  small: 32,
};

const Style = css<ButtonStyleProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  min-height: ${({ size = "large" }) => ButtonSize[size]}px;
  padding: ${({ long }) => (long ? "0px 48px" : "0px 24px;")};
  text-align: center;
  outline: 0;
  border-radius: ${({ theme }) => theme.size.radius};
  transition: all 0.3s ease-in-out;
`;

export const ButtonStyle = styled.button`
  ${Style}
`;

export const ButtonPrimary = styled(ButtonStyle)`
  color: #ffffff;
  /* border: 1px solid ${({ theme }) => theme.color.button.primary}; */
  background: ${({ theme }) => theme.color.button.primary};

  :hover {
    /* border: 1px solid ${({ theme }) => theme.color.button.hover}; */
    background: ${({ theme }) => theme.color.button.hover};
  }
  ${device.mobile} {
    width: 100%;
    display: block;
    font-size: 14px;
    padding: 8px 20px;
  }
`;

export const ButtonSecondary = styled(ButtonStyle)`
  border: 1px solid ${({ theme }) => theme.color.button.primary};
  color: ${({ theme }) => theme.color.button.primary};
  background: transparent;

  :hover {
    border: 1px solid ${({ theme }) => theme.color.button.hover};
    background: ${({ theme }) => theme.color.button.hover};
    color: #ffffff;
  }
`;

export const ButtonIcon = styled(ButtonStyle)`
  min-height: min-content;
  padding: 0px;

  svg {
    margin: 0px;
  }

  :focus {
    :after {
      border-radius: 8px;
    }
  }
`;

export const ButtonLinkPrimary = styled.a`
  ${Style}
  color: #ffffff;
  /* border: 1px solid ${({ theme }) => theme.color.button.primary}; */
  background: ${({ theme }) => theme.color.button.primary};
  text-decoration: none;

  :hover {
    /* border: 1px solid ${({ theme }) => theme.color.button.hover}; */
    background: ${({ theme }) => theme.color.button.hover};
  }
  ${device.mobile} {
    padding: 8px 12px;
    font-size: 14px;
  }
`;

export const ButtonLink = styled(ButtonStyle)`
  padding: 0px;
  min-height: auto;
  text-decoration: underline;
  color: ${({ theme }) => theme.color.button.primary};
`;
