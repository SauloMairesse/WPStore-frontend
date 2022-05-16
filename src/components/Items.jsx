import React from "react"
import { Link, useNavigate } from "react-router-dom"
import styled from 'styled-components'
import usuarioINFO from "../context/userINFO"
import axios from 'axios'

export default function Items(){

    const {userINFO} = React.useContext(usuarioINFO)
    console.log('tokem items: ',userINFO.token)
    const [listItems, setListItems] = React.useState([])
    
    const navigate = useNavigate()

    React.useEffect( () => {
        const config = {headers: { authorization: `Bearer ${userINFO.token}`}}
        const URL = 'http://localhost:5000/products'
        const promise = axios.get(URL, config)
        promise.then( (response) => {console.log(response.data) 
                                    setListItems(...listItems, response.data) } )
        promise.catch( (err) => console.log('Deu Erro get AllItem: ',err))   } 
    ,[])

    function Item(props){
        console.log(`${props._id}`)
        return(
            <Link to={`/item/${props._id}`}>
                <ItemHTML>
                    <ItemIMG src= {props.img} alt="" />
                    <NameITEM>{props.name}</NameITEM>
                    <ValueITEM> {props.price}</ValueITEM>
                    <Buy>BUY NOW</Buy>
                </ItemHTML>
            </Link>)
    }

    if(listItems.length === 0){
        return(
            <ItemsVAZIO>
                <span>Nao ha Itens Disponiveis</span>
            </ItemsVAZIO>
        )
    }else{
        return(
            <ItemsHTML>
                {listItems.map( (item) => <Item _id={item._id}
                                                img={item.img}
                                                name={item.name}
                                                price={item.price}/>)}
            </ItemsHTML>
        )
    }
}

const ItemHTML= styled.article`
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 175px;
        height: 295px;
        margin-bottom: 20px;
        padding: 15px 15px 15px 15px;
        background-color: #FFF;`
const ItemIMG = styled.img`
            width: 140px;
            height: 140px;
            object-fit: cover;
            margin-bottom: 10px;`
const NameITEM = styled.h2`
        font-family: 'Inconsolata', monospace;
        font-size: 20px;
        font-weight: 400;
        line-height: 30px;
        letter-spacing: 0em;
        /* margin-bottom: 10px; */
    `
const ValueITEM = styled.h3`
        font-family: 'Inconsolata', monospace;
        font-size: 25px;
        font-weight: 400;
        line-height: 30px;
        letter-spacing: 0em;
        color: #5DADFB;
        margin-bottom: 10px;
    `
const Buy = styled.h4`
        font-family: 'Inconsolata', monospace;
        font-size: 20px;
        font-weight: 700;
        line-height: 30px;
        letter-spacing: 0em;
        color: black;
        margin-bottom: 10px;
        `
const ItemsVAZIO = styled.main`
        display: flex;`

const ItemsHTML = styled.main`
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        width: 370px;
        height: 100%;
        margin-top: 120px;
        /* background-color: #564242; */
    `