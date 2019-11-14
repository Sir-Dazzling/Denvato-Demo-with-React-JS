import React from 'react';

import './custom-button.styles.scss';

const CustomButton = ({children,isGoogleSignIn,isCartPreview,inverted,...otherProps}) => (
    <button className={`${isGoogleSignIn ? "google-sign-in" : ""} ${isCartPreview ? "cart-preview-button" : ""} ${inverted ? "inverted" : ""} custom-button`} {...otherProps}>
        {children}
    </button>
);

export default CustomButton;