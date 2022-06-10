import React from "react";
import { Link } from "react-router-dom";
import { MovieControls } from "./MovieControls";

export const MovieCard = ({ movie, type }) => {
  return (
    <div className="movie-card">
      <Link to={`/movieInfo/${movie.id}`}>
        <img className="movie-card-hover"
          src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
          alt={`${movie.original_title} Poster`}
        />
      </Link>

      <MovieControls type={type} movie={movie} />
    </div>
  );
};
