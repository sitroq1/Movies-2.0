import React from 'react'
import Movie from './Movie';


export default function Movies({movies})   {
  return (
    <>
        <div className="movies">
            {movies.map((elem) => (
                <Movie key={elem.imdbID} {...elem}/>
                ))}
        </div>
    </>
  )
}
