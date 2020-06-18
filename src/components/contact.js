import React from "react";
import Img from "gatsby-image";
import { useStaticQuery, graphql } from "gatsby";

const AboutMe = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "beach.png" }) {
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
      <div className="text-box">
        <form>
          <label>
            Name
            <input />
          </label>
          <label>
            Company
            <input />
          </label>
          <label>
            Number
            <input />
          </label>
          <label>
            Email
            <input />
          </label>
          <label>
            Message
            <textarea />
          </label>
        </form>
      </div>
      <div>
        <Img fluid={data.placeholderImage.childImageSharp.fluid} />
      </div>
    </section>
  );
};

export default AboutMe;
