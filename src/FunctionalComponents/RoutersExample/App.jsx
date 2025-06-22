import React from 'react'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Home from "./Home"
import About from "./About"
import Contact from "./Contact"
import Profile from "./Profile"
import Navbar from "./Navbar"
import Footer from "./Footer"
import Error from "./Error"
//import BootStrap from "../BootStrap"
// import MaterialUIExample from "../MaterialUIExample"

export default function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
        <Route path=""element={<Home/>}/>
        <Route path="/about"element={<About/>}/> 
        {/* <Route path="/bootstrap"element={<BootStrap/>}/> */}
        <Route path="/contact"element={<Contact/>}/>
        <Route path="/profile/:name?/:salary?/:dsg?"element={<Profile/>}/>
        {/* <Route path="/materialUIExample" element={<MaterialUIExample/>}/> */}
        <Route path="/*"element={<Error/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
    </>
  )
}



