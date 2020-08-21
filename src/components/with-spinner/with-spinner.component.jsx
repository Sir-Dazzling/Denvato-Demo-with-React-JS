import React from 'react';

import {SpinnerContainer, SpinnerOverlay} from './with-spinner.styles';

const WithSpinner = (WrapedComponent) => 
{
    const Spinner = ({isLoading, ...otherProps}) => 
    {
        return isLoading ? (
            <SpinnerOverlay>
                <SpinnerContainer />
            </SpinnerOverlay>
        ) : (
            <WrapedComponent {...otherProps} />
        );
    };
    return Spinner;
};

export default WithSpinner;