import React from 'react';
import '../../style/Navegacion.css';
import { Container, Row, Col } from 'reactstrap';

function Navegacion() {
    return (
            <Container>
                <Row>
                    <Col sm="1" md="1" ></Col>
                    <Col sm="10" md="10">
                        <nav>
                            <div id="menu">
                            <ul>
                                <li><a href="#inicio">Inicio</a></li>
                                <li><a href="#guias">Guías</a></li>
                                <li><a href="#recursos">Recursos</a></li>
                            </ul>
                            </div>
                        </nav>
                    </Col>
                    <Col sm="1" md="1"></Col>
                    
            </Row>
            </Container>
        )
    }
export default Navegacion