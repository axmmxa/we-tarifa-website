

import Navbar from './components/Navbar';

import Inicio from './components/Inicio'
import SobreNosotros from './components/SobreNosotros';
import Servicios from './components/Servicios';
import  SobreTarifa from './components/SobreTarifa';
import Cantacto from './components/Contacto'
import Bloq from './components/Bloq'
import Reservas from './components/Reservas'

import {Link, Route, Routes} from 'react-router-dom' 
import Footer from './components/Footer';



function App() {
  return (
    <>
    <Navbar></Navbar>
    
    <Routes>
      <Route path='/' element={<Inicio></Inicio>}></Route>
      <Route path='/SobreNosotros' element={<SobreNosotros></SobreNosotros>}></Route>
      <Route path='/Servicios' element={<Servicios></Servicios>}></Route>
      <Route path='/SobreTarifa' element={<SobreTarifa></SobreTarifa>}></Route>
      <Route path='/Contacto' element={<Cantacto></Cantacto>}></Route>
      <Route path='/Bloq' element={<Bloq></Bloq>}></Route>
      <Route path='/Reservas' element={<Reservas></Reservas>}></Route>

    </Routes>

    <Footer></Footer>
    
    </>
    );
}

export default App;
