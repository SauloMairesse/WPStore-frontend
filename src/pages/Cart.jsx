import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import styled from 'styled-components'
import axios from "axios"
import React from "react"

import usuarioINFO from "../context/userINFO"

export default function Cart() {
    const navigate = useNavigate()
    const { userINFO, setUserINFO } = React.useContext(usuarioINFO)
    const [cartList, setCartList] = useState([]);

    const config = { headers: { "Authorization": `Bearer ${userINFO.token}` } }
    const URL = 'http://localhost:5000/carts'

    React.useEffect(() => {
        const promise = axios.get(URL, config)
        promise.then((response) => { setCartList([...response.data]) })
        promise.catch((err) => console.log('Error while recovering cart list', err))
    }, []);

    let balance = 0;
    if (cartList.length > 0) {
        cartList.forEach(element => {
            let { price, quantity } = element;
            price = parseFloat(price);
            quantity = parseFloat(quantity);
            balance += quantity * price;
        });
    }

    return (
        <HomeHTML>
            {cartList.length > 0 ?
                <>
                    <CartHEADER>
                        <header>
                            <h1>YOUR CART</h1>
                            <div>
                                <h1>TOTAL</h1>
                                <div>
                                    <h2>$</h2>
                                    <h1>{balance}</h1>
                                </div>
                            </div>
                        </header>
                    </CartHEADER>
                    <CartItems>
                        {cartList.map(element => {
                            const { name, color, description, price, quantity, img } = element;
                            return (
                                <CartItem>
                                    <img src={img} />
                                    <h3>{color.toUpperCase()} {name}</h3>
                                    <h4>{description}</h4>
                                    <h1>QUANTITY:</h1>
                                    <ion-icon name="add-outline" onClick={() => {
                                        const addRequisition = axios.put(URL, { name: name, type: "add" }, config);
                                        addRequisition.then(() => {
                                            const array = [...cartList];
                                            let i = 0;
                                            array.forEach((product, index) => {
                                                if (product.name === name) {
                                                    i = index;
                                                }
                                            });
                                            array[i].quantity++;
                                            setCartList([...array]);
                                        });
                                        addRequisition.catch((err) => console.log('Error while adding item', err));
                                    }}></ion-icon>
                                    <h1>{quantity}</h1>
                                    <ion-icon name="remove-outline" onClick={() => {
                                        const removeRequisition = axios.put(URL, { name: name, type: "remove" }, config);
                                        removeRequisition.then(() => {
                                            const array = [...cartList];
                                            let i = 0;
                                            array.forEach((product, index) => {
                                                if (product.name === name) {
                                                    i = index;
                                                }
                                            });
                                            array[i].quantity--;
                                            setCartList([...array]);
                                        });
                                        removeRequisition.catch((err) => console.log('Error while removing item', err));
                                    }}></ion-icon>
                                    <div>
                                        <h2>$</h2>
                                        <h1>{price}</h1>
                                    </div>
                                    <ion-icon name="close-sharp" onClick={() => {
                                        const deleteRequisition = axios.delete(`${URL}/${name}`, config);
                                        deleteRequisition.then(() => {
                                            const array = [...cartList];
                                            let i = 0;
                                            array.forEach((product, index) => {
                                                if (product.name === name) {
                                                    i = index;
                                                }
                                            });
                                            array.splice(i, 1);
                                            setCartList([...array]);
                                        });
                                        deleteRequisition.catch((err) => console.log('Error while deleting item', err.response));
                                    }}></ion-icon>
                                </CartItem>
                            );
                        })}
                    </CartItems>
                    <CheckoutButton>
                        <Link to="/checkout" style={{ textDecoration: 'none' }}>
                            <div>
                                <button onClick={() => {
                                    localStorage.setItem("cartList", JSON.stringify(cartList))
                                    navigate('/payment');
                                }}>
                                    <h1>CHECKOUT</h1>
                                    <div></div>
                                    <ion-icon name="arrow-forward-outline"></ion-icon>
                                </button>
                            </div>
                        </Link>
                    </CheckoutButton>
                </>
                :
                <>
                    <Text>Your cart is empty.</Text>
                </>
            }
            <CartFOOTER>
                <footer>
                    <Link to="/home" style={{ textDecoration: 'none' }}>
                        <div>
                            <ion-icon name="home-outline"></ion-icon>
                            <h1>HOME</h1>
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
                            <ion-icon name="cart-outline" style={{ color: '#38B6FF' }}></ion-icon>
                            <h1 style={{ color: '#38B6FF' }}>CART</h1>
                        </div>
                    </Link>
                </footer>
            </CartFOOTER>
        </HomeHTML>
    )
}

