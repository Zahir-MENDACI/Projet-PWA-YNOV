import React, {useEffect} from 'react'
import LoginForm from "../components/LoginForm";
import axios from 'axios'
import Logo from '../svg/TwitchGlitchPurple.svg'
import styled from 'styled-components'


const submit = (e, formState, setErrorMessage, history) =>
{
    e.preventDefault()
    if (!formState.username || !formState.password)
    {
        setErrorMessage('les champs ne doivent pas etre vides')
        return
    }
    axios(
        {
            method: 'POST',
            url: 'https://easy-login-api.herokuapp.com/users/login',
            data: {
                username: formState.username,
                password: formState.password
            }
        }
    ).then(res => 
        {
            localStorage.setItem('token', res.headers['x-access-token'])
            history.push('videos')
        }).catch(err =>
            {
                console.log(err)
            })
}

const Connexion = ({history}) => {
    useEffect(() => {
        const token = localStorage.getItem('token')
        if (token)
        {
            history.push('/videos')
        }

    }, [])
    return (
        <StyledBody>
            <StyledDiv>
                <StyledLogo>
                    <StyledImg src={Logo}/>
                    <StyledTitle>Se connecter à Twitch</StyledTitle>
                </StyledLogo>
                <LoginForm submit={submit}></LoginForm>
                {/* <Link to='/caracteres'> Aller à Caracteres </Link> */}
            </StyledDiv>
        </StyledBody>

    )
}

const StyledDiv = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: 90%;
    margin: auto;
    background-color: #18181B;
    padding: 50px 0
`
const StyledImg = styled.img`
    width: 50px;
    margin-left: 20px
`

const StyledLogo = styled.div`
    display: flex;
    justify-content: center;
`
const StyledTitle = styled.p`
    color: #D8D8DA;
    font-size: 2em;
    margin-left: 20px

`

const StyledBody = styled.body`
    background-color: #000;
    min-height: 100vh;
    width: 100vw;
    display: flex;
    align-content: center;
    justify-content: center;
`

export default Connexion