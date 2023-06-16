import React from "react";
import Movie from "./Movie";

export default function Movies({ movies=[] }) {
  return (
    <>
      <div className="movies">
        {movies.length ? (
          movies.map((elem) => (
            <Movie key={elem.imdbID} {...elem} />
          ))
        ): <h3>Вы ничего не ввели</h3>}
        
      </div>
    </>
  );
}
