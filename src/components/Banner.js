import React, { useEffect, useState } from 'react';
import tmdb from '../apis/tmdb';
import requests from '../apis/request';
import './Banner.css';

const Banner = () => {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await tmdb.get(requests.fetchNetflixOriginals);
      // console.log(response.data.results);
      const num = Math.floor(Math.random() * response.data.results.length - 1);
      setMovie(response.data.results[num]);
    };

    fetchData();
  }, []);

  console.log(movie);

  return (
    <header
      className="banner"
      style={{
        backgroundSize: 'cover',
        backgroundImage: `url('https://image.tmdb.org/t/p/original/${movie?.backdrop_path}')`,
        backgroundPosition: 'center center',
      }}
    >
      <div className="banner__contents">
        <h1 className="banner__title">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <div className="banner__buttons">
          <button className="banner__button">Play</button>
          <button className="banner__button">My List</button>
        </div>
        <h1 className="banner__description">{movie?.overview}</h1>
      </div>
    </header>
  );
};

export default Banner;
