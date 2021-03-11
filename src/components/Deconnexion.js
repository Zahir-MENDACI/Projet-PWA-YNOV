import React from 'react';
import {useHistory} from 'react-router-dom'
import styled from 'styled-components'

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
                    <Button onClick={clic}>Deconnexion</Button>
                ) : null
            }
        </div>
    );
};

const Button = styled.button`

`

export default Deconnexion;