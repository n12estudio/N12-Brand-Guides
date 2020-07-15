import React from 'react';
import LogoPort from '../../images/Yoon Lolen.png'
import { Container, Row, Col, Button } from 'reactstrap';
import '../../style/Inicio.css';
import Navegacion from '../elements/Navegacion';

function Inicio() {
  return (
      <header id="inicio"> 
      <Navegacion/>
      <Container>        
        <Row sm="1" md="1" className="Inicio">
          <Col sm="12" md="12">
            <Row xs="1" sm="1" md="1">
              <Col  className="contini"><img src={LogoPort} href="#App-header" className="portLogo" alt="logoPort" /></Col>
              <Col className="txtini">
                <h1 className="titulo">YOON LOLEN</h1>
                <h2 className="subtitulo">Guías y recursos de marca</h2>
                <Button outline color="primary" size="lg" className="btn-compartir" href="https://www.facebook.com/n12estudio">Compartir</Button>{' '}
                <div class="flecha rebotante"></div>
              </Col>
            </Row>
          </Col>       
        </Row>
      </Container>
      </header>
    );
  }

export default Inicio
