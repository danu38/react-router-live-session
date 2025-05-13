import { useEffect, useState } from 'react'
import Card from '../components/Card'

const Movies = () => {
  const [movies, setMovies] = useState([])
  // Here we want to fetch the movies from the api in a useEffect hook

  const apiKey = import.meta.env.VITE_TMDB_API_KEY

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`)
      .then((response) => response.json())
      .then((data) => setMovies(data.results))
      .catch((error) => console.error('Error fetching movies:', error));

  }, []);



  return (
    <>
      <div>Movies</div>
      {movies.length ? movies.map(movie => <Card movie={movie.title} />) : <p>fetching...</p>}
    </>


  )
}

export default Movies