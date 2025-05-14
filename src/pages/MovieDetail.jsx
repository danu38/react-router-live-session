import React from 'react';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Loader from '../components/Loader';
import ErrorMessage from '../components/ErrorMessage';

// import ErrorMessage from '../components/ErrorMessage';

const API_KEY = import.meta.env.VITE_API_KEY;

const MovieDetail = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}&language=en-US`
    )
      .then((res) => {
        if (!res.ok) {
          throw new Error('Failed to fetch movie details');
        }
        return res.json();
      })
      .then((data) => {
        setMovie(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setError(true);
        setLoading(false);
      });
  }, [movieId]);

  if (loading) {
    return <Loader />; // Loader component
  }
  if (error) {
    return <ErrorMessage />; //ErrorMessage component
  }

  // Om allt är OK, rendera startsidan

  return (
    <div className='movie-detail'>
      <h1>{movie.title}</h1>
      <img
        src={`https://image.tmdb.org/t/p/w1280${movie.backdrop_path}`}
        alt={movie.title}
        loading='lazy'
      />
      <p>{movie.overview}</p>
      <p>⭐ {movie.vote_average}</p>
    </div>
  );
};
export default MovieDetail;
