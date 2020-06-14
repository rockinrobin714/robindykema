import React from "react";
import Img from "gatsby-image";
import { useStaticQuery, graphql } from "gatsby";

const AboutMe = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "sand.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);
  return (
    <section id="contact" className="half-row">
      <div>
        <form>
          <input />
        </form>
      </div>
      <div>
        <Img fluid={data.placeholderImage.childImageSharp.fluid} />
      </div>
    </section>
  );
};

export default AboutMe;
