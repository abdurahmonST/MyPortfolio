import React from "react";
import {
  MarqueeContent,
  MarqueeInner,
  MarqueeWrapper,
} from "./MarqueInner.style";
import Typography from "../Typography";

const MarqueeText = ({ text }) => {
  return (
    <MarqueeWrapper>
      <MarqueeContent>
        <MarqueeInner>
          <Typography as="span" type="sectionHeader" color="#d9d9d9">
            {text}
          </Typography>
        </MarqueeInner>
        <MarqueeInner>
          <Typography as="span" type="sectionHeader" color="#d9d9d9">
            {text}
          </Typography>
        </MarqueeInner>
      </MarqueeContent>
    </MarqueeWrapper>
  );
};

export default MarqueeText;
