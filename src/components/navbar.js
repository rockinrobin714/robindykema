import React, { useContext, useState } from "react";
import { AnchorLink } from "gatsby-plugin-anchor-links";
import { ResponsiveContext } from "../contexts/responsiveProvider";
import HamburgerButton from "./hamburger-button";

const Navbar = () => {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const { isMobile } = useContext(ResponsiveContext);

  return (
    <>
      {isMobile && (
        <div className="hamburger-container">
          <HamburgerButton
            open={isMobileNavOpen}
            onClick={() => setIsMobileNavOpen(!isMobileNavOpen)}
          />
          <h2>Robin Dykema</h2>
        </div>
      )}
      <nav className={isMobileNavOpen && "open"}>
        <ul>
          {!isMobile && (
            <li>
              <h4>Robin Dykema</h4>
            </li>
          )}
          <li role="button" onClick={() => setIsMobileNavOpen(false)}>
            <AnchorLink to="/#hero">Home</AnchorLink>
          </li>
          <li role="button" onClick={() => setIsMobileNavOpen(false)}>
            <AnchorLink to="/#about-me">About Me</AnchorLink>
          </li>
          <li role="button" onClick={() => setIsMobileNavOpen(false)}>
            <AnchorLink to="/#talks">Talks</AnchorLink>
          </li>
          <li role="button" onClick={() => setIsMobileNavOpen(false)}>
            <AnchorLink to="/#contact">Contact</AnchorLink>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
