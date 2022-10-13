import React from "react";
import heroMobile from "../images/image-hero-mobile.png";
import heroDesktop from "../images/image-hero-desktop.png";

import { client } from "../images/clientImg";

const Main = () => {
  return (
    <div className="w-full sm:flex sm:flex-row-reverse sm:mt-5 sm:h-auto sm:pl-10">
      <div className="sm:w-2/4 ">
        <img
          src={heroMobile}
          alt="hero-banner"
          className="mt-5  w-full sm:hidden"
        />
        <img src={heroDesktop} className="hidden sm:flex w-96 " />
      </div>

      <div className="sm:w-3/4 flex flex-col sm:justify-center items-center sm:items-start  lg:pl-20 ">
        <h1 className="text-3xl lg:text-7xl font-bold  mt-5">
          Make <br className="hidden lg:flex" /> remote work
        </h1>

        <p className="text-gray-500 font-semibold mt-5 text-center tracking-tighter sm:text-start lg:w-96 lg:text-justify ">
          Get your team in sync, no matter your location. Streamline
          processes,Create team rituals, and watch productivity soar.
        </p>

        <button
          type="button"
          className="bg-black text-gray-50 font-semibold h-10 w-32 sm:h-36 rounded-md mt-5 sm:mt-10"
        >
          Learn more
        </button>

        <div className="flex w-full sm:w-3/4 justify-between mt-10  sm:h-full  sm:items-end">
          {client.map((clientImages) => (
            <img
              src={clientImages}
              alt="logo-clients"
              className="w-12 h-6 sm:w-16 sm:h8 "
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Main;
