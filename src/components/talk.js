import React, { useContext } from "react";
import Image from "gatsby-image";
import { ResponsiveContext } from "../contexts/responsiveProvider";

const Talk = ({ talk }) => {
  const { isMobile } = useContext(ResponsiveContext);

  return (
    <section className="talk">
      <div className="talk-text">
        <h3 className="title">{talk.title}</h3>
        <p>
          <span className="conference">{talk.conference}</span>
          {talk.location} ({talk.date})
        </p>
        <p>{talk.description}</p>
        <p>
          <a href={talk.slides} rel="noreferrer noopener" target="_blank">
            Link to slides
          </a>
        </p>
        {/* TODO! {talk.url && <p className="watch-video">{talk.url}</p>}  */}
      </div>
      {!isMobile && (
        <a
          href={talk.slides}
          rel="noreferrer noopener"
          target="_blank"
          className="talk-image"
        >
          <Image fluid={talk.image.sharp.fluid} alt={talk.title} />
        </a>
      )}
    </section>
  );
};

export default Talk;
