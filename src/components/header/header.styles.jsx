import styled from 'styled-components';
import {Link} from 'react-router-dom';
  
export const HeaderContainer = styled.div`
    height: 70px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 25px;

    @media screen and (max-width: 800px)
    {
        height: 80px;
        font-size: 11px;
        padding: 10px;
        margin-bottom: 20px;
    }
`
export const Logo = styled.h1`
    text-transform: uppercase;
    color: black;
`

export const LogoContainer = styled(Link)`
    height: 100%;
    width: 70px;
    padding: 25px;

    @media screen and (max-width: 800px)
    {
        width: 50px;
        padding: 0
    }
`

export const OptionsContainer = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;

    
`
export const OptionLink = styled(Link)`
    padding: 10px 15px;
    font-family: 'Cookie',cursive;
    cursor: pointer;

    &:hover
    {
        border-bottom:  2px solid black;
        color: red;
    }
`