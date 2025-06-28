import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <>
      <div
        className="notFound-wrapper"
        style={{
          position: 'static',
          margin:'1% auto',
          overflowY:'hidden',
          width: '60%',
          height: '90%',
            backgroundImage:"url('/images/Ruraljpg.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <div className='overlay'
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0,0,0,0.2)',
            zIndex: 99,
            pointerEvents: 'none'
          }}
        ></div>
        <div className='notFound-div' style={{ position: 'relative', zIndex: 2, textAlign: 'center' }}>
          <h1 style={{ color: 'white', marginBottom: '20px' }}>Not found 404</h1>
          <Link
            to="/" className='link-notFound'
            style={{
              textDecoration: 'none',
              fontSize: '1.2rem',
              padding: '10px 20px',
              border: '1px solid white',
              borderRadius: '5px',
              zIndex:' 9999'
            }}
          >
            Volver al inicio
          </Link>
        </div>
      </div>
    </>
  )
}

export default NotFound

