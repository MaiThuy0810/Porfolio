import React from "react";
import {
  TitleWork,
  ViewDemo,
  WorkDes,
  WrapCardWork,
  WrapImg,
  WrapName,
  WrapView,
} from "./style";
function CardWork({ name, image, positionPJ, link, des }) {
  return (
    <>
      <WrapCardWork className={positionPJ}>
        <WrapImg>
          <img src={image} />
        </WrapImg>
        <WrapName>
          <TitleWork>{name}</TitleWork>
          <WorkDes> {des}</WorkDes>
          <a href={link} target="_blank">
            <WrapView>
              <ViewDemo>view project</ViewDemo>
            </WrapView>
          </a>
        </WrapName>{" "}
      </WrapCardWork>
    </>
  );
}

export default CardWork;
