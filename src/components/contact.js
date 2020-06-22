import React, { useReducer, useState } from "react";
import Img from "gatsby-image";
import { useStaticQuery, graphql } from "gatsby";

const INITIAL_STATE = {
  name: "",
  email: "",
  subject: "",
  body: "",
  status: "IDLE",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "updateFieldValue":
      return { ...state, [action.field]: action.value };
    case "updateStatus":
      return { ...state, status: action.status };
    case "reset":
    default:
      return INITIAL_STATE;
  }
};

const AboutMe = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "beach.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);
  const setStatus = status => dispatch({ type: "updateStatus", status });
  const updateFieldValue = field => event => {
    dispatch({
      type: "updateFieldValue",
      field,
      value: event.target.value,
    });
  };
  const handleSubmit = event => {
    event.preventDefault();
    setStatus("PENDING");
    fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify(state),
    })
      .then(response => response.json())
      .then(response => {
        console.log(response);
        setStatus("SUCCESS");
      })
      .catch(error => {
        console.error(error);
        setStatus("ERROR");
      });
  };

  return (
    <section id="contact" className="half-row">
      <div className="text-box">
        {state.status === "ERROR" && (
          <p>Something went wrong. Please try again</p>
        )}
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
      <div>
        <Img fluid={data.placeholderImage.childImageSharp.fluid} />
      </div>
    </section>
  );
};

export default AboutMe;
