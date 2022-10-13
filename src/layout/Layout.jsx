import React from "react";
import Header from "../components/Header";

const Layout = ({ children }) => {
  return (
    <div className="w-full h-screen p-5 bg-gray-100">
      <header>
        <Header />
      </header>

      <main>{children}</main>
    </div>
  );
};

export default Layout;
