import React, { useContext } from "react";
import Img from "gatsby-image";
import { useStaticQuery, graphql } from "gatsby";
import { AnchorLink } from "gatsby-plugin-anchor-links";
import { ResponsiveContext } from "../contexts/responsiveProvider";
import Spinner from "./spinner";

const AboutMe = () => {
  const { isMobile } = useContext(ResponsiveContext);
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "beach.png" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);
  return (
    <section id="about-me" className="half-row">
      <div>
        <Img fluid={data.placeholderImage.childImageSharp.fluid} />
        {!isMobile && <Spinner direction="left" />}
        <span className="image-text">{isMobile ? "About" : "About Me"}</span>
      </div>
      <div className="text-box">
        <p>
          Hi! 👋 I'm Robin. I'm a senior UI engineer at Taulia in Austin, TX,
          where I work primarily with React.
        </p>
        <br />
        <p>
          My journey to front-end development started with coding embarassingly
          bad Geocities Backstreet Boys fanpages. In between the days of Comic
          Sans &#60;blink&#62; tags and now, I taught ESL to kindergarteners in
          Taiwan and China for 6 years.
        </p>
        <br />
        <p>
          I love traveling, and some of my crazier exploits include being an
          extra in a Bollywood film, running a half marathon in North Korea, and
          skydiving in Australia.
        </p>
        <br />
        <p>
          I have two adorable kitties who like to make appearances in my
          conference slides.
        </p>
        <br />
        <p>
          My current interests include i18n, a11y, and mastering all things
          React. I'm interested in learning more about creating serverless apps
          with Gatsby.
        </p>
        <AnchorLink to="/#contact" className="button">
          Let's work together
        </AnchorLink>
      </div>
    </section>
  );
};

export default AboutMe;
