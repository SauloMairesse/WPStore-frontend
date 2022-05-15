import React from 'react'
import styled from 'styled-components'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'
import usuarioINFO from '../context/userINFO'


export default function Item(){
    const navigate = useNavigate()
    const _id = useParams()
    console.log('id pos useparams',_id)

    const { userINFO, setUserINFO } = React.useContext(usuarioINFO)
    if(!userINFO.token ){
        navigate('/')
    }

    React.useEffect( () => {
        const config = {headers: { authorization: `Bearer ${userINFO.token}`}}
        const URL = `http://localhost:5000/products/${_id}`
        const promise = axios.get(URL, config)
        console.log('oque que vem pela frente ? then ou catch')
        console.log('CONSOLE DO _id é: ', _id)
        promise.then( (response) => { console.log('response: ',response.data) } )
        promise.catch( (err) => console.log('Deu Erro get productDetail: ',err))   }   ,[])

    // function addToCart(){
    //         const config = {headers: { authorization: `Bearer ${userINFO.token}`}}
    //         const body = {_id: itemId}
    //         const URL = 'http://localhost:5000/addCart'
    //         const promise = axios.get(URL, config, body)
    //         promise.then( (response) => { console.log(response.data) } )
    //         promise.catch( (err) => console.log('Deu Erro get AllItem: ',err))   
    //     }

    return (
        <ItemHTML>
            <ItemHEADER>
                <ion-icon   onClick={ () => navigate('/home') }
                            name="arrow-back-outline"></ion-icon>
                <h2>DETAIL PRODUCT</h2>
                <ion-icon  name="bag-add-outline"></ion-icon>
            </ItemHEADER>
            <Details>
                <IMG src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/
                    2wCEAAkGBw8NDQ0NDQ8ODw0NDg4ODQ0QDw8PDQ8PFhIXFxYSFhYZHikhGRsmHBYWIjIiJiosLy8vGCBBOjUuOSkuLywBCgoKDg0OHBAQHC4mICYuLi4uMC4uLi4uLi4uLi4uMC4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLv/
                    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
                    ERAEREAREQBERAEREAREQBERAP//Z" alt="" />
                <div>
                    <NAME> SKATE </NAME>
                    <DESCRIPTION>ISSO É UM SKATE</DESCRIPTION>
                    <PRICE>R$26.00</PRICE>
                </div>
            </Details>
            <BUYBUTTON>
                <ion-icon   name="bag-outline" />
                <ToBuy>BUY NOW</ToBuy>
            </BUYBUTTON>
        </ItemHTML>
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