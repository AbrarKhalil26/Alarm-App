import React from "react";
import { SiConsul } from "react-icons/si";
import { IoMdSettings } from "react-icons/io";
import { DarkMode } from "../components";

const Navbar = () => {
  return (
    <div className={`fixed top-0 left-0 z-1 w-full dark:bg-zinc-800 shadow-lg shadow-gray-200 dark:shadow-zinc-700/20 px-12 py-4`}>
      <div className="flex items-center justify-between">
        <SiConsul size={40}/>
        <div className="flex gap-4 items-center">
          <DarkMode />
          <a href="/setting" className="p-icon">
            <IoMdSettings
              size={30}
              className="icon animate-spin"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
