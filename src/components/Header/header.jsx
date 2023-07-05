import React, { useEffect, useState } from "react";
import { Containerfluid } from "../../styles/global.js";
import {
  ContentHeader,
  Logo,
  MenuWrapper,
  WrapTagA,
  WrapperHeader,
} from "./style";
import "./style.js";

function Header({
  aboutSection,
  contactSection,
  workSection,
  skillSection,
  goToTop,
  visibleSection,
  scrollTo,
  headerSection,
  bannerSection,
}) {
  const listHeader = [
    {
      id: 1,
      name: "home",
      nameScroll: bannerSection,
      chooseSection: "Banner",
    },
    { id: 2, name: "about", nameScroll: aboutSection, chooseSection: "About" },

    { id: 3, name: "work", nameScroll: workSection, chooseSection: "Work" },
    { id: 4, name: "skills", nameScroll: skillSection, chooseSection: "Skill" },
  ];

  const [activeHeader, setActiveHeader] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setActiveHeader(true);
      } else {
        setActiveHeader(false);
      }
    });
  }, []);

  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });
  const [cursorVariant, setCursorVariant] = useState("default");

  useEffect(() => {
    const mouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  // const variants = {
  //   default: {
  //     x: mousePosition.x - 16,
  //     y: mousePosition.y - 16,
  //   },
  //   text: {
  //     height: 150,
  //     width: 150,
  //     x: mousePosition.x - 75,
  //     y: mousePosition.y - 75,
  //     backgroundColor: "yellow",
  //     mixBlendMode: "difference",
  //   },
  // };

  const textEnter = () => setCursorVariant("text");
  const textLeave = () => setCursorVariant("default");

  return (
    <>
      <WrapperHeader
        ref={headerSection}
        className={activeHeader ? "active" : ""}
        id="mobile"
      >
        <Containerfluid>
          <ContentHeader>
            <Logo
              onClick={goToTop}
              onMouseEnter={textEnter}
              onMouseLeave={textLeave}
            >
              {" "}
              thuy maii
            </Logo>

            <MenuWrapper>
              {listHeader.map((item, index) => (
                <WrapTagA
                  key={item.id}
                  className={`header_link ${
                    visibleSection === item.chooseSection ? "selected" : ""
                  }`}
                  onClick={() => {
                    scrollTo(item.nameScroll.current);
                  }}
                >
                  <span>{item.name}</span>
                </WrapTagA>
              ))}
            </MenuWrapper>
          </ContentHeader>
        </Containerfluid>
      </WrapperHeader>
    </>
  );
}

export default Header;
