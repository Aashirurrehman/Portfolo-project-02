import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../Navbar";

export const MovieInfo = () => {
  const [movieData, setMovieData] = useState([]);

  const { id } = useParams();
  const movieApi = `https://api.themoviedb.org/3/movie/${id}?api_key=652c993ee7462e9af57499898e2286c4&language=en-US`;
  // fetch(movieApi)
  //   .then((res) => res.json())
  //   .then((data) => {
  //     console.log(data);
  //     setMovieData(data);
  //   });

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(movieApi);
      const data = await response.json();
      console.log(data);
      setMovieData(data);
    };
    fetchData();
  }, []);

  return (
    <>
      <Navbar />
  
      <div className="movie-section">
        <div className="movie-row">
          <div className="image-col">
            <img
              className="card--image"
              src={`https://image.tmdb.org/t/p/original/${movieData.poster_path}`}
              alt={movieData.title}
            />
          </div>

          <div className="image-col">
            <h2 className="movie-title">{movieData.title}</h2>
            <div className="release-date">
              <h3>
                Release Date:<span style={{color:"maroon"}}> {movieData.release_date}</span>
              </h3>
            </div>
            <div className="movie-status">
              
              <h3>
                Status<span style={{color:"maroon"}} > {movieData.status}</span>
              </h3>
            </div>
            <div className="movie-rating">
                <h3>Rating:</h3>
                <div className="rating">
                  <i class="fa fa-star" style={{color: "maroon"}}></i>
                  <i class="fa fa-star" style={{color: "maroon"}}></i>
                  <i class="fa fa-star" style={{color: "maroon"}}></i>
                  <i class="fa fa-star" style={{color: "maroon"}}></i>
                  <i class="fa-solid fa-star-half-stroke" style={{color: "maroon"}}></i>
                 
                  
                  <span style={{backgroundColor: "black", color:"white", padding:"5px", marginLeft:"10px"}}> {movieData.vote_average}</span>
                </div>
              </div>
            <div className="movie-description">
              <h2>Description</h2>
              <p className="movie--desc">{movieData.overview}</p>
            </div>
          </div>
        </div>
      </div>

      
    </>
  );
};
