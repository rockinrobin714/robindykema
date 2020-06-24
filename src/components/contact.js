import React, { useReducer, useContext } from "react";
import Img from "gatsby-image";
import { useStaticQuery, graphql } from "gatsby";
import { ResponsiveContext } from "../contexts/responsiveProvider";
import Spinner from "./spinner";

const INITIAL_STATE = {
  name: "",
  email: "",
  subject: "",
  body: "",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "updateFieldValue":
      return { ...state, [action.field]: action.value };
    case "reset":
    default:
      return INITIAL_STATE;
  }
};

const AboutMe = () => {
  const { isMobile } = useContext(ResponsiveContext);

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

  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);
  const updateFieldValue = field => event => {
    dispatch({
      type: "updateFieldValue",
      field,
      value: event.target.value,
    });
  };
  const handleSubmit = event => {
    event.preventDefault();
    fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify(state),
    })
      .then(response => response.json())
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.error(error);
      });
  };

  return (
    <section id="contact" className="half-row">
      {isMobile && (
        <div>
          <Img fluid={data.placeholderImage.childImageSharp.fluid} />
          <span className="image-text">Contact</span>
        </div>
      )}
      <div className="text-box">
        <form onSubmit={handleSubmit}>
          <label>
            Name
            <input
              name="name"
              onChange={updateFieldValue("name")}
              type="text"
              value={state.name}
            />
          </label>
          <label>
            Email
            <input
              name="email"
              onChange={updateFieldValue("email")}
              type="email"
              value={state.email}
            />
          </label>
          <label>
            Subject
            <input
              name="subject"
              onChange={updateFieldValue("subject")}
              type="text"
              value={state.subject}
            />
          </label>
          <label>
            Body
            <textarea
              name="body"
              onChange={updateFieldValue("body")}
              value={state.body}
            />
          </label>
          <button>Send</button>
        </form>
      </div>
      {!isMobile && (
        <div>
          <Img fluid={data.placeholderImage.childImageSharp.fluid} />
          <Spinner />
          <span className="image-text">Contact</span>
        </div>
      )}
    </section>
  );
};

export default AboutMe;
