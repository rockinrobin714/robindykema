import React from "react";
import { Link } from "gatsby";
import { AnchorLink } from "gatsby-plugin-anchor-links";

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <h4>Robin Dykema</h4>
        </li>
        <li>
          <AnchorLink to="/#hero">Home</AnchorLink>
        </li>
        <li>
          <AnchorLink to="/#about-me">About Me</AnchorLink>
        </li>
        <li>
          <AnchorLink to="/#hero">Talks</AnchorLink>
        </li>
        <li>
          <AnchorLink to="/#hero">Contact</AnchorLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
