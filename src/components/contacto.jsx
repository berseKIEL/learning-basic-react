import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';

import { Contacto } from '../models/contacto.class'

const ContactoComponent = ({ contacto }) => {

    const [conectividad, setConectividad] = useState(contacto.conectado);

    const cambiarConectividad = () => {
        contacto.conectado = !conectividad;
        setConectividad(!conectividad);
    }

    return (
        <div>
            <h2>
                Contacto: {contacto.nombre} {contacto.apellido}
            </h2>
            <h3>
                Correo: {contacto.email}
            </h3>
            <h4>
                Estado: {conectividad === true ?
                    <p style={{ color: 'green', display: 'inline-block', margin: 0 }}>Conectado</p> :
                    <p style={{ color: 'red', display: 'inline-block', margin: 0 }}>No conectado</p>}
            </h4>
            <button onClick={cambiarConectividad}>{conectividad ? 'Desconectar' : 'Conectar'} </button>
        </div>
    );
};


ContactoComponent.propTypes = {
    conectado: PropTypes.instanceOf(Contacto)
};


export default ContactoComponent;
