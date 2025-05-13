import { BrowserRouter, Routes, Route } from "react-router"

import Movies from './pages/Movies'
import About from './pages/About'

// The Header component will show in all "pages" It is outside of the routing scope.

export const App = () => {
  return (
    <>
      

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Movies />} />
          <Route path="/about" element={<About />} />
          {/* <Route path="/movies/:movieId" element={<MovieDetails />} /> */}
        </Routes>
      </BrowserRouter>

    </>
  )
}
