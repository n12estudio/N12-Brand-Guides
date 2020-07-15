import React from 'react';
import '../../style/Recursos.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownload } from '@fortawesome/free-solid-svg-icons'
import { Container, Row, Col } from 'reactstrap';
import Pdfn12 from '../../pdf/N12-Clientes.pdf'

function Recursos() {
    return (
            <Container>
                <Row sm="1" md="2" id="recursos">
                    <Col sm="12" md="6" className="recurso1">
                        <div class="txtrecur1">
                        <h3>RECURSOS</h3>
                        <p>01 Logotipos</p>
                        <p>02 Texturas complementarias</p>
                        </div>
                    </Col>
                    <Col sm="12" md="6" className="recurso2">
                        <div class="txtrecur2">
                        <h3>01</h3>
                        <div class="txtdes1">
                            <p>Logotipos</p>
                            <a href={Pdfn12} download="N12 Clientes"><FontAwesomeIcon icon={faDownload} className="icondow2"/></a>
                        </div>
                        </div>
                        <div class="zondes2">
                        <iframe src={Pdfn12} title="title">
                        </iframe>
                        </div>
                    </Col>
                </Row>
            </Container>
        )
    }
export default Recursos