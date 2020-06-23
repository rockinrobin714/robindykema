import React from "react";
import Image from "gatsby-image";

const Talk = ({ talk }) => {
  return (
    <section className="talk">
      <div className="talk-text">
        <h3 className="title">{talk.title}</h3>
        <p>
          <span className="conference">{talk.conference}</span> -{" "}
          {talk.location} ({talk.date})
        </p>
        <p>{talk.description}</p>
        <p>
          Check out the slides{" "}
          <a href={talk.slides} rel="noopener" target="_blank">
            here {talk.slides}
          </a>
        </p>
        {talk.url && <p className="watch-video">{talk.url}</p>}
      </div>
      <div className="talk-image">
        <Image fluid={talk.image.sharp.fluid} alt={talk.title} />
      </div>
    </section>
  );
};

export default Talk;
