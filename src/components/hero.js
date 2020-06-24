import React from "react";
import Img from "gatsby-image";
import { useStaticQuery, graphql } from "gatsby";
import HeroBg from "./herobg";
import Decoration from "./decoration";

const Hero = () => {
  const data = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "robin.png" }) {
        sharp: childImageSharp {
          fluid(quality: 90, maxWidth: 1000) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);
  return (
    <section id="hero">
      <HeroBg>
        <div className="hero-text">
          <span className="title">Robin Dykema</span>
          <span>UI Engineer and Conference Speaker</span>
        </div>
        <div className="robin" style={{ width: "100%" }}>
          <Decoration />
        </div>
        <div className="robin">
          <Img fluid={data.image.sharp.fluid} />
        </div>
      </HeroBg>
    </section>
  );
};

export default Hero;
