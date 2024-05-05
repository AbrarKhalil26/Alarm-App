import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { MENU } from "../data/data";
import Sidebar from "./Sidebar";
import { useDispatch, useSelector } from "react-redux";
import { showSidebar as showSidebarAction } from "../redux/slice/globalSlice";

const Menu = () => {
  const [tooltip, setTooltip] = useState({});
  const [pageHeight, setPageHeight] = useState(window.innerHeight);
  const isSidebarVisible = useSelector((state) => state.global.sidebar); 
  const dispatch = useDispatch();

  const handleMouseEnter = (title) => {
    setTooltip((prevState) => ({ ...prevState, [title]: true }));
  };
  const handleMouseLeave = (title) => {
    setTooltip((prevState) => ({ ...prevState, [title]: false }));
  };

  useEffect(() => {
    const updatePageHeight = () => {
      const newPageHeight = Math.max(
        document.body.scrollHeight,
        document.body.offsetHeight,
        document.documentElement.clientHeight,
        document.documentElement.scrollHeight,
        document.documentElement.offsetHeight
      );
      setPageHeight(newPageHeight);
    };

    window.addEventListener("scroll", updatePageHeight);
    window.addEventListener("resize", updatePageHeight);

    updatePageHeight();

    return () => {
      window.removeEventListener("scroll", updatePageHeight);
      window.removeEventListener("resize", updatePageHeight);
    };
  }, []);

  useEffect(() => {
    if (pageHeight > window.innerHeight) {
      dispatch(showSidebarAction(true));
    } else {
      dispatch(showSidebarAction(false));
    }
  }, [pageHeight, dispatch]);

  return (
    <>
      {!isSidebarVisible &&
        <div className="m-2 absolute bottom-0 left-2/4 -translate-x-2/4  w-fit rounded-full flex justify-center items-center gap-4 p-4 bg-gradient-to-r from-white from-25% via-gray-400 via-50% to-white to-100% ">
          {MENU.map((item) => (
            <Link
              to={item.path}
              key={item.id}
              onMouseEnter={() => handleMouseEnter(item.title)}
              onMouseLeave={() => handleMouseLeave(item.title)}
              className="relative"
            >
              {item.icon}
              {tooltip[item.title] && (
                <span className="active-tooltip">{item.title}</span>
              )}
            </Link>
          ))}
        </div>
      }
    </>
  );
};

export default Menu;
