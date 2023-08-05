import React from 'react'
import {useRef} from 'react'
import {Link} from 'react-router-dom'

import './styles/main.css'

import{FaBars, FaTimes} from 'react-icons/fa'

import logo from '../media/logo.PNG'


const Navbar = () => {

    const navRef = useRef()

    const showNavbar = () => {
        navRef.current.classList.toggle('responsive_nav')
        console.log("Test")
    }

  return (
    <header>

        <img src={logo}></img>
    
        <nav ref={navRef}>

            
            <a ><Link to='/'>Inicio</Link></a>
            <a ><Link to='/SobreNosotros'>SobreNosotros</Link></a>
            <a ><Link to='/Servicios'>Servicios</Link></a>
            <a ><Link to='/SobreTarifa'>SobreTarifa</Link></a>
            <a ><Link to='/Contacto'>Contacto</Link></a>
            <a ><Link to='/Bloq'>Bloq</Link></a>
            <a ><Link to='/Reservas'>Reservas</Link></a>
            

            <button className='nav-btn nav-close-btn' onClick={showNavbar}>
                <FaTimes></FaTimes>
            </button>
        </nav>

        <button className='nav-btn' onClick={showNavbar}>
            <FaBars></FaBars>
        </button>

    </header>
  )
}

export default Navbar
