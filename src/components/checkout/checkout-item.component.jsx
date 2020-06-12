import React from 'react';
import {connect} from 'react-redux';
import {clearItemFromCart,addItemToCart,removeItem} from '../../redux/cart/cart.actions';

import {CheckoutItemContainer, ImageContainer, Image, ProductDetails, QuantityContainer, Arrow, Value, RemoveButtonContainer} from './checkout-item.styles';

const CheckoutItem = ({cartItem,clearItem,addItemToCart,removeItem}) => {
    const {name,imageUrl,price,quantity} = cartItem;
return(
    <CheckoutItemContainer>
        <ImageContainer>
            <Image src={imageUrl} alt="item" />
        </ImageContainer>
        <ProductDetails>{name}</ProductDetails>
        <QuantityContainer>
            <Arrow onClick={() => removeItem(cartItem)}>&#10094;</Arrow>
            <Value className="value">{quantity}</Value>
            <Arrow className="arrow" onClick={() => addItemToCart(cartItem)}>&#10095;</Arrow>
        </QuantityContainer>
        <ProductDetails className="price">{price}</ProductDetails>
        <RemoveButtonContainer onClick={() => clearItem(cartItem)}>&#10005;</RemoveButtonContainer>
    </CheckoutItemContainer>
);
};

const mapDispatchToProps = (dispatch) => ({
    clearItem: (item) => dispatch(clearItemFromCart(item)),
    addItemToCart: (item) => dispatch(addItemToCart(item)),
    removeItem: (item) => dispatch(removeItem(item))
})

export default connect(null,mapDispatchToProps)(CheckoutItem);