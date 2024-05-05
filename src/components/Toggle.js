import React from "react";

const Toggle = ({ isChecked, setIsChecked }) => {
  return (
    <label for="check" className={`bg-gray-100 ${isChecked && 'bg-green-700'} w-14 h-8 rounded-full relative`}>
      <input type="checkbox" id="check" className="hidden" checked={isChecked} onChange={() => setIsChecked(!isChecked)}/>
      <div className={`w-6 h-6  rounded-full shadow-md transform duration-300 ease-in-out absolute top-1 ${isChecked ? 'bg-white left-7': 'bg-green-700 left-1'} transition-all duration-500`} />
    </label>
  );
};

export default Toggle;
