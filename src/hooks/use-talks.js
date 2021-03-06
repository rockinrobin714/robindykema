import { graphql, useStaticQuery } from "gatsby";
const useTalks = () => {
  const data = useStaticQuery(graphql`
    query {
      allMdx(sort: { fields: fileAbsolutePath, order: DESC }) {
        nodes {
          id
          frontmatter {
            conference
            description
            location
            title
            date
            url
            slides
            image {
              sharp: childImageSharp {
                fluid(quality: 90, maxWidth: 600) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
        }
      }
    }
  `);
  return data.allMdx.nodes.map(talk => ({
    title: talk.frontmatter.title,
    conference: talk.frontmatter.conference,
    location: talk.frontmatter.location,
    image: talk.frontmatter.image,
    description: talk.frontmatter.description,
    date: talk.frontmatter.date,
    url: talk.frontmatter.url,
    slides: talk.frontmatter.slides,
    id: talk.id,
  }));
};
export default useTalks;
