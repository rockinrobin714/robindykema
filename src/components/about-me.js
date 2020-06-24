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
    <section id="about-me" className="half-row">
      <div>
        <Img fluid={data.placeholderImage.childImageSharp.fluid} />
      </div>
      <div className="text-box">
        <p>
          Robin is a senior UI engineer at Taulia, where she focuses on front
          end development in React. She is passionate about building intuitive
          user experiences and petting all things fluffy. She successfully
          transitioned from teaching ESL to kindergarteners in Shanghai to
          wrangling code and hasn't looked back since.
        </p>
        <button>Let's work together</button>
      </div>
    </section>
  );
};

export default AboutMe;
