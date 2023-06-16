import React from "react";

export default function Movie({Title: title, Plot: plot, Poster: poster, imdbID}) {

  return (
    <>

<div className="card">
    <div className="card-image waves-effect waves-block waves-light">
      
      {
        poster === 'N/A' ?
        <img className="activator" src='https://placehold.co/600x400'/> :
        <img className="activator" src={poster}/>
      }
      
    </div>
    <div className="card-content">
      <span className="card-title activator grey-text text-darken-4">{title}</span>
      
    </div>
    <div className="card-reveal">
      <span className="card-title grey-text text-darken-4">Card Title<i className="material-icons right">close</i></span>
      <p>Here is some more information about this product that is only revealed once clicked on.</p>
    </div>
  </div>

    

    </>
  );
}
