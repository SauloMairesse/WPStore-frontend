import React from "react"
import { Link, useNavigate } from "react-router-dom"
import styled from 'styled-components'
import usuarioINFO from "../context/userINFO"
import axios from "axios"
import Items from "../components/Items"

export default function Home(){

    const {userINFO, setUserINFO} = React.useContext(usuarioINFO)

    const navigate = useNavigate()

    return (
       <HomeHTML>
            <HomeHEADER>
                <UserPHOTO>SD</UserPHOTO>
                <h2>All PRODUCTS</h2>
                <ion-icon   name="bag-outline" 
                            size='large' 
                            onClick={() =>  navigate('/cart')} />
            </HomeHEADER>
            <Items/>
            <HomeFOOTER>
                <h6>aqui e Footer</h6>
           </HomeFOOTER>
       </HomeHTML>
        )
}

const UserPHOTO = styled.div`
    display: flex;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    justify-content: center;
    align-items: center;
    font-family: 'Alfa Slab One', cursive;
    color: #F66B0E;
    background-color: #205375;
`
const HomeHTML = styled.main`
        display: flex;
        justify-content: center;
        width: 100vw;
        height: 100%;
        background-color: #EFEFEF;
`
const HomeHEADER = styled.header`
    display: flex;
    position: fixed;
    top: 0;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px 0 20px;
    width: 100%;
    height: 90px;
    background-color: #EFEFEF;
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
