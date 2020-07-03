import React from 'react';
import logo from '../images/logo.svg';
import '../style/Home.css';

function HolaMundo(nombre, edad){
  var presentacion = (<div>
    <h2>Hola, soy {nombre}</h2>
    <h3>Tengo {edad} años</h3>
  </div>
  );
  return presentacion
}

function App() {
  var nombre = "Victor Abraham"
  
    return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hola Mundo esto es el Header.
        </p>
{HolaMundo(nombre, 26)}
      </header>
    </div>
  );
}

export default App;