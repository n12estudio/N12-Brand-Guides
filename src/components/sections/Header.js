import React from 'react';
import Logotipo from '../../images/Logo N12.png'
import LogoPort from '../../images/Yoon Lolen.png'
import '../../style/Header.css';

class Header extends React.Component{

  render() {
    return (
      <>
        <nav>
          <div id="marca">
            <div id="logo"><a href="#inicio"><img src={Logotipo} href="#inicio" className="Navlogo" alt="logotipo" /></a></div>
            <div id="txt-marca">N12 Estudio</div>
          </div>
          <div id="menu">
            <ul>
              <li><a href="#inicio">Inicio</a></li>
              <li><a href="#guias">Guías</a></li>
              <li><a href="#recursos">Recursos</a></li>
            </ul>
          </div>
        </nav>
        <div id="portada">
          <div id="head-line">
            <img src={LogoPort} href="#App-header" className="portLogo" alt="logoPort" />
            <h1 className="titulo">YOON LOLEN</h1>
            <h2 className="subtitulo">Guías y recursos de marca</h2>
            <a className="btn-compartir" href="#guias">Compartir</a>
            <div class="flecha rebotante"></div>
          </div>
        </div>
      </> 
    );
  }
}

export default Header