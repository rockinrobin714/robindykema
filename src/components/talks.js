import React, { useState, useContext } from "react";
import Img from "gatsby-image";
import { useStaticQuery, graphql } from "gatsby";
import { ResponsiveContext } from "../contexts/responsiveProvider";
import useTalks from "../hooks/use-talks";

import Talk from "./talk";

const Talks = () => {
  const [showAll, setShowAll] = useState(false);
  const talks = useTalks().slice(0, showAll ? undefined : 3);
  const { isMobile } = useContext(ResponsiveContext);

  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "talk-decoration.png" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
    <section id="talks">
      <section className="text-box decoration-container">
        <div>
          <h2>My Talks</h2>
          <p>
            Speaking at conferences is the perfect way to combine my previous
            teaching experience and my passion about technology. Here are
            descriptions of previous talks, along with a list of upcoming talks!
          </p>
        </div>
        {!isMobile && (
          <div className="talk-decoration">
            <Img fluid={data.placeholderImage.childImageSharp.fluid} />
          </div>
        )}
      </section>
      {talks.map(talk => (
        <Talk talk={talk} key={talk.id} />
      ))}
      {!showAll && <button onClick={() => setShowAll(true)}>See all</button>}
      <section className="text-box">
        <h3>Upcoming talks:</h3>
        <ul>
          <li>
            Sacré Bleu! The Trials and Tribulaciones of Internationalising Your
            ẨṔṔŁîÇåŤḯoÑ -{" "}
            <a
              href="https://halfstackconf.com/charlotte/"
              target="_blank"
              rel="noreferrer noopener"
            >
              Half Stack Charlotte
            </a>
          </li>
          <li>
            A Proxy-mately Everything You Need to Know About Proxies -{" "}
            <a
              href="https://decoupleddays.com/"
              target="_blank"
              rel="noreferrer noopener"
            >
              Decoupled Days
            </a>
          </li>
          <li>
            A Proxy-mately Everything You Need to Know About Proxies -{" "}
            <a
              href="https://enterjs.de/"
              target="_blank"
              rel="noreferrer noopener"
            >
              Enter JS (Germany)
            </a>
          </li>
        </ul>
        <h3>Postponed due to COVID-19:</h3>
        <ul>
          <li>
            Sacré Bleu! The Trials and Tribulaciones of Internationalising Your
            ẨṔṔŁîÇåŤḯoÑ -{" "}
            <a
              href="http://react-not-a-conf.com/"
              target="_blank"
              rel="noreferrer noopener"
            >
              React.NotAConf (Bulgaria)
            </a>
          </li>
          <li>
            Shining Light on the Shadow DOM -{" "}
            <a
              href="https://cssconf.co/"
              target="_blank"
              rel="noreferrer noopener"
            >
              CSS Conf Colombia
            </a>
          </li>
        </ul>
      </section>
    </section>
  );
};

export default Talks;
