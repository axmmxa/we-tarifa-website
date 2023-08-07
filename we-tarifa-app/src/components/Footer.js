import React from 'react'

import'./styles/Footer.css'
import { FaFacebook, FaInstagram } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='Footer'>
      <div className='legal'>
        <p>© WE TARIFA CIF J13906029 | Todos los derechos reservados</p>
        <a>Cookies</a>
      </div>

      <div className='social-links'>
        <a><FaFacebook className='icon'></FaFacebook></a>
        <a><FaInstagram className='icon'></FaInstagram></a>
      </div>
    
    </div>
  )
}

export default Footer
