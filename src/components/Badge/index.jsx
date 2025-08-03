import React, { useState, useEffect } from "react";
import { BadgeWrapper } from "./Badge.style";

const Badge = ({ onClick, isActive }) => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    let timeoutId;

    const handleScroll = () => {
      const currentScroll = window.scrollY;
      setScrollPosition(currentScroll);

      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {}, 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <BadgeWrapper
      onClick={onClick}
      $isActive={isActive}
      style={{
        transform: scrollPosition > 200 ? "translateX(0)" : "translateX(120px)",
      }}
    >
      <img
        src={isActive ? "/Icons/CloseNavLinks.svg" : "/Icons/ShowNavLinks.svg"}
        alt="Badge Icon"
      />
    </BadgeWrapper>
  );
};

export default Badge;
