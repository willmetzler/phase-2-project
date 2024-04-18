import React, {useState} from 'react'

function MovieForm ({setMovies}) {

    const [movieFormData, setMovieFormData] = useState({
        title: "",
        director: "",
        year: null,
        image: "",
        rating: null,
        review: ""
    })

    function handleSubmit (event) {
        event.preventDefault()
        fetch("http://localhost:3000/movies", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(movieFormData)
        })
        .then(res => res.json())
        .then(newMovieObj => {
            setMovieFormData({title:'', director:'', year:'', image:'', rating:'', review:''})
            setMovies(movies => [...movies, newMovieObj])
        })
    }

    


    return (
        <form onSubmit={handleSubmit} className="movie-form">

            <h2 id="log-title">Log a Film!</h2>

            <label className="movie-form-label" htmlFor="title">Title: </label>
            <input className='input-box' name="title" 
            value={movieFormData.title}
            onChange={(event) => setMovieFormData( {...movieFormData, title: event.target.value} )}
            />

            <label className="movie-form-label" htmlFor="director">Director: </label>
            <input className='input-box' name="director" 
            value={movieFormData.director}
            onChange={(event) => setMovieFormData( {...movieFormData, director: event.target.value} )}
            />

            <label className="movie-form-label" htmlFor="image">Poster Image URL: </label>
            <input className='input-box' name="image"
            value={movieFormData.image}
            onChange={(event) => setMovieFormData( {...movieFormData, image: event.target.value} )}
            />

            <label className="movie-form-label" htmlFor="year">Year: </label>
            <input className='input-box' name="year"
            type="number" 
            value={movieFormData.year}
            onChange={(event) => setMovieFormData( {...movieFormData, year: event.target.value} )}
            />
            
            <label className="movie-form-label" htmlFor="year">Rating: </label>
            <select className='input-box' name="rating"
                value={movieFormData.rating}
                onChange={(event) => setMovieFormData( {...movieFormData, rating: event.target.value} )}
            >
                <option value="">Select a rating</option>
                <option value="1">1</option>  
                <option value="1">1.5</option>  
                <option value="2">2</option>  
                <option value="2">2.5</option>  
                <option value="3">3</option>  
                <option value="3">3.5</option>  
                <option value="4">4</option>  
                <option value="4">4.5</option>  
                <option value="5">5</option>  
                <option value="5">5.5</option>  
                <option value="6">6</option>  
                <option value="6">6.5</option>  
                <option value="7">7</option>  
                <option value="7">7.5</option>  
                <option value="8">8</option>  
                <option value="8">8.5</option>  
                <option value="9">9</option>  
                <option value="9">9.5</option>  
                <option value="10">10</option>  
            </select>

            <label className="movie-form-label" htmlFor="review">Review: </label>
            <textarea className='input-box' id="review-area" name="review" 
            value={movieFormData.review}
            onChange={(event) => setMovieFormData( {...movieFormData, review: event.target.value} )}
            />

            <input id="submit-movie-form" type="submit" value="Log Film" />

        </form>
    )
}

export default MovieForm 