import React from 'react';

import './custom-button.styles.scss';

const CustomButton = ({children,isGoogleSignIn,isCartPreview,...otherProps}) => (
    <button className={`${isGoogleSignIn ? "google-sign-in" : ""} ${isCartPreview ? "cart-preview-button" : ""} custom-button`} {...otherProps}>
        {children}
    </button>
);

export default CustomButton;