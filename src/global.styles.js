import {createGlobalStyle} from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    body
    {
        font-family: 'Open Sans Condensed';
        padding: 20px 60px;
        background: blanchedalmond;

        @media screen and (max-width: 800px)
        {
            //Some css here
            padding: 10px;
        }
    }

    a
    {
        text-decoration: none;
        color: black;
    }

    *
    {
        box-sizing: border-box;
    }
`;