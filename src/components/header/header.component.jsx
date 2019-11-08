import React from 'react';
import {Link} from 'react-router-dom';

import './header.styles.scss';

const Header = () => (
    <div className="header">
        <Link to="/" className="logo-container">
            <h1 className="logo">Denvato</h1>
        </Link>
        <div className="options">
            <Link to="/shop" className="option">
                SHOP
            </Link>
            <Link to="/shop" className="option">
                CONTACT
            </Link>
            <Link to="/signin" className="option">
                SIGN IN
            </Link>
        </div>
    </div>
)

export default Header;