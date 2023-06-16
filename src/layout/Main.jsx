import React, {useEffect, useState} from 'react'
import Movies from '../components/Movies'


export default function Main() {

    const [movies, setMovies] = useState([])

    useEffect(() => {
        fetch('http://www.omdbapi.com/?i=tt3896198&apikey=58c515fd&s=matrix')
            .then((res) => res.json())
            .then((res) => setMovies(res.Search))
    }, [])

    console.log(movies)
    
  return (
    <main className="content">
        <Movies movies={movies} />
    </main>
  )
}
