import React from 'react';
import { Link } from 'react-router-dom';

import { Divnavbar, Navstyle } from '../styles/template';

export const Navbar = () => {
    return (
        <Divnavbar>
            <div className="header">
                <Navstyle>
                <Link className="link" to="/guajolotas">Guajolotas</Link>
                <Link className="link" to="/bebidas">Bebidas</Link>
                <Link className="link" to="/tamales">Tamales</Link>
                </Navstyle>
            </div>
            <hr/>
        </Divnavbar>
    )
}
