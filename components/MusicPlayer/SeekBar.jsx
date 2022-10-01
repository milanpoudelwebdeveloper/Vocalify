import React from "react";

const SeekBar = ({ value, min, max, setSeekTime, onInput, appTime }) => {
  
  const getTime = (time) => {
    return (
      Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2)
    );
  };
  return (
    <div className="flex-row items-center hidden sm:flex">
      <button
        type="button"
        className="hidden text-white lg:mr-4 lg:block"
        onClick={() => setSeekTime(appTime - 5)}
      >
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
        className="w-24 h-1 mx-4 rounded-lg md:block 2xl:w-96 2xl:mx-6"
      />
      <p className="text-white">{max === 0 ? "0:00" : getTime(max)}</p>
      <button
        type="button"
        className="hidden text-white lg:ml-4 lg:block"
        onClick={() => setSeekTime(appTime + 5)}
      >+</button>
    </div>
  );
};

export default SeekBar;
