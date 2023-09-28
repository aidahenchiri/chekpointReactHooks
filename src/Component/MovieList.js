import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({movies,inputStars,inputSearch}) => {
  console.log(movies)
  return (
    <div style={{display:"flex", flexWrap:"wrap",justifyContent:"space-around"}}>

        {movies.filter(movie=>inputStars!==0?(movie.title.toUpperCase().includes(inputSearch.toUpperCase().trim())||
        movie.description.toUpperCase().includes(inputSearch.toUpperCase().trim()))&& movie.rate===inputStars:movie.title.
        toUpperCase().includes(inputSearch.toUpperCase().trim()) ||
        movie.description.toUpperCase().includes(inputSearch.toUpperCase().trim())).map(movie => 
        <MovieCard  movie={movie} key={movie.id} />) }

      
        {/* title.toUpperCase().includes(inputSearch.toUpperCase().trim()) || movie.description.toUpperCase().includes( */}

    </div>

  )
}

export default MovieList