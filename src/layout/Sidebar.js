import React, { useState } from "react";
import { MENU } from "../data/data";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [tooltip, setTooltip] = useState({});

  const handleMouseEnter = (title) => {
    setTooltip((prevState) => ({ ...prevState, [title]: true }));
  };
  const handleMouseLeave = (title) => {
    setTooltip((prevState) => ({ ...prevState, [title]: false }));
  };
  return (
    <div className="fixed top-19 left-0 py-8 w-24 h-full dark:bg-zinc-800 shadow-right-dark flex flex-col items-center gap-8">
      {MENU.map((item) => (
        <Link
          to={item.path}
          key={item.id}
          onMouseEnter={() => handleMouseEnter(item.title)}
          onMouseLeave={() => handleMouseLeave(item.title)}
          className="relative text-white"
        >
          {item.icon}
          {tooltip[item.title] && (
            <span className="active-tooltip">{item.title}</span>
          )}
        </Link>
      ))}
    </div>
  );
};

export default Sidebar;
