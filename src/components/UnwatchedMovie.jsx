import {useState} from 'react'

function UnwatchedMovie ({unwatchedMovie ,unwatchedMovies, setUnwatchedMovies}) {

    const [showImage, setShowImage] = useState(true)

    function handleClick(){
        setShowImage(!showImage)
    }


    return (
        <div className="movie-item">

      {
      showImage 
      ? 
      <img className="posters" onClick={handleClick} src={unwatchedMovie.image} alt={unwatchedMovie.title} />
      : 
      <div className="information">
        <h1 className="title" onClick={handleClick}>{unwatchedMovie.title}</h1>
        <h2 className="director" onClick={handleClick}>{unwatchedMovie.director}</h2>
        <h3 className="year" onClick={handleClick}>{unwatchedMovie.year}</h3>
        <br/>
        <button className='logbutton'><strong>Log Film</strong></button>
        <br/>
        <br/>
        <button className='deletebutton'><strong>Remove</strong></button>
      </div>
      }

    </div>
    )
}

export default UnwatchedMovie