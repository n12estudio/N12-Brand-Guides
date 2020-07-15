import React from 'react';
import '../style/Home.css';
import {Inicio, Guias, Recursos, Footer} from '../components/sections/index'



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