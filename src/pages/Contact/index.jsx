import React from "react";
import {
  ContactContainer,
  ContactImageWrapper,
  ContactWrapper,
  LeftSide,
  RightSide,
  TextSection,
} from "./Contact.style";
import { Button, Input, Typography } from "../../components";

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
          <Button styles={{ width: "578px", marginTop: "16px" }}>
            Send Message
          </Button>
        </LeftSide>
        <RightSide>
          <TextSection>
            <Typography color="#d9d9d9" type="paragraphText">
              I’m always open to exploring new opportunities, collaborating on
              exciting projects, sharing creative ideas, or simply having a
              meaningful conversation. Whether you have a proposal, a question,
              some feedback, or just want to say hello, I’d genuinely love to
              hear from you. <br /> <br />
              Let’s connect, exchange ideas, and see where our creativity can
              take us. Together, we might just create something truly amazing.
            </Typography>
          </TextSection>
          {/* <ContactImageWrapper /> */}
        </RightSide>
      </ContactContainer>
    </ContactWrapper>
  );
};

export default ContactPage;
