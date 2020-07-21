import React from "react";
import "../../style/Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import LogoFooter from "../../images/N12Footer.png";
import { Container, Row, Col } from "reactstrap";

class Footer extends React.Component {
  render() {
    return (
      <Container tag="footer" fluid>
        <Row sm="1" md="1" className="footern12">
          <Col sm="12" md="12" className="zonacontac">
            <Row sm="1" md="1">
              <Col sm="12" md="12" className="txtcontac">
                <h3>¿Necesitas ayuda? Contáctanos.</h3>
              </Col>
              <Col sm="12" md="12" className="btnscontac">
                <a href="https://www.facebook.com/n12estudio">
                  <FontAwesomeIcon icon={faEnvelope} className="btnemail" />
                </a>
                <a href="https://www.facebook.com/n12estudio">
                  <FontAwesomeIcon icon={faWhatsapp} className="btnwhatsapp" />
                </a>
              </Col>
            </Row>
          </Col>
          <Col sm="12" md="12" className="zonainfo">
            <Row sm="3" md="3">
              <Col sm="1" md="1"></Col>
              <Col sm="10" md="10">
                <Row xs="2" sm="2" md="2">
                  <Col sm="6" md="6" className="webn12">
                    <p>www.n12.mx</p>
                  </Col>
                  <Col sm="6" md="6" className="n12est">
                    <p>N12 Estudio® 2020</p>
                  </Col>
                  <Col xs="12" sm="12" md="12">
                    <p className="Footertxt">
                      Este material ha sido elaborado por N12 Estudio® para uso
                      exclusivo de la marca aquí mencionada. Queda estrictamente
                      a consideración de la marca propietaria la distribución
                      y/o reproducción de la información aquí presentada.
                    </p>
                  </Col>
                </Row>
              </Col>
              <Col sm="1" md="1"></Col>
            </Row>
          </Col>
          <Col sm="12" md="12" className="LogoFooter">
            <a href="https://www.facebook.com/n12estudio">
              <img src={LogoFooter} href="#" alt="logotipo" />
            </a>
          </Col>
        </Row>
      </Container>
    );
  }
}
export default Footer;
