import React from 'react';
import '../../style/Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import LogoFooter from '../../images/N12Footer.png'

class Footer extends React.Component{

    render() {
        return (
            <footer>
                <div className="zonacontac">
                    <div className="txtcontac">
                        <h3>
                        ¿Necesitas ayuda? Contáctanos.
                        </h3>
                    </div>
                    <div className="btnscontac">
                        <FontAwesomeIcon icon={faEnvelope} className="btnemail"/>
                        <FontAwesomeIcon icon={faWhatsapp} className="btnwhatsapp"/>
                    </div>
                </div>
                <div className="zonainfo">
                    <div></div>
                    <div>
                        <div className="webn12">
                            <p>www.n12.mx</p>
                            <p className="n12est">N12 Estudio® 2020</p>
                        </div>
                        <p className="Footertxt">
                            Este material ha sido elaborado por N12 Estudio® para uso exclusivo de la marca aquí mencionada. Queda estrictamente a consideración de la marca propietaria la distribución y/o reproducción de la información aquí presentada.
                        </p>
                        <div className="LogoFooter">
                            <img src={LogoFooter} href="#" alt="logotipo" />
                        </div>
                    </div>
                </div>
                <div></div>
            </footer>
        )
    }
}
export default Footer