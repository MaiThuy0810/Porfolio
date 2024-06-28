import React from "react";
import about from "../../../../assets/img/avtme.jpg";
import "./style.js";
// import education from "../../../../assets/img/education.jpg";
import { Container, Containerfluid, Title } from "../../../../styles/global";
import {
  AboutDes,
  ContentAbout,
  ImageAbout,
  ScrollBanner,
  TetxName,
  WrapFront,
  WrapTextAbout,
} from "./style";

function FrontEnd({ aboutSection }) {
  return (
    <WrapFront ref={aboutSection}>
      <Containerfluid>
        <Title>
          <h2>About</h2>
          <p>About me</p>
        </Title>{" "}
        <ContentAbout>
          {/* <ImageAbout> */}
          <ImageAbout data-aos="flip-right">
            <img src={about} />
          </ImageAbout>

          {/* <WrapTextAbout> */}
          <WrapTextAbout data-aos="zoom-in-up">
            <TetxName>mai thi thuy</TetxName>
            <AboutDes>
              I look forward to experimenting with work and learning in a real
              professional working environment so that I can improve my
              experience and knowledge. It will become a platform on my way to
              becoming a professional developer in the future.
              <span>front-end developer</span>
            </AboutDes>
          </WrapTextAbout>
        </ContentAbout>{" "}
      </Containerfluid>{" "}
      <ScrollBanner>
        {/* <div className="m-scroll">
          <div className="m-scroll__title">
            <div>
              <h1>
                <a href="https://dribbble.com/JulianoF">ReactJs</a>{" "}
                <a href="https://dribbble.com/JulianoF">Javascript</a> &amp;{" "}
                <a href="https://dribbble.com/JulianoF">CSS/SCSS </a>&amp;{" "}
              </h1>
              <h1>
                <a href="https://dribbble.com/JulianoF">ReactJs</a>&amp;{" "}
                <a href="https://dribbble.com/JulianoF">Javascript</a> &amp;{" "}
                <a href="https://dribbble.com/JulianoF">CSS/SCSS </a>&nbsp;
              </h1>
              <h1>
                <a href="https://dribbble.com/JulianoF">ReactJs</a>&amp;{" "}
                <a href="https://dribbble.com/JulianoF">Javascript</a> &amp;{" "}
                <a href="https://dribbble.com/JulianoF">CSS/SCSS </a>&nbsp;
              </h1>
            </div>
          </div>
        </div> */}
      </ScrollBanner>
    </WrapFront>
  );
}

export default FrontEnd;
