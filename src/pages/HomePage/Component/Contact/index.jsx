import LocationOnIcon from "@mui/icons-material/LocationOn";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import React from "react";
import ItemContact from "../../../../components/itemContact";
import { Containerfluid } from "../../../../styles/global";
import { ContactTitle, WrapBanner, WrapContact, WrapperContact } from "./style";

function Contact({ contactSection }) {
  const listContact = [
    {
      id: 1,
      name: "phone",
      detail: "Phone +́84382992858",
      iconContact: <PhoneIphoneIcon />,
    },
    {
      id: 2,
      name: "email",
      detail: "tmaii1183@gmail.com",
      iconContact: <MailOutlineIcon />,
    },
    {
      id: 3,
      name: "address",
      detail: "11 district Ho Chi Minh City",
      iconContact: <LocationOnIcon />,
    },
  ];
  return (
    <>
      <WrapperContact ref={contactSection}>
        <Containerfluid>
          <ContactTitle>Get in touch with me!</ContactTitle>{" "}
          <WrapContact>
            {listContact.map((item, index) => (
              <div key={item.id}>
                {" "}
                <ItemContact
                  name={item.name}
                  detail={item.detail}
                  iconContact={item.iconContact}
                />
              </div>
            ))}
          </WrapContact>
        </Containerfluid>
      </WrapperContact>{" "}
    </>
  );
}

export default Contact;
