import { Outlet } from 'react-router-dom'
import React from 'react'
import Navbar from './Navbar'

function App() {


  return (
    <div>
      <Navbar />
      <div className="main-header">
        <img id="main-logo" width={170} height={170} src="src/assets/letterboxdinlogofinal.png" />
        <h1 id="main-title" >Letterboxd In</h1>
      </div>

      <Outlet />

    </div>
  )
}

export default App

// routing --> multiple pages

// server --> json-server

// RESTUL ROUTES

// GET /movies --> data for ALL movies 
// GET /movies/1 --> data for the first movie (or 2nd? if 0 indexed)
// POST /movies --> create data for a movie
// PATCH /movies/1 --> update date for a movie w/ id of 1
// DELETE /movies/1 --> delete a movie w/ id of 1


// FRONTEND 
// GET /home --> everything