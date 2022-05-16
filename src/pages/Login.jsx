import React from "react"
import { Link, useNavigate } from "react-router-dom"
import styled from 'styled-components'
import usuarioINFO from "../context/userINFO"
import axios from "axios"

import logo from "../assets/Logo.png"

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
            <Logo src={logo} />
            <FormLogin onSubmit={login}>
                    <input  type='email' required
                            placeholder={'EMAIL'}
                            value={loginINFO.email}
                            onChange={ (e) => setLoginINFO({...loginINFO, email: e.target.value}) }/>
                    <input  type="password" required
                            placeholder={'SENHA'}
                            value={loginINFO.password}
                            onChange={ (e) => setLoginINFO({...loginINFO, password: e.target.value}) }/>
                    <button type="submit">ENTRAR</button>     
            </FormLogin>
            <Link to={`/register`} style={{ textDecoration: 'none' }}><SpanLogin>Primeira vez? Cadastre-se!</SpanLogin></Link>
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
        background-color: #F0F4F7;
    `
const Logo = styled.img`
        width: 210px;
        height: 126px;
    `
const FormLogin = styled.form`
    width: 265px;
    height: 141px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    margin-top: 40px;
    margin-bottom: 12px;
    input{
        height: 41px;
        width: 265px;
        background-color: #FFFFFF;
        display: flex;
        align-items: center;
        border: none;
        padding-left: 15px;
        font-family: 'Roboto';
        font-size: 10px;
        font-style: normal;
        font-weight: normal;
        line-height: 10px;
        color: #1a1a1a;

        ::placeholder {
            font-family: 'Roboto';
            font-size: 10px;
            font-style: normal;
            font-weight: normal;
            line-height: 10px;
            color: #1a1a1a;
        }
    }
    button{
        height: 41px;
        width: 265px;
        background-color: #FFFFFF;
        display: flex;
        align-items: center;
        justify-content: center;
        border: none;
        background-color: #000000;
        font-family: 'Roboto';
        font-size: 10px;
        font-style: normal;
        font-weight: normal;
        line-height: 10px;
        color: #FFFFFF;
    }
`
const SpanLogin = styled.span`
        font-family: 'Roboto';
        font-size: 10px;
        font-style: normal;
        font-weight: normal;
        line-height: 10px;
        color: #1a1a1a;
`