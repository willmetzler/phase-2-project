import {useState} from 'react'

function UnwatchedMovie ({unwatchedMovie ,unwatchedMovies, setUnwatchedMovies}) {

    const [showImage, setShowImage] = useState(true)

    function handleClick(){
        setShowImage(!showImage)
    }

    function handleRemove(event) {
      event.stopPropagation()
      const filteredMovies = unwatchedMovies.filter(m => m.id !== unwatchedMovie.id)
      setUnwatchedMovies(filteredMovies)

      fetch(`http://localhost:3000/watchlisted/${unwatchedMovie.id}`, {
          method: 'DELETE'
      })
  }


    return (
        <div onClick={handleClick} className="movie-item">

      {
      showImage 
      ? 
      <img className="posters" onClick={handleClick} src={unwatchedMovie.image} alt={unwatchedMovie.title} />
      : 
      <div className="information">
        <h1 className="title" onClick={handleClick}>{unwatchedMovie.title}</h1>
        <h3 className="director" onClick={handleClick}>{unwatchedMovie.director}</h3>
        <h4 className="year" onClick={handleClick}>{unwatchedMovie.year}</h4>
        <br/>
        <button className='logbutton'><strong>Log Film</strong></button>
        <br/>
        <br/>
        <button onClick={handleRemove} className='deletebutton'><strong>Remove</strong></button>
      </div>
      }

    </div>
    )
}

export default UnwatchedMovie