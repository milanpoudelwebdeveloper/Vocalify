import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { nextSong, playPause } from "../../redux/slices/playerSlice";
import Controls from "./Controls";
import Player from "./Player";
import SeekBar from "./SeekBar";
import Track from "./Track";

const MusicPlayer = () => {
  const [shuffle, setShuffle] = useState(false);
  const [repeat, setRepeat] = useState(false);

  const [seekTime, setSeekTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [appTime, setAppTime] = useState(0);
  const [volume, setVolume] = useState(0.5);
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
    <div className="relative flex items-center justify-between w-full px-8 sm:px-12">
      <Track
        activeSong={activeSong}
        isPlaying={isPlaying}
        isActive={isActive}
      />
      <div className="flex flex-col items-center justify-center flex-1">
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
        <SeekBar
         value={appTime}
         min="0"
         max={duration}
         onInput={(event) => setSeekTime(event.target.value)}
         setSeekTime={setSeekTime}
         appTime={appTime}
        />
        <Player
          activeSong={activeSong}
          repeat={repeat}
          isPlaying={isPlaying}
          seekTime={seekTime}
          currentIndex={currentIndex}
          volume={volume}
          onEnded={handleNextSong}
          onTimeUpdate={(event) => setAppTime(event.target.currentTime)}
          onLoadedData={(event) => setDuration(event.target.duration)}
        />
      </div>
    </div>
  );
};

export default MusicPlayer;
