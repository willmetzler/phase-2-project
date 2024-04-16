import React, {useState} from "react";

function Movies ({movie, movies, setMovies, handleEdit}) {

  const [displayMode, setDisplayMode] = useState(1);

  const toggleDisplayMode = () => {
    setDisplayMode((mode) => (mode % 3) + 1);
  };

  function handleRemove() {
    console.log('Delete button clicked');
    const filteredMovies = movies.filter(m => m.id !== movie.id);
    setMovies(filteredMovies);

    fetch(`http://localhost:3000/movies/${movie.id}`, {
        method: 'DELETE'
    })
    .catch(error => console.error('Error deleting movie:', error));
}

    return (
      <div className="movie-item" onClick={toggleDisplayMode}>
      <div className="border-box">
        {displayMode === 1 && (
          <img className="posters" src={movie.image} alt={movie.title} />
        )}

        {displayMode === 2 && (
          <div className="information">
            <h1 className="title">{movie.title}</h1>
            <h3 className="director">Director: {movie.director}</h3>
            <h4 className="year">Year: {movie.year}</h4>
            <h4 className="rating">Rating: {movie.rating}</h4>
            <div className="button-container">
              <button className="editbutton" onClick={handleEdit}>
                Edit
              </button>
              <button className="deletebutton" onClick={handleRemove}>
                Remove
              </button>
            </div>
          </div>
        )}

        {displayMode === 3 && (
          <div className="information">
            <p className="review-text">{movie.review}</p>
            <div className="button-container">
              <button className="editbutton" onClick={handleEdit}>
                Edit
              </button>
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

export default Movies