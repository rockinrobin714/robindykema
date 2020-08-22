import React from "react";
import Img from "gatsby-image";
import { useStaticQuery, graphql } from "gatsby";

const Spinner = ({ direction }) => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "spinner.png" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);
  return (
    <div className={`spinner ${direction === "left" && "left"}`}>
      <Img fluid={data.placeholderImage.childImageSharp.fluid} />
    </div>
  );
};

export default Spinner;