const HomeHTML = styled.main`
    width: 100vw;
    height: 100vh;
    background: #F0F4F7;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Text = styled.h1`
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 400;
    font-size: 13px;
    line-height: 13px;
    color: #1a1a1a;
`;

const CartHEADER = styled.div`
    width: 100%;
    height: 10px;
    display: flex;
    justify-content: center;
    position: fixed;
    top: 60px;

    h1, h2 {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 600;
        font-size: 10px;
        line-height: 10px;
        color: #1a1a1a;
    }

    header {
        width: 300px;
        display: flex;
        justify-content: space-between;

        div:nth-child(2) {
            width: 80px;
            display: flex;
            justify-content: space-between;

            div {
                width: 40px;
                display: flex;
                justify-content: flex-end;

                h2 {
                    font-size: 6px;
                    line-height: 6px;
                    margin-right: 1px;
                }
            }
        }
    }
`;

const CartItems = styled.div`
    width: 300px;
    height: 360px;
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 115px;
    overflow-y: scroll;
`;

const CartItem = styled.div`
    width: 100%;
    height: 97px;
    background: #FFFFFF;
    position: relative;
    margin-bottom: 23px;

    img {
        width: 62px;
        height: 60px;
        position: absolute;
        top: 17px;
        left: 15px;
    }

    h1, h2, h3, h4 {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 600;
        position: absolute;
        color: #1a1a1a;
    }

    h1 {
        font-size: 8px;
        line-height: 8px;
    }

    h1:nth-child(4) {
        position: absolute;
        top: 27px;
        right: 80px;
    }
    
    h1:nth-child(6) {
        position: absolute;
        top: 27px;
        right: 65px;
    }

    h3 {
        width: 76px;
        font-size: 10px;
        line-height: 10px;
        position: absolute;
        top: 27px;
        left: 80px;
    }

    h4 {
        width: 80px;
        font-size: 10px;
        line-height: 10px;
        font-weight: normal;
        color: #535353;
        position: absolute;
        bottom: 25px;
        left: 80px;
    }

    div {
        width: 40px;
        height: 6px;
        display: flex;
        justify-content: flex-end;
        position: absolute;
        top: 25px;
        right: 15px;

        h1 {
            position: static;
        }

        h2 {
            position: static;
            font-size: 5px;
            line-height: 5px;
            margin-right: 1px;
        }
    }

    ion-icon:nth-child(5) {
        font-size: 9px;
        color: #1a1a1a;
        position: absolute;
        top: 27px;
        right: 70px;
    }

    ion-icon:nth-child(7) {
        font-size: 9px;
        color: #1a1a1a;
        position: absolute;
        top: 27px;
        right: 55px;
    }

    ion-icon:nth-child(9) {
        font-size: 9px;
        color: #1a1a1a;
        position: absolute;
        bottom: 25px;
        right: 15px;
    }
`;

const CheckoutButton = styled.div`
    width: 100%;
    height: 25px;
    position: fixed;
    bottom: 115px;
    display: flex;
    justify-content: center;

    div {
        width: 300px;
        height: 25px;
        display: flex;
        justify-content: flex-end;

        button {
        width: 107px;
        height: 100%;
        background: #000000;
        display: flex;
        align-items: center;
        justify-content: space-between;
        border: none;
        padding-left: 11px;
        padding-right: 6px;

            h1 {
                font-family: 'Roboto';
                font-size: 12px;
                font-style: normal;
                font-weight: 500;
                color: #FFFFFF;
                margin-right: 3px;
            }

            div {
                width: 2px;
                height: 100%;
                background: #F0F4F7;
            }

            ion-icon {
                font-size: 13px;
                color: #FFFFFF;
            }
        }
    }
`;

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
`;