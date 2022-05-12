import React from "react"
import { Link, useNavigate } from "react-router-dom"
import styled from 'styled-components'
import usuarioINFO from "../context/userINFO"
import axios from "axios"
import Items from "../components/Items"

import logo from "../assets/Logo.png"


export default function Register(){
    const navigate = useNavigate()
    
    const [registerINFO, setRegisterINFO] = React.useState({name: '',
                                                            email: '',
                                                            password: '',
                                                            confirmPassword: ''})                                              
                                                            
    console.log(registerINFO)
    function register(event){
        event.preventDefault()
        if(registerINFO.password !== registerINFO.confirmPassword){
            alert('as senhas nao sao iguais')
            setRegisterINFO({...registerINFO, password:'', confirmPassword: ''})
            return
        }
        const URL = 'https://project-wpstore.herokuapp.com/signup'
        const promise = axios.post(URL, {...registerINFO})
        promise.then( (res) => {console.log(res.datamac)
                                navigate('/')} )
        promise.catch( (err) => {alert('Email Já Registrado: ')
                                console.log(err)} )
    }

    return(
        <RegisterHTML>
            <Logo src={logo} />
            <RegisterFORM onSubmit={register}>
                <input  type='name' required
                        placeholder={'NOME'}
                        value={registerINFO.name}
                        onChange={ (e) => setRegisterINFO({...registerINFO, name: e.target.value}) }/>
                <input  type='email' required
                        placeholder={'EMAIL'}
                        value={registerINFO.email}
                        onChange={ (e) => setRegisterINFO({...registerINFO, email: e.target.value}) }/>
                <input  type='password' required
                        placeholder={'SENHA'}
                        value={registerINFO.password}
                        onChange={ (e) => setRegisterINFO({...registerINFO, password: e.target.value}) }/>
                <input  type='password' required
                        placeholder={'CONFIRME A SENHA'}
                        value={registerINFO.confirmPassword}
                        onChange={ (e) => setRegisterINFO({...registerINFO, confirmPassword: e.target.value}) }/>
                <button type="submit">REGISTRAR</button>     
            </RegisterFORM>
            <Link to={`/`} style={{ textDecoration: 'none' }}><RegisterSPAN>Já tem uma conta? Entre agora!</RegisterSPAN></Link>
        </RegisterHTML>
    )
}

const RegisterHTML = styled.main`
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
const RegisterFORM = styled.form`
    width: 265px;
    height: 241px;
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
const RegisterSPAN = styled.span`
        font-family: 'Roboto';
        font-size: 10px;
        font-style: normal;
        font-weight: normal;
        line-height: 10px;
        color: #1a1a1a;
`