import React from "react"
import { Link, useNavigate } from "react-router-dom"
import styled from 'styled-components'
import usuarioINFO from "../context/userINFO"
import axios from "axios"
import Items from "../components/Items"

export default function Home() {
    const navigate = useNavigate()

    const { userINFO, setUserINFO } = React.useContext(usuarioINFO)
    if(!userINFO.token ){
        alert('Usuario não logado')
        navigate('/')
    }

    return (
        <HomeHTML>
            <HomeHEADER>
                <UserPHOTO>SD</UserPHOTO>
                <h2>All PRODUCTS</h2>
                <ion-icon name="bag-outline"
                    size='large'
                    onClick={() => navigate('/cart')} />
            </HomeHEADER>
            <Items />
            <HomeFOOTER>
                <h6>aqui e Footer</h6>
            </HomeFOOTER>
        </HomeHTML>
    )
}

const HomeHTML = styled.main`
        display: flex;
        justify-content: center;
        width: 100vw;
        height: 100%;
        background-color: #F0F4F7;
        ion-icon{
            font-size: 23px;
        }
`
const UserPHOTO = styled.div`
    display: flex;
    border-radius: 50%;
    justify-content: center;
    align-items: center;
    font-family: 'Alfa Slab One', cursive;
    color: #5DADFB;
    font-size: 20px;
`
const HomeHEADER = styled.header`
    display: flex;
    position: fixed;
    top: 0;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px 0 20px;
    width: 400px;
    height: 90px;
    background-color: #F0F4F7;
`
const HomeFOOTER = styled.footer`
    display: flex;
    position: fixed;
    bottom: 0;
    justify-content: space-between;
    padding: 0 20px 0 20px;
    width: 100%;
    background-color: red;
    
`
