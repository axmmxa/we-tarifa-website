import React from 'react'

import './styles/Contacto.css'

const Contacto = () => {
  return (
    <div className='contacto'>
      <h1>Contáctanos</h1>

      <iframe className='maps' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3227.3223097391647!2d-5.606946724197432!3d36.012421972482215!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd0c8ef805400b25%3A0xebaa75920305599f!2sC.%20Sant%C3%ADsima%20Trinidad%2C%2016%2C%2011380%20Tarifa%2C%20C%C3%A1diz!5e0!3m2!1sde!2ses!4v1691275504713!5m2!1sde!2ses"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade">

      </iframe>
    </div>
  )
}

export default Contacto
