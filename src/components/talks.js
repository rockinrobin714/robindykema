import React, { useState } from "react";
import useTalks from "../hooks/use-talks";
import Talk from "./talk";

const Talks = () => {
  const [showAll, setShowAll] = useState(false);
  const talks = useTalks().slice(0, showAll ? undefined : 3);
  return (
    <section id="talks">
      {talks.map(talk => (
        <Talk talk={talk} key={talk.id} />
      ))}
      {!showAll && <button onClick={() => setShowAll(true)}>See all</button>}
      <section className="text-box">
        <h3>Upcoming talks:</h3>
        <ul>
          <li>
            Sacré Bleu! The Trials and Tribulaciones of Internationalising Your
            ẨṔṔŁîÇåŤḯṏÑ� -{" "}
            <a
              href="https://halfstackconf.com/charlotte/"
              target="_blank"
              rel="noopener"
            >
              Half Stack Charlotte
            </a>
          </li>
          <li>
            A Proxy-mately Everything You Need to Know About Proxies -{" "}
            <a href="https://decoupleddays.com/" target="_blank" rel="noopener">
              Decoupled Days
            </a>
          </li>
          <li>
            A Proxy-mately Everything You Need to Know About Proxies -{" "}
            <a href="https://enterjs.de/" target="_blank" rel="noopener">
              Enter JS (Germany)
            </a>
          </li>
        </ul>
        <h3>Postponed due to COVID:</h3>
        <ul>
          <li>
            Sacré Bleu! The Trials and Tribulaciones of Internationalising Your
            ẨṔṔŁîÇåŤḯṏÑ� -{" "}
            <a
              href="http://react-not-a-conf.com/"
              target="_blank"
              rel="noopener"
            >
              React.NotAConf (Bulgaria)
            </a>
          </li>
          <li>
            Shining Light on the Shadow DOM -{" "}
            <a href="https://cssconf.co/" target="_blank" rel="noopener">
              CSS Conf Colombia
            </a>
          </li>
        </ul>
      </section>
    </section>
  );
};

export default Talks;
