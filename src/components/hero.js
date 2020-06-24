import React from "react";
import Img from "gatsby-image";
import { useStaticQuery, graphql } from "gatsby";
import HeroBg from "./herobg";

const Hero = () => {
  const data = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "robin.png" }) {
        sharp: childImageSharp {
          fluid {
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
        <div className="robin">
          <Img fluid={data.image.sharp.fluid} />
        </div>
      </HeroBg>
    </section>
  );
};

export default Hero;
