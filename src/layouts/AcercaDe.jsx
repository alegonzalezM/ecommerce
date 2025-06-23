import React from 'react'
import Nav from '../components/Nav'
import Header from '../components/Header';
import Footer from '../components/Footer';

const AcercaDe=() => { 

return (
    <>
        <div className='acercaDe-container' style={{padding:'20px' }}>
<Header/>
    <Nav />
    <h1 style={{textAlign:'left', margin:'30px 5%'}}>Sobre nosotros: </h1>
    <p style={{width:'70%', margin:'auto'}}>
       En URBAN BIKES, no solo vendemos bicicletas: vivimos el ciclismo.
      Somos un equipo de apasionados por las dos ruedas que desde hace 35 trabaja con dedicación para ofrecer a nuestros clientes lo mejor en movilidad, deporte y aventura.
    </p>
      <p style={{width:'60%', margin:'auto'}}>
        Nuestra historia comenzó con una simple idea: crear un espacio donde cada ciclista —principiante o profesional— se sienta acompañado, asesorado y bien equipado.
        Ofrecemos productos de calidad, servicio técnico especializado y un trato humano, porque creemos que una buena experiencia sobre la bici comienza mucho antes de subirte a ella.
    </p>
      <p style={{width:'70%', margin:'auto'}}>
        Nos mueve la pasión por lo que hacemos y el compromiso con cada persona que confía en nosotros.
    </p>
      <p style={{width:'60%', margin:'auto', marginBottom:'1.5rem'}}>
       🚴‍♂️ ¡Te esperamos en el taller, en la tienda o en la próxima salida grupal!
    </p>
          <Footer/>
        </div>
        </>
    )
}
 export default AcercaDe