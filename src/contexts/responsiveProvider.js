import React, { useEffect, useState } from "react";
export const ResponsiveContext = React.createContext();

const ResponsiveProvider = ({ children }) => {
  const [isMobile, setIsMobile] = useState();

  const checkIfMobile = () => {
    const width = window.innerWidth;
    if (isMobile && width > 900) {
      setIsMobile(false);
    } else if (!isMobile && width < 900) {
      setIsMobile(true);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", checkIfMobile);
    checkIfMobile();
    return () => window.removeEventListener("resize", checkIfMobile);
  });

  return (
    <ResponsiveContext.Provider value={{ isMobile }}>
      {children}
    </ResponsiveContext.Provider>
  );
};

export default ResponsiveProvider;
