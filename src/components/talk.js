import React from "react";
import Img from "gatsby-image";
import { useStaticQuery, graphql } from "gatsby";

const Talk = ({ title, description, location, thumbnail }) => {
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
    <section className="all-talks">
      <div className="talk">
        <h3 className="title">{title}</h3>
        <p>{location}</p>
        <p>{description}</p>
      </div>
      <div>
        <Img fluid={data.placeholderImage.childImageSharp.fluid} />
      </div>
    </section>
  );
};

export default Talk;
