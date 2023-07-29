import React from 'react'
import {useRef} from 'react'

import '../styles/main.css'

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
            <a href='/#'>Inicio</a>
            <a href='/#'>Sobre nosotros</a>
            <a href='/#'>Servicios</a>
            <a href='/#'>Sobre tarifa</a>
            <a href='/#'>Sobre tarifa</a>
            <a href='/#'>Contacto</a>
            <a href='/#'>Blog</a>
            <a href='/#'>Reservas</a>

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
