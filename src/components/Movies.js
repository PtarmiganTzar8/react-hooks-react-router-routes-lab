import React from "react";
import { movies } from "../data";

function Movies() {
  return (
    <div>
      <h1>Movies Page</h1>
      {movies.map((movie) => {
        return(
        <div key={movie.title}>
          <h1>Name: {movie.title}</h1>
          <h2>Time: {movie.time}</h2>
          <br></br>
          <h3>
          Genres:
            <ul>
              {movie.genres.map((genre) => <li key={genre}>{genre}</li>)}
            </ul>
          </h3>
        </div>
      )})}
    </div>
  )
}

export default Movies;
