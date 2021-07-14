import React, { useState, useEffect } from 'react';
import tmdb from '../apis/tmdb';
import './Row.css';

const base_url = 'https://image.tmdb.org/t/p/original';

const Row = ({ title, fetchUrl, isLargeRow }) => {
  const [movies, setMovies] = useState([]);

  // Run once when the row loads, and don't run again.
  useEffect(() => {
    const fetchData = async () => {
      const response = await tmdb.get(fetchUrl);
      // console.log(response.data.results);
      setMovies(response.data.results);
    };

    fetchData();
  }, [fetchUrl]);

  // console.log(movies);

  // poser_path looks like "/2ST6l4WP7ZfqAetuttBqx8F3AAH.jpg", and that's not a complete url. We need to append that to the base_url.
  const renderedMovies = movies.map((movie) => {
    return (
      <img
        className={`row__poster ${isLargeRow && 'row__posterLarge'}`}
        src={`${base_url}${
          isLargeRow ? movie.poster_path : movie.backdrop_path
        }`}
        alt={movie.name}
        key={movie.id}
      />
    );
  });

  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row__posters">{renderedMovies}</div>
    </div>
  );
};

export default Row;
