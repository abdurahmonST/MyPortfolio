import React from "react";
import { ContactContainer, ContactWrapper } from "./Contact.style";
import { Input, Typography } from "../../components";

const ContactPage = () => {
  return (
    <ContactWrapper>
      <ContactContainer className="container">
        <Typography color="#d9d9d9">LET'S CONNECT</Typography>
        <Input text="Your Name" placeholder="John Doe" />
        <Input text="Your Email" placeholder="john@gmail.com" />
        <Input
          type="textarea"
          text="Your Message"
          placeholder="Type your message here..."
        />
      </ContactContainer>
    </ContactWrapper>
  );
};

export default ContactPage;
