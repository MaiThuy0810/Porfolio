import React, { useEffect, useRef, useState } from "react";
import Header from "../../components/Header/header";
// import Contact from "../HomePage/Component/Contact";
// import Banner from "./Component/Banner/banner";
// import FrontEnd from "./Component/Front/frontend";
// import Skill from "./Component/Skills/skills";
// import Work from "./Component/Work/work";
import { WrapHome } from "./style";

import LocationOnIcon from "@mui/icons-material/LocationOn";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import PhoneEnabledIcon from "@mui/icons-material/PhoneEnabled";
import AOS from "aos";
// import Footer from "../../components/Footer";
function HomePage() {
  // const scrollCounter = document.querySelector(".js-scroll-counter");
  // window.addEventListener("scroll", function () {
  //   scrollCounter.innerHTML = window.pageYOffset;
  // });

  // AOS.init()
  const listContact = [
    {
      id: 1,
      name: "Phone +84382992858",
      icon: <PhoneEnabledIcon className="phone" />,
    },
    {
      id: 2,
      name: "Mail tmaii1183@gmail.com",
      icon: <MailOutlineIcon className="mail" />,
    },
    {
      id: 2,
      name: "Address District 11 ho chi minh ",
      icon: <LocationOnIcon className="address" />,
    },
  ];

  AOS.init({
    offset: 200,
    duration: 900,
    easing: "ease-in-out-sine",
    delay: 300,
    mirror: true,
  });

  const [showTopBtn, setShowTopBtn] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    });
  }, []);

  const aboutSection = useRef(null);
  const contactSection = useRef(null);
  const workSection = useRef(null);
  const skillSection = useRef(null);
  const headerSection = useRef(null);
  const bannerSection = useRef(null);

  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  //////////////////////////////

  const scrollToSection = (ele) => {
    ele.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const sectionRefs = [
    { section: "About", ref: aboutSection },
    { section: "Contact", ref: contactSection },
    { section: "Work", ref: workSection },
    { section: "Skill", ref: skillSection },
    { section: "Banner", ref: bannerSection },
  ];

  const getDimensions = (ele) => {
    const { height } = ele.getBoundingClientRect();
    const offsetTop = ele.offsetTop;
    const offsetBottom = offsetTop + height;

    return {
      height,
      offsetTop,
      offsetBottom,
    };
  };

  const [visibleSection, setVisibleSection] = useState();

  useEffect(() => {
    const handleScroll = () => {
      const { height: headerHeight } = getDimensions(headerSection.current);
      const scrollPosition = window.scrollY + headerHeight;

      const selected = sectionRefs.find(({ section, ref }) => {
        const ele = ref.current;
        if (ele) {
          const { offsetBottom, offsetTop } = getDimensions(ele);
          return scrollPosition > offsetTop && scrollPosition < offsetBottom;
        }
      });

      if (selected && selected.section !== visibleSection) {
        setVisibleSection(selected.section);
      } else if (!selected && visibleSection) {
        setVisibleSection(undefined);
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [visibleSection]);
  return (
    <WrapHome>
      <Header
        aboutSection={aboutSection}
        contactSection={contactSection}
        workSection={workSection}
        skillSection={skillSection}
        goToTop={goToTop}
        visibleSection={visibleSection}
        scrollTo={scrollToSection}
        headerSection={headerSection}
        bannerSection={bannerSection}
      />
      {/* <Banner
        bannerSection={bannerSection}
        skillSection={skillSection}
        scrollToSection={scrollToSection}
      />
      <FrontEnd aboutSection={aboutSection} />{" "}
      <Skill skillSection={skillSection} />
      <Work workSection={workSection} />
      <Contact contactSection={contactSection} />
      <Footer />
      <WrapperContact>
        {" "}
        {listContact.map((item, index) => (
          <ItemContact key={index}>
            <p>{item.name}</p>
            <WrapIcon>
              <Icon>{item.icon}</Icon>
            </WrapIcon>
          </ItemContact>
        ))}
      </WrapperContact>
      {showTopBtn && (
        <BackTop>
          <div className="iconBack" onClick={goToTop}>
            <ExpandLessIcon />
          </div>
        </BackTop>
      )} */}
    </WrapHome>
  );
}

export default HomePage;
