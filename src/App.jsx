import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Login from './pages/Login'
import Register from './pages/Register'
import Home from './pages/Home'
import usuarioINFO from './context/userINFO'
import Item from './pages/Item'
import Cart from './pages/Cart'
import Payment from './pages/Payment'

export default function App(){
    const [balance, setBalance] = React.useState(0)
    const [userINFO, setUserINFO] = React.useState({}) //use Context || info global usuario
    return(
        <usuarioINFO.Provider value={{userINFO, setUserINFO, balance, setBalance}}>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Login/>}/>
                    <Route path='/register' element={<Register/>}/>
                    <Route path='/home' element={<Home/>}/>
                    <Route path='/item/:_id' element={<Item/>}/>
                    <Route path='/cart' element={<Cart/>}/>
                    <Route path='/payment' element={<Payment/>} />
                </Routes>
            </BrowserRouter>
        </usuarioINFO.Provider>
    )
}