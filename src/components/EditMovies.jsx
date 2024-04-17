import React, { useState } from "react";

function EditMovies({ movie, onSubmit }) {
  const [editedMovie, setEditedMovie] = useState({
    id: movie.id,
    title: movie.title,
    director: movie.director,
    year: movie.year,
    image: movie.image,
    rating: movie.rating,
    review: movie.review,
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setEditedMovie((prevMovie) => ({
      ...prevMovie,
      [name]: value,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    onSubmit(editedMovie);
  }

  return (
    <div id="edit-border">
      <form onSubmit={handleSubmit} className="edit-form">
        <h2>Edit Movie</h2>
        <div className="form-row">
          <div className="form-column">
            <div className="form-group">
              <label htmlFor="title">Title: </label>
              <input
                type="text"
                name="title"
                value={editedMovie.title}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="director">Director: </label>
              <input
                type="text"
                name="director"
                value={editedMovie.director}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="rating">Rating: </label>
              <select
                name="rating"
                value={editedMovie.rating}
                onChange={handleChange}
              >
                {[...Array(10)].map((_, index) => (
                  <option key={index} value={index + 1}>
                    {index + 1}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="form-column">
            <div className="form-group">
              <label htmlFor="year">Year: </label>
              <input
                type="number"
                name="year"
                value={editedMovie.year}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="image">Image URL: </label>
              <input
                type="text"
                name="image"
                value={editedMovie.image}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="form-column">
            <div className="form-group">
              <label htmlFor="review">Review: </label>
              <textarea
                name="review"
                value={editedMovie.review}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>
        <button type="submit">Save Changes</button>
      </form>
    </div>
  );
}

export default EditMovies;