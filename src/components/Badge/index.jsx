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
        opacity: scrollPosition > 300 ? 1 : 0,
        transform: scrollPosition > 300 ? "translateY(0)" : "translateY(10px)",
        hover: {
          backgroundColor: isActive ? "#ffffff" : "#1e201e",
        },
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
