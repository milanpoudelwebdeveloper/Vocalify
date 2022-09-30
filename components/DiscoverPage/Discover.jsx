import React, { useEffect } from "react";
import { useQuery } from "react-query";
import { axiosInstance } from "../../axiosConfig";
import { genres } from "../../constants/genres";
import Loader from "../common/Loader";
import Error from "../common/Error";
import SongCard from "../SongCard";
import { useDispatch, useSelector } from "react-redux";

const Discover = () => {
  const dispatch = useDispatch();
  const { activeSong, isPlaying } = useSelector((state) => state.player);
  const genreTitle = "Pop";

  const { isLoading, error, data } = useQuery(genreTitle, () => {
    return getTopCharts();
  });

  const getTopCharts = async () => {
    const { data } = await axiosInstance.get(`/charts/world`);
    return data;
  };

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return <Error />;
  }

  return (
    <div className="flex flex-col">
      <div className="w-full flex justify-between items-center sm:flex-row flex-col mt-4 mb-10">
        <h2 className="font-bold text-3xl text-white">Discover {genreTitle}</h2>
        <select
          className="bg-black text-gray-300 p-3 text-sm rounded-lg outline-none"
          onChange={() => {}}
          value=""
        >
          {genres.map(({ title, value }) => (
            <option value={value} key={value}>
              {title}
            </option>
          ))}
        </select>
      </div>
      <div className="flex flex-wrap sm:justify-start justify-center gap-8">
        {data.map((item, index) => (
          <SongCard
            key={item?.key}
            song={item}
            i={index}
            isPlaying={isPlaying}
            activeSong={activeSong}
            data={data}
          />
        ))}
      </div>
    </div>
  );
};

export default Discover;
