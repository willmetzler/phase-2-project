import {useState} from 'react'

function UnwatchedMovie ({unwatchedMovie ,unwatchedMovies, setUnwatchedMovies}) {

    const [displayMode, setDisplayMode] = useState(1);

    const toggleDisplayMode = () => {
      setDisplayMode((mode) => (mode % 2) + 1);
    };

    function handleRemove(event) {
      event.stopPropagation()
      const filteredMovies = unwatchedMovies.filter(m => m.id !== unwatchedMovie.id)
      setUnwatchedMovies(filteredMovies)

      fetch(`http://localhost:3000/watchlisted/${unwatchedMovie.id}`, {
          method: 'DELETE'
      })
  }


  return (
    <div className="movie-item" onClick={toggleDisplayMode}>
    <div className={`border-box mode-${displayMode}`}>
      {displayMode === 1 && (
        <img className="posters" src={unwatchedMovie.image} alt={unwatchedMovie.title} />
      )}

      {displayMode === 2 && (
        <div className="information">
          <h1 className="title">{unwatchedMovie.title}</h1>
          <h3 className="director">Director: {unwatchedMovie.director}</h3>
          <h4 className="year">Year: {unwatchedMovie.year}</h4>
          <div className="button-container">
            <button className="deletebutton" onClick={handleRemove}>
              Remove
            </button>
          </div>
        </div>
      )}
    </div>
  </div>
);
}

export default UnwatchedMovie