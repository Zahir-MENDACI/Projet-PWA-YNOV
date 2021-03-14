import React, {useState, useEffect} from 'react';
import styled from "styled-components";
import { useHistory } from "react-router-dom";



const LoginForm = ({submit}) => {

    const [formState, setFormState] = useState({username: '', password: ''})
    const [errorMessage, setErrorMessage] = useState('')
    const history = useHistory()
    console.log(formState)
    return (
            <StyledForm onSubmit={e => submit(e, formState, setErrorMessage, history)}>
                <StyledLabel>Identifiant</StyledLabel>
                <StyledInput type='text' name="username" onChange={e => setFormState({ ...formState, username: e.target.value})}></StyledInput>
                <StyledLabel>Mot de passe</StyledLabel>
                <StyledInput type='password' name="password" onChange={e => setFormState({ ...formState, password: e.target.value})}></StyledInput>
                <StyledSpan>{errorMessage}</StyledSpan>
                <StyledButton type='submit'>Se connecter</StyledButton>
            </StyledForm>
    );
};

const StyledSpan = styled.span`
    color: blue;
`
const StyledLabel = styled.label`
    color: #FFF;
    margin-left: 5%;
`

const StyledForm = styled.form `
    display: flex;
    flex-direction: column;
    padding: 30px 0;
`

const StyledInput = styled.input`
    margin: 10px auto;
    background-color: #464649;
    border: solid 3px #464649;
    border-radius: 5px;
    color: #FFF;
    width: 90%;
    height: 25px;
    :hover
    {
        border: solid 3px #6e6e73;
    }
    :focus {
        outline: none;
        background-color: #000;
        border: solid 3px #9C68EA;
    };
`

const StyledButton = styled.button `
    margin: auto;
    margin-top: 20px;
    width: 92%;
    height: 30px;
    background-color: #772CE8;
    border: solid 3px #772CE8;
    border-radius: 5px

`



export default LoginForm;