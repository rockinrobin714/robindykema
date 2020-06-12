import React from "react";
import { Link } from "gatsby";

import Image from "../components/image";
import SEO from "../components/seo";
import Hero from "../components/hero";
import Navbar from "../components/navbar";
import AboutMe from "../components/about-me";
import "../styles/main.scss";

const IndexPage = () => (
  <>
    <Navbar />
    <SEO title="Home" />

    <div className="main-layout">
      <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <div style={{ maxWidth: `800px`, marginBottom: `1.45rem` }}>
        {/* <Image /> */}
      </div>
      <p>
        Welcome to your new Gatsby site.Welcome to your new Gatsby site.Welcome
        to your new Gatsby site.WelWelcome to your new Gatsby site.Welcome to
        your new Gatsby site.Welcome to your new Gatsby site.Welcome to your new
        Gatsby site.Welcome to your new Gatsby site.Welcome to your new Gatsby
        site.Welcome to your new Gatsby site.Welcome to your new Gatsby
        site.Welcome to your new Gatsby site.Welcome to your new Gatsby
        site.Welcome to your new Gatsby site.Welcome to your new Gatsby
        site.Welcome to your new Gatsby site.Welcome to your new Gatsby
        site.Welcome to your new Gatsby site.come to your new Gatsby
        site.Welcome to your new Gatsby site.Welcome to your new Gatsby
        site.Welcome to your new Gatsby site.Welcome to your new Gatsby
        site.Welcome to your new Gatsby site.Welcome to your new Gatsby
        site.Welcome to your new Gatsby site.Welcome to your new Gatsby
        site.Welcome to your new Gatsby site.Welcome to your new Gatsby
        site.Welcome to your new Gatsby site.Welcome to your new Gatsby
        site.Welcome to your new Gatsby site.Welcome to your new Gatsby site.
      </p>
      <Hero />
      <AboutMe />
      <p>Now go build something great.</p>
      <Link to="/page-2/">Go to page 2</Link> <br />
      <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
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
