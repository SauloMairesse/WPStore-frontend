import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Login from './pages/Login'
import Register from './pages/Register'
import Home from './pages/Home'
import usuarioINFO from './context/userINFO'
import Item from './pages/Item'
import Cart from './pages/Cart'
import itemDETAIL from './context/itemINFO'

export default function App(){

    const [userINFO, setUserINFO] = React.useState({}) //use Context || info global usuario
    const [itemINFO, setItemINFO] = React.useState({}) 
    return(
        <usuarioINFO.Provider value={{userINFO, setUserINFO}}>
        <itemDETAIL.Provider value={{itemINFO, setItemINFO}}>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Login/>}/>
                    <Route path='/register' element={<Register/>}/>
                    <Route path='/home' element={<Home/>}/>
                    <Route path='/item/:_id' element={<Item/>}/>
                    <Route path='/cart' element={<Cart/>}/>
                </Routes>
            </BrowserRouter>
        </itemDETAIL.Provider>
        </usuarioINFO.Provider>
    )
}