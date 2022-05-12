import React from "react"
import { Link, useNavigate } from "react-router-dom"
import styled from 'styled-components'
import usuarioINFO from "../context/userINFO"
import axios from "axios"

export default function Login(){

    const {userINFO, setUserINFO} = React.useContext(usuarioINFO)

    const [loginINFO, setLoginINFO] = React.useState({  email: '',
                                                        password: ''})
    const navigate = useNavigate()

    function login(event){
        event.preventDefault();
        const URL = 'https://project-wpstore.herokuapp.com/'
        const promise = axios.post(URL, {...loginINFO})
        promise.then( (res) => {setUserINFO(res.data)
                                navigate('/home')})
        promise.catch( () => {alert('Usuario inexistente ou Senha errada')} )
    }

    return (
        <LoginHTML>
            <StoreName>WPStore</StoreName>
            <FormLogin onSubmit={login}>
                    <input  type='email' required
                            placeholder={'  Email'}
                            value={loginINFO.email}
                            onChange={ (e) => setLoginINFO({...loginINFO, email: e.target.value}) }/>
                    <input  type="password" required
                            placeholder={'  Senha'}
                            value={loginINFO.password}
                            onChange={ (e) => setLoginINFO({...loginINFO, password: e.target.value}) }/>
                    <button type="submit">Entrar</button>     
            </FormLogin>
            <Link to={`/register`}> <SpanLogin> Primeira vez? Cadastre-se! </SpanLogin> </Link>
        </LoginHTML>
        )
}

const LoginHTML = styled.main`
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 100vw;
        height: 100vh;
        background-color: #EFEFEF;
    `
const StoreName = styled.h1`
        font-family: 'Alfa Slab One', cursive;
        font-size: 30px;
        font-weight: 700;
        line-height: 30px;
        letter-spacing: 0em;
        color: #205375;
    `
const FormLogin = styled.form`
    display: flex;
    flex-direction: column;
    margin: 20px 0 40px 0;
    padding: 40px 20px 40px 20px;
    border-radius: 10px;
    background-color: #F66B0E;
    input{
        height: 58px;
        width: 326px;
        left: 25px;
        top: 233px;
        border-radius: 5px;
        border: none;
        margin-bottom: 15px;
    }
    button{
        height: 46px;
        width: 326px;
        left: 23px;
        top: 375px;
        border-radius: 5px;
        background-color: #205375;
        font-family: 'Alfa Slab One', cursive;
        font-size: 20px;
        font-weight: 700;
        line-height: 23px;
        letter-spacing: 0em;
        color: #fff;
        border: none;
    }
`
const SpanLogin = styled.span`
    font-size: 15px;
    font-weight: 700;
    line-height: 30px;
    letter-spacing: 0em;
    text-decoration: none;
    color: #112B3C;
`
    
