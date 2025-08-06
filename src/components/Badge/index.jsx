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
      <div className="icon-container">
        <img
          className={`icon ${isActive ? "icon-hidden" : "icon-visible"}`}
          src="/Icons/ShowNavLinks.svg"
          alt="Show Nav Icon"
        />
        <img
          className={`icon ${isActive ? "icon-visible" : "icon-hidden"}`}
          src="/Icons/CloseNavLinks.svg"
          alt="Close Nav Icon"
        />
      </div>
    </BadgeWrapper>
  );
};

export default Badge;
