import React from "react";
import { Link } from "gatsby";

import Image from "../components/image";
import SEO from "../components/seo";
import Hero from "../components/hero";
import Navbar from "../components/navbar";
import AboutMe from "../components/about-me";
import Contact from "../components/contact";
import Talks from "../components/talks";
import "../styles/main.scss";

const IndexPage = () => (
  <>
    <Navbar />
    <SEO title="Home" />
    <div className="main-layout">
      {/* <div style={{ maxWidth: `800px`, marginBottom: `1.45rem` }}>
        <Image />
      </div> */}
      <Hero />
      <AboutMe />
      <Talks />
      <Contact />
      <footer>
        © {new Date().getFullYear()}, Built by Robin Dykema with
        {` `}
        <a href="https://www.gatsbyjs.org">Gatsby</a>
      </footer>
    </div>
  </>
);

export default IndexPage;

console.log(
  `%c   ___________________________________________
  < OBEY ME HOOMAN FOR I AM THE MIGHTY KITTEH >
   --------------------------------------------
        \\   /\\_____/\\
         \\ /  o   o  \\
          ( ==  ^  == )
           )         (
          (           )
         ( (  )   (  ) )
        (__(__)___(__)__)`,
  "font-family:monospace"
);
