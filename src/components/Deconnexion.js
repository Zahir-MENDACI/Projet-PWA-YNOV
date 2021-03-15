import React from 'react';
import {useHistory} from 'react-router-dom'
import styled from 'styled-components'
import Logout from '../svg/Logout.svg'

const Deconnexion = () =>
{
    const history = useHistory()
    const token = localStorage.getItem('token')

    const clic = () =>
    {
        localStorage.removeItem('token')
        history.push('/')
    }

    return (
        <div>
            {
                token ? (
                    <StyledLogoutIcon src={Logout} onClick={clic}/>
                ) : null
            }
        </div>
    );
};

const StyledLogoutIcon = styled.img`
    width: 20px;
`

export default Deconnexion;