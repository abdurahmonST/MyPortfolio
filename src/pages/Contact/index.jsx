import React from "react";
import {
  ContactContainer,
  ContactImageWrapper,
  ContactWrapper,
  LeftSide,
  RightSide,
  TextSection,
} from "./Contact.style";
import { Input, Typography } from "../../components";

const ContactPage = () => {
  return (
    <ContactWrapper>
      <ContactContainer className="container">
        <LeftSide>
          <Typography color="#d9d9d9">LET'S CONNECT</Typography>
          <Input text="Your Name" placeholder="John Doe" />
          <Input text="Your Email" placeholder="john@gmail.com" />
          <Input
            type="textarea"
            text="Your Message"
            placeholder="Type your message here..."
          />
        </LeftSide>
        <RightSide>
          <TextSection>
            <Typography color="#d9d9d9" type="paragraphText">
              I'm always open to new opportunities, creative ideas, or just a
              good conversation. Feel free to drop me a message and I’ll get
              back to you as soon as I can.
            </Typography>
          </TextSection>
          <ContactImageWrapper />
        </RightSide>
      </ContactContainer>
    </ContactWrapper>
  );
};

export default ContactPage;
