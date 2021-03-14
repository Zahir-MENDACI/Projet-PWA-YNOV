import React from 'react';
import Logo from '../TwitchGlitchPurple.svg'
import Tab from '../Tab.svg'
import Loupe from '../Loupe.svg'
import Logout from '../Logout.svg'
import styled from 'styled-components'
import Deconnexion from './Deconnexion';

const Navbar = () => {
    return (
        <StyledContainer>
            <StyledDiv>
                <StyledLogo src={Logo} />
                <StyledTabIcon src={Tab} />
            </StyledDiv>
            <StyledDiv>
                <StyledSearchIcon src={Loupe} />
                <Deconnexion/>
            </StyledDiv>
        </StyledContainer>
    );
};

const StyledContainer = styled.div`
    display: flex;
    justify-content: space-between;
    background-color: #18181B;
    color: #FFF;
    padding: 15px 20px;
    top: 0;
    box-shadow: 0px 1px 10px #000;
`
const StyledDiv = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 20px;
`
const StyledLogo = styled.img`
    width: 20px;
`
const StyledTabIcon = styled.img`
    transform: scaleX(-1);
`
const StyledSearchIcon = styled.img`
    width: 20px;
`
const StyledLogoutIcon = styled.img`
    width: 20px;
`

export default Navbar;