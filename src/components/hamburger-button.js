import React from "react";

const HamburgerButton = ({ onClick, open }) => {
  const handleClick = () => {
    document.activeElement.blur();
    onClick();
  };
  return (
    <button
      className={`hamburger-button ${open && "open"}`}
      onClick={handleClick}
    >
      <span />
      <span />
      <span />
      <span />
    </button>
  );
};

export default HamburgerButton;
