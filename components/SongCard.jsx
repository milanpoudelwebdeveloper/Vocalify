import React from "react";
import Link from "next/link";
import PlayPause from "./PlayPause";
import { useDispatch } from "react-redux";
import { setActiveSong, playPause } from "../redux/slices/playerSlice";

const SongCard = ({ song, i, activeSong, isPlaying, data }) => {
  const dispatch = useDispatch();
  const handlePause = () => {
    dispatch(playPause(false));
  };
  const handlePlay = () => {
    dispatch(
      setActiveSong({
        song,
        data,
        i,
      })
    );
    dispatch(playPause(true));
  };
  return (
    <div className="flex flex-col w-[250px] p-4 bg-white/5 bg-opacity-80 backdrop-blur-sm animate-slideup rounded-lg cursor-pointer">
      <div className="relative w-full h-56 group">
        <div
          className={`absolute inset-0 justify-center items-center bg-black bg-opacity-50 group-hover:flex ${
            activeSong?.title === song?.title
              ? "flex bg-black bg-opacity-70"
              : "hidden"
          }`}
        >
          <PlayPause
            isPlaying={isPlaying}
            activeSong={activeSong}
            song={song}
            handlePlay={handlePlay}
            handlePause={handlePause}
          />
        </div>
        <img
          src={song?.images?.coverart}
          alt="song"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="mt-4 flex flex-col">
        <p className="font-semibold text-lg text-white truncate">
          <Link href={`/songs/${song.key}`}>{song?.title}</Link>
        </p>
        <p className="text-sm truncate text-gray-500 mt-1">
          <Link
            href={`${
              song?.artists
                ? `/artists/${song?.artists[0].adamid}`
                : "/top-artists"
            }`}
          >
            {song?.subtitle}
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SongCard;
