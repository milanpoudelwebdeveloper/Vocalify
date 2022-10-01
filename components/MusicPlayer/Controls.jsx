import React from "react";
import {
  BsArrowRepeat,
  BsFillPauseFill,
  BsFillPlayFill,
  BsShuffle,
} from "react-icons/bs";
import { MdSkipNext, MdSkipPrevious } from "react-icons/md";

const Controls = ({
  isPlaying,
  repeat,
  setRepeat,
  shuffle,
  setShuffle,
  currentSongs,
  handlePlayPause,
  handlePrevSong,
  handleNextSong,
}) => {
  return (
    <div className="flex items-center justify-around md:w-36 lg:w-52 2xl-w-80">
      <BsArrowRepeat
        size={20}
        color={repeat ? "red" : "white"}
        onClick={() => setRepeat((prev) => !prev)}
        className="hidden sm:block cursor-pointer"
      />
      {currentSongs.length && (
        <MdSkipPrevious
          size={30}
          color="#fff"
          className="cursor-pointer"
          onClick={handlePrevSong}
        />
      )}
      {isPlaying ? (
        <BsFillPauseFill
          size={45}
          color="#fff"
          onClick={handlePlayPause}
          className="cursor-pointer"
        />
      ) : (
        <BsFillPlayFill
          size={45}
          color="#fff"
          onClick={handlePlayPause}
          className="cursor-pointer"
        />
      )}
      {currentSongs?.length && (
        <MdSkipNext
          size={30}
          onClick={handleNextSong}
          color="#fff"
          className="cursor-pointer"
        />
      )}
      <BsShuffle
        size={20}
        color={shuffle ? "red" : "white"}
        onClick={() => setShuffle((prev) => !prev)}
        className="hidden sm:block cursor-pointer"
      />
    </div>
  );
};

export default Controls;
