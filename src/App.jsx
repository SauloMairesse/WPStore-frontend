import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import Register from './pages/Register'
import Home from './pages/Home'
import usuarioINFO from './context/userINFO'

export default function App(){

    const [userINFO, setUserINFO] = React.useState({}) //use Context || info global usuario

    return(
        <usuarioINFO.Provider value={{userINFO, setUserINFO}}>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Login/>}/>
                    <Route path='/cadastro' element={<Register/>}/>
                    <Route path='/home' element={<Home/>}/>
                </Routes>
            </BrowserRouter>
        </usuarioINFO.Provider>
    )
}