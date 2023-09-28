import React from 'react'
import { Button} from 'react-bootstrap'
import './MovieCard.css';
import ReactStars from 'react-stars';

export const MovieCard = ({movie}) => {


  return (
   <div>

    <div className="row">
  
  <div className="col-3 col-m-4 col-s-6">
    <div className="card-movie" style={{ backgroundImage: `url(${movie.posterUrl})`}}>
      <div className="description-container">
        <p>{movie.title}</p>
          <p>{movie.description}</p>
          <p>  <ReactStars
  count = { 5 } 
  value = { movie.rate } 
  size = { 24 } 
  edtit={false}
half={false}
  color2 = { ' #ffd700 ' }/> </p>
          <p>   <Button href={movie.trailer} variant="primary">watch trailer</Button>
</p>
          
      </div>
    </div>
  </div>
  
 

</div>
</div>
  )
}

export default MovieCard