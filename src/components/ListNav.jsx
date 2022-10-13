import React, { useState } from "react";

import {
  MdOutlineKeyboardArrowDown,
  MdOutlineKeyboardArrowUp,
} from "react-icons/md";
import Comapany from "./Menu-collapsed/Company";
import Features from "./Menu-collapsed/Features";

const ListNav = () => {
  const [features, setFeatures] = useState(false);
  const [company, setCompany] = useState(false);

  const toggleFeatures = () => {
    features ? setFeatures(false) : setFeatures(true);
  };

  const toggleCompany = () => {
    company ? setCompany(false) : setCompany(true);
  };

  return (
    <ul className="mt-10 p-2 text-gray-500 font-semibold space-y-5  sm:flex  sm:space-y-0 sm:space-x-5 sm:m-0 ">
      <li
        className="sm:cursor-pointer hover:text-black"
        onClick={() => toggleFeatures()}
      >
        <p className="flex items-center">
          Features
          {features === false ? (
            <MdOutlineKeyboardArrowDown className="ml-2 " />
          ) : (
            <MdOutlineKeyboardArrowUp className="ml-2" />
          )}
        </p>
        {features && <Features />}
      </li>

      <li className="sm:cursor-pointer" onClick={() => toggleCompany()}>
        <p className="flex items-center">
          Company
          {company === false ? (
            <MdOutlineKeyboardArrowDown className="ml-2 " />
          ) : (
            <MdOutlineKeyboardArrowUp className="ml-2" />
          )}
        </p>

        {company && <Comapany />}
      </li>

      <li className="sm:cursor-pointer">Careers</li>
      <li className="sm:cursor-pointer"> About</li>
    </ul>
  );
};

export default ListNav;
