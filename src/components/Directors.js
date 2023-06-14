import React from "react";
import { directors } from "../data";

function Directors() {
  return (
    <div>
      <h1>Directors Page</h1>
      {directors.map((director) => {
        return(
        <div key={director.name}>
          <h1>Name: {director.name}</h1>
          <h2>
          Movies:
            <ul>
              {director.movies.map((movie) => <li key={movie}>{movie}</li>)}
            </ul>
          </h2>
        </div>
      )})}
    </div>
  )
}

export default Directors;
