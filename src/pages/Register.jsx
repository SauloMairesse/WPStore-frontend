import React from "react"
import { Link, useNavigate } from "react-router-dom"
import styled from 'styled-components'
import usuarioINFO from "../context/userINFO"
import axios from "axios"
import Items from "../components/Items"

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
        const URL = 'https://project-wpstore.herokuapp.com/singup'
        const promise = axios.post(URL, {...registerINFO})
        promise.then( (res) => {console.log(res.datamac)
                                navigate('/')} )
        promise.catch( (err) => {alert('Email Já Registrado: ', err)} )
    }

    return(
        <RegisterHTML>
            <StoreName>WPStore</StoreName>
            <RegisterFORM onSubmit={register}>
                <input  type='name' required
                        placeholder={'  Nome'}
                        value={registerINFO.name}
                        onChange={ (e) => setRegisterINFO({...registerINFO, name: e.target.value}) }/>
               <input  type='email' required
                        placeholder={'  Email'}
                        value={registerINFO.email}
                        onChange={ (e) => setRegisterINFO({...registerINFO, email: e.target.value}) }/>
               <input  type='password' required
                        placeholder={'  Senha'}
                        value={registerINFO.password}
                        onChange={ (e) => setRegisterINFO({...registerINFO, password: e.target.value}) }/>
                <input  type='password' required
                        placeholder={'  Confirme a senha'}
                        value={registerINFO.confirmPassword}
                        onChange={ (e) => setRegisterINFO({...registerINFO, confirmPassword: e.target.value}) }/>
                <button type="submit">Registrar</button>     
            </RegisterFORM>
            <Link to={`/`}> <RegisterSPAN> Já tem uma conta? Entre agora!</RegisterSPAN> </Link>
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
const RegisterFORM = styled.form`
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
const RegisterSPAN = styled.span`
    font-size: 15px;
    font-weight: 700;
    line-height: 30px;
    letter-spacing: 0em;
    color: #112B3C;
    text-decoration: none;
`