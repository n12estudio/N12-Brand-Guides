import React from 'react';
import '../../style/Recursos.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFilePdf } from '@fortawesome/free-solid-svg-icons'
import { faDownload } from '@fortawesome/free-solid-svg-icons'

class Recursos extends React.Component{

    render() {
        return (
            <section id="Recursos">
            <div id="recurso1">
                <div class="txtrecur1">
                    <h3>RECURSOS</h3>
                    <p>01 Logotipos</p>
                    <p>02 Texturas complementarias</p>
                </div>
            </div>
            <div id="recurso2">
                <div class="txtrecur2">
                    <h3>01</h3>
                    <div class="txtdes1">
                        <p>Logotipos</p>
                        <FontAwesomeIcon icon={faDownload} className="icondow2"/>
                    </div>
                </div>
                <div class="zondes2">
                    <FontAwesomeIcon icon={faFilePdf}/>
                </div>
            </div>
            </section>
        )
    }
}
export default Recursos