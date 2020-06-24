import React, { useState } from "react";
import useTalks from "../hooks/use-talks";
import Talk from "./talk";

const Talks = () => {
  const [showAll, setShowAll] = useState(false);
  const talks = useTalks().slice(0, showAll ? undefined : 3);
  return (
    <section id="talks">
      <section className="text-box">
        <ul>
          <li>A proxy-mately everything you need to know about proxies</li>
        </ul>
      </section>
      {talks.map(talk => (
        <Talk talk={talk} key={talk.id} />
      ))}
      {!showAll && <button onClick={() => setShowAll(true)}>See all</button>}
    </section>
  );
};

export default Talks;
