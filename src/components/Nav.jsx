import React, { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import ListNav from "./ListNav";
import SideMenu from "./SideMenu";

const Nav = () => {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <>
      <AiOutlineMenu
        className="sm:hidden text-3xl cursor-pointer "
        onClick={() => setOpenMenu(true)}
      />

      {openMenu && <SideMenu active={setOpenMenu} />}

      <div className="hidden sm:flex mx-10  font-semibold text-gray-500 ">
        <ListNav />
      </div>
    </>
  );
};

export default Nav;
