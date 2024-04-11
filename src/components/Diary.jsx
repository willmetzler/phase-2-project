import React, {useState, useEffect} from "react"
import Movies from "./Movies"

function Diary () {
    const [movies, setMovies] = useState([])

    useEffect(() => {
        fetch("http://localhost:3000/movies")
        .then(res => res.json())
        .then(movieData => setMovies(movieData))
    }, [])

    const mappedMovies = movies.map( movie => {
        return (<Movies movies={movies} movie={movie} setMovies={setMovies} />)
    })

    return (
        <>
        <h2 className="subheader">My Movies</h2>
            <div className="grid with-sidebar">
                    <div className="flex-container">
                        {mappedMovies}
                    </div>
            </div>
        </>
    )
}

export default Diary