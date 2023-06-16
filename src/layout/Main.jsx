import React, { useEffect, useState } from "react";
import Movies from "../components/Movies";
import Preloader from "../components/Preloader";
import Search from "../components/Search";

export default function Main() {

  const [error, setError] = useState(null);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch("http://www.omdbapi.com/?i=tt3896198&apikey=58c515fd&s=matrix")
      .then((res) => res.json())
      .then(
        (res) => {
          setMovies(res.Search);
        },
        (error) => {
          setError(error);
        }
      );
  }, []);

  if (error) {
    console.log(error.message);
  }

 
  const searchMovies = (str) => {
    fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=58c515fd&s=${str}`)
      .then((res) => res.json())
      .then(
        (res) => {
          setMovies(res.Search);
        },
        (error) => {
          setError(error);
        }
      );
  }
  


  return (
    <main className="content conteiner">
       <Search searchMovies={searchMovies}/>
      {
        movies.length ? (
          <Movies movies={movies} />
        ) : <Preloader/>
      }
      
    </main>
  );
}
