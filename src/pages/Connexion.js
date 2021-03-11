import React, {useEffect} from 'react'
import { Link } from "react-router-dom";
import LoginForm from "../components/LoginForm";
import axios from 'axios'


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
            <>
                <LoginForm submit={submit}></LoginForm>
                {/* <Link to='/caracteres'> Aller à Caracteres </Link> */}
            </>
    )
}

export default Connexion