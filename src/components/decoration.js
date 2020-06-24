import React from "react";
import Img from "gatsby-image";
import { useStaticQuery, graphql } from "gatsby";

const Decoration = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "decoration.png" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 2000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);
  return <Img fluid={data.placeholderImage.childImageSharp.fluid} />;
};

export default Decoration;
