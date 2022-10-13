import React from "react";
import Nav from "./Nav";

const Header = () => {
  return (
    <div className="w-full sm:flex  items-center">
      <div className="flex justify-between sm:justify-start items-center w-full sm:w-1/2  ">
        <h1 className="text-3xl  pb-1 font-bold">snap</h1>

        <Nav />
      </div>

      <div className="hidden sm:flex w-1/2 justify-end space-x-5 text-gray-500">
        <h4>Login</h4>
        <h4 className="border border-black rounded-xl w-20 h-8 text-center ">
          Register
        </h4>
      </div>
    </div>
  );
};

export default Header;
