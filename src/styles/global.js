import { theme } from "./theme";
import styled, { createGlobalStyle } from "styled-components";
import { device } from "./media";

export const Container = styled.div`
  margin-left: auto;
  margin-right: auto;
  /* width: 100%; */
  padding: 0 30px;

  ${device.tablet} {
    max-width: 960px;
    /* padding: 0px 24px; */
  }

  ${device.desktop} {
    max-width: 1440px;
    /* padding: 0px 30px; */
  }
`;
export const Containerfluid = styled.div`
  margin-left: auto;
  margin-right: auto;
  padding: 24px;
  /* width: 100vw; */
  /* margin: 0 10px; */

  ${device.tablet} {
    max-width: 960px;
    margin-left: 10px;
    margin-right: 10px;
  }

  /* ${device.desktop} {
    max-width: 1440px;
    margin-left: 10px;
    margin-right: 10px;
  } */
  ${device.mobile} {
    margin-left: 10px;
    margin-right: 10px;
  }
`;

export const GlobalStyle = createGlobalStyle`


  html,
  body {
    padding: 0;
    margin: 0;
  /* font-family: 'Cormorant SC', serif; */
    font-family: "Montserrat", -apple-system, "sans-serif";
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    /* font-family: "Poppins", sans-serif;    */
    background-color: white;

  }

  html{
    height:100vh;   
  }

  body{

    height:auto;
    min-height: 100%;
        /* width:100vw; */
    background-color: ${theme.colors.black};

  }
   #__next{
    height:auto;
    min-height: 100vh;
  }

  *,
  :after,
  :before {
    box-sizing: border-box;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  a,
  p {
    margin: 0;
    }
    h1 {
    font-size: 56px;
    font-weight: 900;
    line-height: 55px;
  }
  
  h2 {
    font-size: 50px;
    font-weight: 900;
    line-height: 44px;
  }

  h3 {
    font-size: 28px;
    font-weight: 700;
    line-height: 36px;
  }

  h4 {
    font-size: 18px;
    font-weight: 700;
    line-height: 24px;
  }

  h5 {
    font-size: 16px;
    font-weight: 700;
    line-height: 26px;
  }

  //body2
  h6 {
    font-weight: 500;
    font-size: 14px;
    line-height: 24px;
  }

  a {
    font-size: 15px;
    font-weight: 700;
    line-height: 26px;
  }

  p {
    font-size: 15px;
    font-weight: 500;
    line-height: 25px;
  }

  label{
    font-weight: 500;
    font-size: 14px;
    line-height: 18px;
  }
  ::-webkit-scrollbar {
    width: 8px;
  }
  section{
    padding-top: ${theme.padding.paddingSection};
    padding-bottom: ${theme.padding.paddingSection};
     ${device.tablet} {
      padding-top:70px;
       padding-bottom:70px;
    }
    ${device.mobile} {
       padding-top:20px;
       padding-bottom:20px;

    }
  }
 

  /* Track */
  /* ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 2px grey;
    border-radius: 5px;
  } */

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background:  ${theme.colors.mainYellow};
    border-radius: 5px;
  }
  .MuiPaper-root{
    background-color: red;
  }

`;

export const Title = styled.div`
  text-align: center;

  /* ${device.tablet} {
    padding: 80px;
  }
  ${device.mobile} {
    padding: 30px;
  } */
  h2 {
    color: ${theme.colors.mainYellow};
    letter-spacing: 0.5px;
    line-height: 150%;

    text-transform: uppercase;
    font-weight: 900;
    ${device.tablet} {
      font-size: 30px;
    }
    ${device.mobile} {
      font-size: 30px;
    }
  }
  p {
    letter-spacing: 0.5px;
    line-height: 150%;

    font-size: 35px;
    font-weight: 300;
    color: ${theme.colors.grayDetail};
    opacity: 0.8;
    margin-bottom: 50px;
    ${device.tablet} {
      font-size: 20px;
      margin-bottom: 30px;
    }
    ${device.mobile} {
      font-size: 20px;
    }

    ${device.smallMobile} {
      font-size: 20px;
    }
  }
`;
export const GetContact = styled.p`
  ${device.tablet} {
    padding: 8px 30px;
  }
  ${device.mobile} {
    padding: 8px 30px;
  }
  text-transform: capitalize;

  display: inline;
  padding: 15px 40px;

  transition: 0.5s;

  border: 5.5px double ${theme.colors.mainYellow};
  --c: ${theme.colors.mainYellow};

  color: #0000;
  background: linear-gradient(90deg, ${theme.colors.white} 50%, var(--c) 0)
      calc(100% - var(--_p, 0%)) / 200% 100%,
    linear-gradient(var(--c) 0 0) 0% 100% / var(--_p, 0%) 100% no-repeat;
  -webkit-background-clip: text, padding-box;
  background-clip: text, padding-box;
  transition: 0.5s;
  &:hover {
    --_p: 100%;
  }
`;
export const WrapGetCon = styled.div`
  position: relative;
  transition: 0.5s;
  cursor: pointer;
  display: inline;
  img {
    position: absolute;
    left: 141px;
    top: 30%;
    transition: 0.5s;
    ${device.tablet} {
      left: 120px;
    }
    ${device.mobile} {
      left: 110px;
    }
  }
  &:hover {
    img {
      position: absolute;
      left: 170px;
      ${device.tablet} {
        left: 150px;
      }
      ${device.mobile} {
        left: 120px;
      }
    }
  }
`;
