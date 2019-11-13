import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {auth} from '../../firebase/firebase.utils'; 

import './header.styles.scss';

const Header = ({currentUser}) => (
    <div className="header">
        <Link to="/" className="logo-container alert">
            <h1 className="logo">Denvato</h1>
        </Link>
        <div className="options">
            <Link to="/" className="option">
                HOME
            </Link>
            <Link to="/shop" className="option">
                SHOP
            </Link>
            <Link to="/contact" className="option">
                CONTACT
            </Link>
            {
                //To check if user is currently signed in and display conditionally sign in or sign out. 
                currentUser ?
                <div className="option" onClick={() => auth.signOut()}>SIGN OUT</div>
                :
                <Link to="/signin" className="option">SIGN IN</Link>
            }
        </div>
    </div>
);

const mapStateToProps = (state) => ({
    currentUser: state.user.currentUser
});

export default connect(mapStateToProps)(Header);