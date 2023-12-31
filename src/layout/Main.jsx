import React, { useEffect, useState } from "react";
import Movies from "../components/Movies";
import Preloader from "../components/Preloader";
import Search from "../components/Search";

export default function Main() {
  const API_KEY = import.meta.env.VITE_REACT_APP_API_KEY

  const [error, setError] = useState(null);
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=${API_KEY}&s=matrix`)
      .then((res) => res.json())
      .then(
        (res) => {
          setMovies(res.Search);
          setLoading(false)
        },
        (error) => {
          setError(error);
        }
      );
  }, []);

  if (error) {
    console.log(error.message);
  }

 
  const searchMovies = (str, type='all') => {
    const isType = type === 'all' ? '' : `&type=${type}` 
    fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=${API_KEY}&s=${str}${isType}`)
      .then((res) => res.json())
      .then(
        (res) => {
          setMovies(res.Search);
          setLoading(false);
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
        !loading ? (
          <Movies movies={movies} />
        ) : <Preloader/>
      }
      
    </main>
  );
}
