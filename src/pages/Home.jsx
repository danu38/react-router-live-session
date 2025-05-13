// home.jsx is file to fetch up the all movies from the api
// and show them in the home page


import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import MovieCard from '../components/MovieCard'

const API_KEY = import.meta.env.VITE_API_KEY;
const API_URL = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`

const Home = () => {





  return (
    <div>
      Movies
    </div>
  )
}

export default Home
