import React from 'react';

import {CartItemContainer, Image, ItemDetailsContainer, Info} from './cart-item.styles';

const CartItem = ({item: {imageUrl,price,name,quantity}}) => (
    <CartItemContainer>
      <Image src={imageUrl} alt="item" />
      <ItemDetailsContainer>
        <Info>{name}</Info>
        <Info>{quantity} x ${price}</Info>
      </ItemDetailsContainer>
    </CartItemContainer>
);

export default CartItem;