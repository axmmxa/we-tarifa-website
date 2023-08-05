import React from 'react'

import './styles/Inicio.css'

import foto from '../media/inicio.jpeg'


const Inicio = () => {
  return (
  
    <div className='Inicio'>

      <h1> Qué ofrecemos</h1>

      <div className='multi-text-box'>

           <div className='single-text'>
              <p>
                <b>1. Experiencia y Conocimiento Local:</b> 
                Nuestro equipo cuenta con una amplia 
                experiencia en la industria de alojamientos turísticos en Tarifa. Conocemos
                en profundidad el mercado local y las tendencias turísticas, lo que nos permite 
              ofrecerte soluciones adaptadas a tus necesidades específicas como propietario
          </p>
          </div>

          <div className='single-text'>
            <p>
              <b> 2. Gestión Integral:</b>
                Nos ocupamos de todos los aspectos de la gestión de tus alojamientos 
                en Tarifa, desde la promoción y reservas hasta la limpieza, el mantenimiento y la atención 
                a los huéspedes. Nuestra gestión integral te brinda tranquilidad y te permite disfrutar de 
                los beneficios de ser anfitrión sin preocupaciones. 
            </p>
          </div>

          <div className='single-text'>
            <p>
            <b> 3. Tarifas Estratégicas:</b>
            Establecemos tarifas competitivas y estratégicas basadas en análisis
            de mercado y demanda, para asegurar una ocupación óptima y rentable de tus propiedades en Tarifa.
            </p>
        </div>

      

      
    </div>

    <img src={foto} ></img>

    <div className='big-text'>
    Confía en nosotros para gestionar profesionalmente tu vivienda vacacional en Tarifa y descubre cómo podemos
     potenciar tus propiedades y convertirte en un anfitrión exitoso en este hermoso destino turístico. Nuestro 
     enfoque es brindarte tranquilidad y excelencia en cada paso del camino. ¡Contacta con nosotros hoy mismo y 
     descubre todas las ventajas que te ofrecemos!
    </div>

      <button></button>

  </div>
    
  );
}

export default Inicio;
