import React from 'react';
import '../../style/Guias.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownload } from '@fortawesome/free-solid-svg-icons'
import { Container, Row, Col } from 'reactstrap';
import Pdfn12 from '../../pdf/N12-Clientes.pdf'

function Guias() {
    return (
            <Container>
                <Row sm="1" md="2" id="guias">
                    <Col sm="12" md="6" className="guia1">
                        <div class="txtguia1">
                        <h3>GUÍAS</h3>
                        <p>01 Manual de marca</p>
                        <p>02 Guía de uso para redes sociales</p>
                        <p>03 Lorem</p>
                        </div>
                    </Col>
                    <Col sm="12" md="6" className="guia2">
                        <div class="txtguia2">
                            <h3>01</h3>
                            <div class="txtdes1">
                                <p>Manual de marca</p>
                                <a href={Pdfn12} download="N12 Clientes"><FontAwesomeIcon icon={faDownload} className="icondow1"/></a>
                            </div>
                        </div>
                        <div class="zondes1">
                            <iframe src={Pdfn12} title="title">
                            </iframe>
                        </div>
                    </Col>
                 </Row>
            </Container>
        )
    }
export default Guias