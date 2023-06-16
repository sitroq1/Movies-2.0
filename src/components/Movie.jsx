import React from "react";

export default function Movie({Title: title, Plot: plot, Poster: poster, imdbID}) {

  return (
    <>
      <div className="row">
        <div className="col s12 m6">
          <div className="card">
            <div className="card-image">
              <img src={poster} />
              <span className="card-title">{title}</span>
              <a className="btn-floating halfway-fab waves-effect waves-light red">
                <i className="material-icons">add</i>
              </a>
            </div>
            <div className="card-content">
              <p>{plot}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
