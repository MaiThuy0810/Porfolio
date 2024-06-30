import React from "react";
import {
  WrapFooter,
  WrapBottom,
  FooterSign,
  FootName,
  FootTagA,
} from "./style";

function Footer({ contactSection }) {
  const listFooter = [
    {
      id: 1,
      name: "LinkIn",
      href: "https://www.linkedin.com/in/mai-thu%E1%BB%B7-209934221/",
    },
    // {
    //   id: 2,
    //   name: "Facebook",
    //   href: "https://www.facebook.com/Thuy.Maii.Bwi081099/",
    // },
    // {
    //   id: 3,
    //   name: "Instagram",
    //   href: "https://www.instagram.com/_bwi_99/",
    // },
  ];
  return (
    <WrapFooter ref={contactSection}>
      <FooterSign>Mai Thi Thuy</FooterSign>
      <WrapBottom>
        {listFooter.map((item, index) => (
          <div key={item.id}>
            <FootTagA href={item.href} target="_blank">
              {" "}
              <FootName>{item.name}</FootName>
            </FootTagA>
          </div>
        ))}
      </WrapBottom>
      {/* <CopyRight>&copy; Copyright 2022 Thuy Maii</CopyRight> */}
    </WrapFooter>
  );
}

export default Footer;
