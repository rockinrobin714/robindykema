import React from "react";
import Navbar from "../components/navbar";
import SEO from "../components/seo";
import ResponsiveProvider from "../contexts/responsiveProvider";

const NotFoundPage = () => (
  <ResponsiveProvider>
    <Navbar />
    <SEO title="404: Not found" />
    <div className="main-layout">
      <div style={{ height: "100vh", paddingTop: "100px" }}>
        So... there's nothing here.
      </div>
      <footer>
        © {new Date().getFullYear()}, Built by Robin Dykema with
        {` `}
        <a
          href="https://www.gatsbyjs.org"
          target="_blank"
          rel="noreferrer noopener"
        >
          Gatsby
        </a>
      </footer>
    </div>
  </ResponsiveProvider>
);

export default NotFoundPage;
