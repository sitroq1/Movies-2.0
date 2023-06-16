import React from "react";

export default function Movie({
  Title: title,
  Plot: plot,
  Poster: poster,
  Type: type,
  Year: year,
  imdbID,
}) {
  return (
    <>
      <div className="card">
        <div className="card-image waves-effect waves-block waves-light">
          {poster === "N/A" ? (
            <img className="activator" src="https://placehold.co/600x400" />
          ) : (
            <img className="activator" src={poster} />
          )}
        </div>
        <div className="card-content">
          <span className="card-title activator grey-text text-darken-4">
            {title}
          </span>
          <div className="row ">
            <span className="col">{year}</span>
            <span className="col">{type}</span>
          </div>
        </div>
        
      </div>
    </>
  );
}
