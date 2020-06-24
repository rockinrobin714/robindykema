import React from "react";
import SEO from "../components/seo";
import Hero from "../components/hero";
import Navbar from "../components/navbar";
import AboutMe from "../components/about-me";
import Contact from "../components/contact";
import Talks from "../components/talks";
import ResponsiveProvider from "../contexts/responsiveProvider";

import "../styles/main.scss";

const IndexPage = () => (
  <ResponsiveProvider>
    <Navbar />
    <SEO title="Home" />
    <div className="main-layout">
      <Hero />
      <AboutMe />
      <Talks />
      <Contact />
      <footer>
        © {new Date().getFullYear()}, Built by Robin Dykema with
        {` `}
        <a
          href="https://www.gatsbyjs.org"
          target="_blank"
          rel="noreferrer noopener"
        >
          Gatsby
        </a>
      </footer>
    </div>
  </ResponsiveProvider>
);

export default IndexPage;

console.log(
  `%c   ___________________________________________
  < OBEY ME HOOMAN FOR I AM THE MIGHTY KITTEH >
   -------------------------------------------
        \\   /\\_____/\\
         \\ /  o   o  \\
          ( ==  ^  == )
           )         (
          (           )
         ( (  )   (  ) )
        (__(__)___(__)__)`,
  "font-family:monospace"
);
