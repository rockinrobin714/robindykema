import React, { useState } from "react";
import Talk from "./talk";

const Talks = () => {
  const [showAll, setShowAll] = useState(false);
  return (
    <section id="talks">
      <Talk title="test" location="yo" description="yep" thumbnail="sand.png" />
      {!showAll && <button onClick={() => setShowAll(true)}>See all</button>}
    </section>
  );
};

export default Talks;
