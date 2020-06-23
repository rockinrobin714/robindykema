import React, { useState } from "react";
import useTalks from "../hooks/use-talks";
import Talk from "./talk";

const Talks = () => {
  const [showAll, setShowAll] = useState(false);
  const talks = useTalks().slice(0, showAll ? undefined : 3);
  return (
    <section id="talks">
      {talks.map(talk => (
        <Talk talk={talk} key={talk.location} />
      ))}
      {!showAll && <button onClick={() => setShowAll(true)}>See all</button>}
    </section>
  );
};

export default Talks;
