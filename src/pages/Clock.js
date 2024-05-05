import React, { useState } from "react";
import { AnalogClock, DigitalClock } from "../components";
import { CgArrowsExpandRight } from "react-icons/cg";
import { useDispatch, useSelector } from "react-redux";
import { toggleExpand } from "../redux/slice/globalSlice";
import { CgCompressRight } from "react-icons/cg";

const Clock = () => {
  const [switchAnalog, setSwitchAnalog] = useState(false)
  const expand = useSelector((state) => state.global.expand);
  const dispatch = useDispatch();

  return (
    <>
      <div className="flex justify-between items-center">
        <p className="text-4xl font-bold">Clock</p>
        <button
          className="contained-btn"
          type="button"
          onClick={() => setSwitchAnalog(!switchAnalog)}
        >
          {switchAnalog ? 'Switch to Digital Clock': 'Switch to Analog Clock'}
        </button>
      </div>
      <div className={`flex justify-center items-center flex-col h-calc-90 py-4 ${expand ? 'fixed inset-0 dark:bg-zinc-800 bg-white p-4 ': 'static'} transition-all`}>
        <div className="p-icon self-end" onClick={() => dispatch(toggleExpand(true))}>
          {expand ? <CgCompressRight className="icon" /> : <CgArrowsExpandRight className="icon"/>}
          
        </div>
        {switchAnalog ? <AnalogClock /> : <DigitalClock />}
      </div>
    </>
  );
};

export default Clock;
