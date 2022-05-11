import React from "react"
import { Link, useNavigate } from "react-router-dom"
import styled from 'styled-components'
import usuarioINFO from "../context/userINFO"
import axios from "axios"

export default function Cart(){

    const {userINFO, setUserINFO} = React.useContext(usuarioINFO)
    const [cartList, setCartList] = React.useState([])
    const navigate = useNavigate()

    // React.useEffect( () => {
    //     const config = {headers: { User: userINFO.name}}
    //     const URL = 'http://localhost:5000/cart'
    //     const promise = axios.get(URL, config)
    //     promise.then( (response) => { setCartList(...cartList, response.data) } )
    //     promise.catch( (err) => console.log('Deu Erro get cartList: ',err))   }   ,[])

    return (
       <HomeHTML>
            <CartHEADER>
               <YourCart>Your Cart</YourCart>
               <NumItems>3 items</NumItems>
               <TotalValue> Total: R$ 2640,99</TotalValue>
            </CartHEADER>
            <CartItems />
            <CartFOOTER>
                <h6>aqui e Footer</h6>
           </CartFOOTER>
       </HomeHTML>
        )
}