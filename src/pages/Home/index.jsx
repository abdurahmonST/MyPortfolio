import React, { useEffect, useRef } from "react";
import { HomeWrapper } from "./homeStyles";
import { gsap } from "gsap";

const HomePage = () => {
  const textRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      textRef.current,
      { opacity: 0, y: 40, scale: 0.9 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1.5,
        ease: "power3.out",
      }
    );
  }, []);

  return (
    <HomeWrapper>
      <p ref={textRef} className="animated-text">
        Building Modern <br />
        Web Experiences
      </p>
    </HomeWrapper>
  );
};

export default HomePage;
