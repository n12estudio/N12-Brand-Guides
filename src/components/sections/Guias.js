import React from 'react';
import '../../style/Guias.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFilePdf } from '@fortawesome/free-solid-svg-icons'
import { faDownload } from '@fortawesome/free-solid-svg-icons'

class Guias extends React.Component{

    render() {
        return (
            <section id="guias">
            <div id="guia1">
                <div class="txtguia1">
                    <h3>GUÍAS</h3>
                    <p>01 Manual de marca</p>
                    <p>02 Guía de uso para redes sociales</p>
                    <p>03 Lorem</p>
                </div>
            </div>
            <div id="guia2">
                <div class="txtguia2">
                    <h3>01</h3>
                    <div class="txtdes1">
                        <p>Manual de marca</p>
                        <FontAwesomeIcon icon={faDownload} className="icondow1"/>
                    </div>
                </div>
                <div class="zondes1">
                    <FontAwesomeIcon icon={faFilePdf}/>
                </div>
            </div>
            </section>
        )
    }
}
export default Guias