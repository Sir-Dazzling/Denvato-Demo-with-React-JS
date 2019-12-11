import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import Logo from '../../images/paymentLogo.jpg';

const StripeCheckoutButton = ({price})  => 
{
    const priceForStripe = price * 100;
    const publishableKey = "pk_test_d9cIUqdEOCLFVAm7PaWC5GT3004txLGt70"

    const onToken = (token) => 
    {
        console.log(token);
        alert("Payment Was Successful")
    }

    return(
        <StripeCheckout
            label="Pay Now"
            name="Denvato Stores"
            billingAddress
            shippingAddress
            image={Logo}
            description={`Your Total Bill is at $${price}`}
            amount={priceForStripe}
            panelLabel="Pay Now"
            token={onToken}
            stripeKey={publishableKey}
        />
    )
} 

export default StripeCheckoutButton;