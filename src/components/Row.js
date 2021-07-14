import React, { useState, useEffect } from 'react';
import tmdb from '../axios';
import './Row.css';

const Row = ({ title, fetchUrl }) => {
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

  console.log(movies);

  const renderedMovies = movies.map((movie) => {
    return (
      <img
        className="row_poster"
        src={movie.poster_path}
        alt={movie.name}
        key={movie.id}
      />
    );
  });

  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row_posters">{renderedMovies}</div>
    </div>
  );
};

export default Row;
