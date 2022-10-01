import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { nextSong, playPause } from "../../redux/slices/playerSlice";
import Controls from "./Controls";
import SeekBar from "./SeekBar";
import Track from "./Track";

const MusicPlayer = () => {
  const [shuffle, setShuffle] = useState(false);
  const [repeat, setRepeat] = useState(false);
  const { activeSong, isActive, isPlaying, currentIndex, currentSongs } =
    useSelector((state) => state.player);

  const dispatch = useDispatch();

  const handlePlayPause = () => {
    if (!isActive) return;
    if (isPlaying) {
      dispatch(playPause(false));
    } else {
      dispatch(playPause(true));
    }
  };

  const handleNextSong = () => {
    dispatch(playPause(true));
    if (!shuffle) {
      dispatch(nextSong(Math.floor(currentIndex + 1) % currentSongs.length));
    } else {
      dispatch(nextSong(Math.floor(Math.random() * currentSongs.length)));
    }
  };

  const handlePrevSong = () => {
    dispatch(playPause(true));
    if (currentIndex <= 0) {
      dispatch(nextSong(currentSongs.length - 1));
    } else if (shuffle) {
      dispatch(nextSong(Math.floor(Math.random() * currentSongs.length)));
    } else {
      dispatch(nextSong(currentIndex - 1));
    }
  };

  return (
    <div className="relative sm:px-12 px-8 w-full flex items-center justify-between">
      <Track
        activeSong={activeSong}
        isPlaying={isPlaying}
        isActive={isActive}
      />
      <div className="flex-1 flex flex-col items-center justify-center">
        <Controls
          isPlaying={isPlaying}
          handlePlayPause={handlePlayPause}
          handleNextSong={handleNextSong}
          handlePrevSong={handlePrevSong}
          repeat={repeat}
          setRepeat={setRepeat}
          shuffle={shuffle}
          setShuffle={setShuffle}
          currentSongs={currentSongs}
        />
        <SeekBar />
      </div>
    </div>
  );
};

export default MusicPlayer;
