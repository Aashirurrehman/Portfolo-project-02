import React from "react";
import { useParams } from "react-router-dom";
import Navbar from "./Navbar";

export const Detail = ({ movie }) => {

  const {id} = useParams();
  return (
    <>
      
      <div className="container">
        {movie.map((movie) => movie.title  ? (
          <div key={movie.id} className="rightleft mt-4 border-1">
            <div className="left">
              <h1>{movie.title}</h1>
              <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt={`${movie.title} Poster`}/>
                
                 
            </div>
          </div>


        ): <h1>no pic</h1>)}
      </div>
    </>
  );
};

