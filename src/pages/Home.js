import React from 'react';
import '../style/Home.css';

//Importar componentes
import Inicio from '../components/sections/Inicio';
import Guias from '../components/sections/Guias'
import Recursos from '../components/sections/Recursos'
import Footer from  '../components/sections/Footer'

function App() {
    return (
    <>
    <Inicio/>
    <Guias/>
    <Recursos/>
    <Footer/>
    </>
  );
}
export default App;