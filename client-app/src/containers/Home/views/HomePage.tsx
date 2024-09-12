import React from "react"
import { Button } from "@mui/material"
import { Link } from "react-router-dom"
import GenreView from "../../Genres/views/GenreView"

const HomePage = () => {
  return (
    <>
      <div className="bg-info">
        <Link to="/genre">Genre</Link>
      </div>
    </>
  )
}

export default HomePage