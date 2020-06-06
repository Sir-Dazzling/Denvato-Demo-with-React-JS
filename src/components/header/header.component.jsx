import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {auth} from '../../firebase/firebase.utils'; 
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import {selectCartHidden} from '../../redux/cart/cart.selectors';
import {selectCurrentUser} from '../../redux/user/user.selectors';

import {HeaderContainer, LogoContainer, Logo, OptionsContainer, OptionLink} from './header.styles';

const Header = ({currentUser,hidden}) => (
    <HeaderContainer>
        <LogoContainer>
            <Logo>Denvato</Logo>
        </LogoContainer>
        <OptionsContainer>
            <OptionLink to="/">
                HOME
            </OptionLink>
            <OptionLink to="/shop">
                SHOP
            </OptionLink>
            <OptionLink to="/contact">
                CONTACT
            </OptionLink>
            {
                //To check if user is currently signed in and display conditionally sign in or sign out. 
                currentUser ? (
                    <OptionLink as = "div" onClick={() => auth.signOut()}>SIGN OUT</OptionLink>
                )
                : (
                    <OptionLink to="/signin">SIGN IN</OptionLink>
                )
            }
            <CartIcon />
        </OptionsContainer>
        {hidden ? null:<CartDropdown />}
    </HeaderContainer>
);

const mapStateToProps =  createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
});

export default connect(mapStateToProps)(Header);