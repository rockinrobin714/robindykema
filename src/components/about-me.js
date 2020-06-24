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
      placeholderImage: file(relativePath: { eq: "sand.png" }) {
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
          Robin is a senior UI engineer at Taulia, where she focuses on front
          end development in React. She is passionate about building intuitive
          user experiences and petting all things fluffy. She successfully
          transitioned from teaching ESL to kindergarteners in Shanghai to
          wrangling code and hasn't looked back since.
        </p>
        <AnchorLink to="/#contact" className="button">
          Let's work together
        </AnchorLink>
      </div>
    </section>
  );
};

export default AboutMe;
