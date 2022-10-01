import React from "react";

const SeekBar = () => {
  return (
    <div className="hidden sm:flex flex-row items-center">
      <button type="button" className="hidden lg:mr-4 lg:block text-white">
        -
      </button>
      <p className="text-white">{value === 0 ? "0:00" : ""}</p>
      <input
        type="range"
        step="any"
        value={value}
        min={min}
        max={max}
        onInput={onInput}
        className="md:block w-24 2xl:w-96 h-1 mx-4 2xl:mx-6 rounded-lg"
      />
    </div>
  );
};

export default SeekBar;
