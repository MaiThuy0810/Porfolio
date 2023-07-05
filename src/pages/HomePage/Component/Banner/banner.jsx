import React from "react";
// import "./style.js";
import {
  BannerLeft,
  BannerText,
  BannerWrapper,
  Hello,
  Message,
  Work,
  WrapperImage,
} from "./style";

import "aos/dist/aos.css";
import arrow from "../../../../assets/img/Arrow 1.svg";
import wooder from "../../../../assets/img/Saly-13.svg";
import {
  Containerfluid,
  GetContact,
  WrapGetCon,
} from "../../../../styles/global";

// import "antd/dist/antd.css";
import Tilt from "react-parallax-tilt";
// import Spline from "@splinetool/react-spline";

// import { Scene, GLTFLoader } from "three";
// import { GUI } from "./jsm/libs/lil-gui.module.min.js";
// import Stats from "./jsm/libs/stats.module.js";

function Banner({
  scrollDown,
  contactSection,
  bannerSection,
  skillSection,
  scrollToSection,
}) {
  return (
    <BannerWrapper ref={bannerSection}>
      <Containerfluid>
        <BannerText>
          <BannerLeft>
            <Hello>hello</Hello>
            <h1>
              <span>i am</span> thuy
            </h1>

            <h1>front-end developer</h1>

            <h1>
              <span>always be</span>
              <Message>
                <Work>close</Work>
                <Work>code</Work>
                <Work>creating</Work>
              </Message>
            </h1>
            <WrapGetCon
              onClick={() => {
                scrollToSection(skillSection.current);
              }}
            >
              <GetContact>more skill</GetContact>
              <img src={arrow} />
            </WrapGetCon>
          </BannerLeft>
          <WrapperImage>
            <Tilt>
              <img src={wooder} />
              {/* <Spline scene="https://prod.spline.design/rTYOCNUvzIcM93T6/scene.splinecode" /> */}
            </Tilt>
          </WrapperImage>
        </BannerText>
      </Containerfluid>
    </BannerWrapper>
  );
}

export default Banner;
