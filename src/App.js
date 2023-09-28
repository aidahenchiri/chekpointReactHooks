import React, { useState } from 'react'
import MovieList from './Component/MovieList';
import moviesData from './Data'
import NAvBar from './Component/NavBar';
import AddMovie from './Component/AddMovie';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';


function App() {
  const  [movies,setMovies] = useState(moviesData)
 const [inputSearch,setInputSearch]=useState("")
 const [inputStars,setInputStars]=useState(0)

const Add=(movie)=>
{
  setMovies([...movies,movie])
}

  return (


    <div>

<NAvBar setInputSearch={setInputSearch} setInputStars={setInputStars} />
<AddMovie Add={Add} />

<Routes >
      <Route path='/' element={<MovieList movies={movies} inputStars={inputStars} inputSearch={inputSearch}  />}/>

 </Routes >

   
   
    </div>
  )
}

export default App