import React, {useState} from "react";

function Movies ({movie, movies, setMovies}) {

    const [showImage, setShowImage] = useState(true)

    function handleClick(){
        setShowImage(!showImage)
    }

    return (
        <div className="movie-item">

      {
      showImage 
      ? 
      <img className="posters" onClick={handleClick} src={movie.image} alt={movie.title} />
      : 
      <>
      <div className="information">
        <h1 className="title" onClick={handleClick}>{movie.title}</h1>
        <h2 className="director" onClick={handleClick}>{movie.director}</h2>
        <h3 className="year" onClick={handleClick}>{movie.year}</h3>
        <h3 id="movie-rating" onClick={handleClick}>{movie.rating}</h3>
        <button className='editbutton'><strong>Edit</strong></button>
        <button className='deletebutton'><strong>Remove</strong></button>
      </div>
        <p id="review-text" onClick={handleClick}>{movie.review}</p>
    </>
      }

    </div>
    )
}

export default Movies