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
    <form onSubmit={handleSubmit} className="edit-movie-form">
      <h2>Edit Movie</h2>

      <label htmlFor="title">Title: </label>
      <input
        type="text"
        name="title"
        value={editedMovie.title}
        onChange={handleChange}
      />

      <label htmlFor="director">Director: </label>
      <input
        type="text"
        name="director"
        value={editedMovie.director}
        onChange={handleChange}
      />

      <label htmlFor="year">Year: </label>
      <input
        type="number"
        name="year"
        value={editedMovie.year}
        onChange={handleChange}
      />

      <label htmlFor="image">Image URL: </label>
      <input
        type="text"
        name="Image URL"
        value={editedMovie.image}
        onChange={handleChange}
      />

      <label htmlFor="rating">Rating: </label>
      <select name="rating"
            value={editedMovie.rating}
            onChange={handleChange}
        >
            <option value="1">1</option>  
            <option value="2">2</option>  
            <option value="3">3</option>  
            <option value="4">4</option>  
            <option value="5">5</option>  
            <option value="6">6</option>  
            <option value="7">7</option>  
            <option value="8">8</option>  
            <option value="9">9</option>  
            <option value="10">10</option>  
        </select>


        <label htmlFor="review">Review: </label>
        <input
        type="text"
        name="review"
        value={editedMovie.review}
        onChange={handleChange}
      />


      {/* Other input fields for year, image, rating, review */}

      <button type="submit">Save Changes</button>
    </form>
  );
}

export default EditMovies;

/*
        <label className="edit-form-label" htmlFor="image">Poster Image URL: </label>
        <input name="image"
        value={editFormData.image}
        onChange={(event) => setEditFormData( {...editFormData, image: event.target.value} )}
        />

        <label className="edit-form-label" htmlFor="year">Year: </label>
        <input name="year"
        type="number" 
        value={editFormData.year}
        onChange={(event) => setEditFormData( {...editFormData, year: event.target.value} )}
        />

        <label className="edit-form-label" htmlFor="year">Rating: </label>
        <select name="rating"
            value={editFormData.rating}
            onChange={(event) => setEditFormData( {...editFormData, rating: event.target.value} )}
        >
            <option value="">Select a rating</option>
            <option value="1">1</option>  
            <option value="2">2</option>  
            <option value="3">3</option>  
            <option value="4">4</option>  
            <option value="5">5</option>  
            <option value="6">6</option>  
            <option value="7">7</option>  
            <option value="8">8</option>  
            <option value="9">9</option>  
            <option value="10">10</option>  
        </select>

        <label className="edit-form-label" htmlFor="review">Review: </label>
        <textarea id="edit-area" name="review" 
        value={editFormData.review}
        onChange={(event) => setEditFormData( {...editFormData, review: event.target.value} )}
        />

        <input onClick={handleEditSubmit} id="submit-edit-movie-form" type="submit" value="Confirm" />

    </form>
    )
}
export default EditMovies */