import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import usuarioINFO from "../context/userINFO";


export default function PaymentRegister(props){
    const Navigate = useNavigate()
    const [credName, setCredName] = useState("")
    const [credCard, setCredCard] = useState("")
    const [credCode, setCredCode] = useState("")
    const [credValidity, setCredValidity] = useState("")
    const { userINFO, balance } = useContext(usuarioINFO)
    const credData = {
        credName,
        credCard,
        credCode,
        credValidity
    }
    const { token, userId } = userINFO

    useEffect(()=>{
        if(!token){
            Navigate("/")
        }
    },[token]
    )

    function sendCredData(e){
        e.preventDefault();
        console.log('entrei aqui dentro', credData)
        const config = {headers: { userId: userINFO._id}}
        const URL = 'https://project-wpstore.herokuapp.com/payment'

        axios.post(URL,
            credData, 
            config)
            .then((response)=>{
                const { data } = response
                console.log(data)
                Navigate("/home")
            })
            .catch((err) => console.log('deu erro sendCredData', err))
    }
    
    return(
        <Page>
            <ItemHEADER>
                <ion-icon   onClick={ () => Navigate('/home') }
                            name="arrow-back-outline"></ion-icon>
                <h2>Fazer Pagamento</h2>
                <ion-icon name="bag-outline"
                    onClick={() => Navigate('/cart')} />
            </ItemHEADER>
            <Body onSubmit={sendCredData}>
                <label for="credName">Nome completo do cartão</label>
                <Input type={"text"} id="credName" placeholder="Nome Completo" required onChange={(e)=>{
                    setCredName(e.target.value)
                }} />
                <label for="credNumber">Número do cartão</label>
                <Input type="number" id="credNumber" placeholder="Número do cartão" required onChange={(e)=>{
                    setCredCard(e.target.value)
                }} />
                <Sections>
                    <section>
                        <label for="credCode">CVV</label>
                        <MiniInput type={"text"} id="credCode" placeholder="CVV" required onChange={(e)=>{
                            setCredCode(e.target.value)
                        }} />
                    </section>
                    <section>
                        <label for="credDate">Data de validade</label>
                        <MiniInput type={"text"} id="credDate" placeholder="Ex:12/25" required onChange={(e)=>{
                            setCredValidity(e.target.value)
                        }} />
                    </section>
                </Sections>
                <BuyINFO>Nome do Comprador: {userINFO.name}</BuyINFO>
                <BuyINFO>Valor Total: R$ {balance.toFixed(2)}</BuyINFO>
                <Buttonn type="submit">Confirmar</Buttonn>
            </Body>
        </Page>
    )
}
const BuyINFO = styled.h1`
    display: flex;
    border-radius: 50%;
    justify-content: center;
    align-items: center;
    font-family: 'Alfa Slab One', cursive;
    font-size: 20px;
    margin: 10px 0 10px 0;
    `
const Page = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 100vh;
    background-color: #F0F4F7;
    footer{
        display: flex;
        align-items: center;
        justify-content: center;
    }
    input{
        input[type='number'] {
        }
        input::-webkit-outer-spin-button,
        input::-webkit-inner-spin-button {
            -webkit-appearance: none;
        }
    }
    `
const Input = styled.input`
    -moz-appearance:textfield;
    width: 95%;
    background-color: black;
    margin-top: 5px;
    margin-bottom: 10px;
    height: 30px;
    color: #FFFFFF;
    padding-left: 10px;
    border: none;
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
    font-size: 25px;
    background-color: #F0F4F7;
        h2{
            /* font-weight: bold; */
            font-size: large;
     }
`
const MiniInput = styled.input`
    width: 60%;
    background-color: black;
    margin-bottom: 10px;
    margin-top: 5px;
    height: 30px;
    color: #FFFFFF;
    padding-left: 10px;
    border: none;
    input{
            input[type='number'] {
        -moz-appearance:textfield;
        }
        input::-webkit-outer-spin-button,
        input::-webkit-inner-spin-button {
            -webkit-appearance: none;
        }
    };
`
const Sections = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-top: 15px;
    margin-bottom: 10px;
    width: 90%;

    section{
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
        margin-right: 10px;
        
    }
`
const Body = styled.form`
    width: 85%;
    flex-direction: column;
    display: flex;
    align-items: flex-start;
    justify-content: center;
`
const Buttonn = styled.button`
    position: fixed;
    bottom: 10%;
    background-color: black;
    color: #FFFFFF;
    border: none;
    width: 100px;
    height: 40px;
`
