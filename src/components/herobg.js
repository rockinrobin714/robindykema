import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import BackgroundImage from "gatsby-background-image";

const HeroBg = ({ children }) => {
  const bgData = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "herobg.png" }) {
        sharp: childImageSharp {
          fluid(quality: 90, maxWidth: 1920) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);
  return (
    <BackgroundImage className="hero-bg" fluid={bgData.image.sharp.fluid}>
      {children}
    </BackgroundImage>
  );
};

export default HeroBg;
