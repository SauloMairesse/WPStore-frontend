import React, { useState } from 'react'
import styled from 'styled-components'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'
import usuarioINFO from '../context/userINFO'


export default function Item(){
    const navigate = useNavigate()
    const { _id } = useParams()
    const  [ item, setItem ]  =useState({})

    const { userINFO, setUserINFO } = React.useContext(usuarioINFO)
    if(!userINFO.token ){
        navigate('/')
    }

    React.useEffect( () => {
        const config = {headers: { authorization: `Bearer ${userINFO.token}`}}
        const URL = `http://localhost:5000/products/${_id}`
        const promise = axios.get(URL, config)
        promise.then( (response) => { 
            setItem(response.data) 
        } )
        promise.catch( (err) => console.log('Deu Erro get productDetail: ',err))   }   ,[])
    
    const { name, color, price, img, description} = item 
    console.log('userINFO: ', userINFO)
    
    function addToCart(name){
        const config = {headers: { authorization: `Bearer ${userINFO.token}`}}
        const body = {name}
        console.log('name: ',name)
            const URL = 'https://project-wpstore.herokuapp.com/carts'
            const promise = axios.post(URL, body, config)
            promise.then( (response) => { alert('Adicionado') } )
            promise.catch( (err) => console.log('erro addToCart: ',err))   
        }

    return (
        <>
        {!price ?
            <>Carregando...</>
        :    
        <ItemHTML>
            <ItemHEADER>
                <ion-icon   onClick={ () => navigate('/home') }
                            name="arrow-back-outline"></ion-icon>
                <h2>DETAIL PRODUCT</h2>
                <ion-icon   name="bag-outline"
                            size='large'
                            onClick={() => navigate('/cart')} />
            </ItemHEADER>
            <Details>
                <IMG src= {img} alt="" />
                <div>
                    <NAME> {name} </NAME>
                    <DESCRIPTION>{description}</DESCRIPTION>
                    <PRICE>R${price.toFixed(2)}</PRICE>
                </div>
            </Details>
            <BUYBUTTON>
                <ion-icon   name="bag-outline" />
                <ToBuy>BUY NOW</ToBuy>
            </BUYBUTTON>
            <BUYBUTTON>
                <ion-icon   onClick={ () => addToCart(name) }
                            name="bag-outline" />
                <ToBuy>ADD TO CART</ToBuy>
            </BUYBUTTON>
        </ItemHTML>
        }
        </>
    )
}
const ItemHTML = styled.main`
    display: flex;
    flex-direction: column;
    /* justify-content: center; */
    align-items: center;
    width: 100vw;
    height: 100vh;
    background-color: #F0F4F7;
    ion-icon{
        font-size: 27px;
    }
    `
const ItemHEADER = styled.header`
    display: flex;
    position: fixed;
    top: 0;
    align-items: center;
    justify-content: space-between;
    padding: 10px 20px 0 20px;
    width: 400px;
    height: 100px;
    background-color: #F0F4F7;
    `
const Details = styled.main`
        display: flex;
        flex-direction: column;
        width: 100%;
        align-items: center;
        margin-top: 120px;
        div{
            display: flex;
            flex-direction: column;
            margin: 30px 0 80px 150px;
            width: 100%;
        }
        `
const IMG = styled.img`
    display: flex;
    width: 340px;
    height: 340px;
    object-fit: contain;
    margin-bottom: 10px;
    `
const NAME = styled.h1`
    text-align: left;
    font-family: 'Inconsolata', monospace;
    font-size: 26px;
    font-weight: 400;
    line-height: 30px;
    letter-spacing: 0em;
    color: black;
    margin-bottom: 10px;`

const DESCRIPTION = styled.h1`
    font-family: 'Inconsolata', monospace;
    font-size: 15px;
    font-weight: 400;
    line-height: 30px;
    letter-spacing: 0em;
    color: #969697;
    margin-bottom: 10px;`
const PRICE = styled.h1`
    font-family: 'Inconsolata', monospace;
    font-size: 30px;
    font-weight: 400;
    line-height: 30px;
    letter-spacing: 0em;
    color: #0B79F8;
    margin-bottom: 10px;`
const BUYBUTTON = styled.span`
    display: flex;
    width: 100%;
    height: 80px;
    align-items: center;
    padding: 20px 20px 20px 20px;
    margin: 0 0 80px 150px;
    background-color: #fff;
    `
const ToBuy = styled.h4`
    font-family: 'Inconsolata', monospace;
    font-size: 20px;
    font-weight: 700;
    line-height: 30px;
    letter-spacing: 0em;
    color: black;
    margin-left: 20px;
    `