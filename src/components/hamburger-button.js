import React from "react";

const HamburgerButton = ({ onClick, open }) => {
  const handleClick = () => {
    document.activeElement.blur();
    onClick();
  };
  return (
    <div className="button-container">
      <button
        className={`hamburger-button ${open && "open"}`}
        onClick={handleClick}
      >
        <span />
        <span />
        <span />
        <span />
      </button>
    </div>
  );
};

export default HamburgerButton;
