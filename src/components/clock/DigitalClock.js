import React from "react";
import Clock from "react-digital-clock";
import { useSelector } from "react-redux";

const DigitalClock = () => {
  const expand = useSelector((state) => state.global.expand);

  return (
    <div className="w-full h-full flex justify-center items-center ">
      <div className={`${expand ? 'text-7xl': 'text-4xl'} font-bold tracking-widest`}>
        <Clock />
      </div>
    </div>
  );
};

export default DigitalClock;
