import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import ListNav from "./ListNav";

const SideMenu = ({ active }) => {
  const closeSideMenu = () => {
    active(false);
  };

  return (
    <div className="fixed flex right-0  top-0 w-full h-screen  sm:hidden ">
      <div className="bg-black-100 opacity-50 w-1/2 h-full "></div>
      <div className="bg-gray-100 w-1/2 h-full  p-2 overflow-auto">
        <AiOutlineClose
          className="text-3xl absolute right-2 top-2 "
          onClick={() => closeSideMenu()}
        />

        <ListNav />

        <div className="mt-10 w-full text-center space-y-4 text-gray-500 font-semibold">
          <h5>Login</h5>
          <h5 className=" border border-black h-10 pt-1 rounded-xl">
            Register
          </h5>
        </div>
      </div>
    </div>
  );
};

export default SideMenu;
