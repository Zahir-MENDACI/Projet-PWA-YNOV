import React, {useState, useEffect} from 'react';
import styled from "styled-components";
import { useHistory } from "react-router-dom";



const LoginForm = ({submit}) => {

    const [formState, setFormState] = useState({username: '', password: ''})
    const [errorMessage, setErrorMessage] = useState('')
    const history = useHistory()

    return (
        <StyledForm onSubmit={e => submit(e, formState, setErrorMessage, history)}>
            <p>Sign in</p>
            <StyledInput type='text' name="username" onChange={e => setFormState({ ...formState, username: e.target.value})}></StyledInput>
            <StyledInput type='password' name="password" onChange={e => setFormState({ ...formState, password: e.target.value})}></StyledInput>
            <StyledSpan>{errorMessage}</StyledSpan>
            <StyledInput type='submit'></StyledInput>
        </StyledForm>
    );
};

const StyledSpan = styled.span`
    color: blue;
`

const StyledForm = styled.form `
    display: flex;
    flex-direction: column;
    align-items: center;
`

const StyledInput = styled.input`
    margin: 10px 0
`

export default LoginForm;