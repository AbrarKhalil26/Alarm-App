import React from "react";
import { MdBrightness4, MdBrightness7 } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { toggleDarkMode } from "../redux/slice/globalSlice";

const DarkMode = () => {
  const darkMode = useSelector((state) => state.global.darkMode);
  const dispatch = useDispatch();

  return (
    <div className={`p-icon ${darkMode && 'dark'}`} onClick={() => dispatch(toggleDarkMode())}>
      {darkMode ? (
        <MdBrightness7 size={30} className={`icon dark:text-white`} height='30px' />
      ) : (
        <MdBrightness4 size={30} className={`icon dark:text-white`} height='30px' />
      )}
    </div>
  );
};

export default DarkMode;
