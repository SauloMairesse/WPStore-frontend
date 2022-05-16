import React from "react"
import { Link, useNavigate } from "react-router-dom"
import styled from 'styled-components'
import usuarioINFO from "../context/userINFO"
import axios from "axios"
import Items from "../components/Items"

export default function Home() {

    const navigate = useNavigate()

    const { userINFO, setUserINFO } = React.useContext(usuarioINFO)

    return (
        <HomeHTML>
            <HomeHEADER>
                <UserPHOTO>WP</UserPHOTO>
                <h2>All PRODUCTS</h2>
                <ion-icon name="bag-outline"
                    size='large'
                    onClick={() => navigate('/cart')} />
            </HomeHEADER>
            <Items />
            <CartFOOTER>
                <footer>
                    <Link to="/home" style={{ textDecoration: 'none' }}>
                        <div>
                            <ion-icon name="home-outline" style={{ color: '#38B6FF' }}></ion-icon>
                            <h1 style={{ color: '#38B6FF' }} >HOME</h1>
                        </div>
                    </Link>
                    <Link to="/profile" style={{ textDecoration: 'none' }}>
                        <div>
                            <ion-icon name="person-outline"></ion-icon>
                            <h1>PROFILE</h1>
                        </div>
                    </Link>
                    <Link to="/cart" style={{ textDecoration: 'none' }}>
                        <div>
                            <ion-icon name="cart-outline"></ion-icon>
                            <h1>CART</h1>
                        </div>
                    </Link>
                </footer>
            </CartFOOTER>
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
const CartFOOTER = styled.div`
    width: 100%;
    height: 81px;
    background: #FFFFFF;
    display: flex;
    justify-content: center;
    position: fixed;
    bottom: 0px;

    footer {
        width: 300px;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;

        div {
            width: 26px;
            height: 36px;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: space-between;

            ion-icon {
                font-size: 17px;
                color: #1a1a1a;
            }

            h1 {
                font-family: 'Roboto';
                font-style: normal;
                font-size: 11px;
                font-weight: 600;
                color: #1a1a1a;
            }
        }
    }
`