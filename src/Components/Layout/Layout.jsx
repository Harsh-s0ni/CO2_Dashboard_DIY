import React from "react";
import Navbar from "../Navbar";

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar (Fixed Height) */}
      <Navbar />
      {/* Page Content - Takes Remaining Height */}
      <div className="flex-grow flex">{children}</div>
    </div>
  );
};

export default Layout;
