import React from 'react';
import '../style/Home.css';

//Importar componentes
import Header from '../components/sections/Header';

function App() {
    return (
    <>
    <div className="App">
       <header id="inicio">
       <Header />
      </header>
    </div>
      <section id="guias">
        <div id="heading"></div>
      </section>
      <section id="recursos">
        <div id="heading"></div>
      </section>
    </>
  );
}

export default App;