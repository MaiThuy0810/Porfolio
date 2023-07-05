import React from "react";
import { WrapPhone } from "./style";

function ItemContact({ name, detail, iconContact }) {
  return (
    <WrapPhone>
      {iconContact}
      <h4>{name}</h4>
      <p>{detail}</p>
    </WrapPhone>
  );
}

export default ItemContact;
