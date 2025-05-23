import React from 'react'
import {Link} from 'react-router-dom'

const NotFound = () => {
  return (
    <>
      <h1>Not found 404</h1>
      <button>
        <Link to="/">Volver al inicio</Link>
      </button>
    </>
  )
}

export default NotFound