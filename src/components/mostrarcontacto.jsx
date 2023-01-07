import React from 'react';

import { Contacto } from '../models/contacto.class'

import ContactoComponent from './contacto'

const MostrarContacto = () => {

    const defaultContacto = new Contacto('Exequiel','Barco','exebarco280320@gmail.com',true)

    return (
        <div>
            <ContactoComponent
            contacto={defaultContacto}>
            </ContactoComponent>
        </div>
    );
}

export default MostrarContacto;
