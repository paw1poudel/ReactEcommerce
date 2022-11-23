import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link';
import { useContext } from 'react'
import { BsBag } from "react-icons/bs"
import { FaBars} from "react-icons/fa"
import {ctx} from "../Context"
function Navbar() {
    const data = useContext(ctx)
    const[isNavbarOpen,setIsNavbarOpen]=useState(false)
    window.onscroll=()=>{
        setIsNavbarOpen(prev=>false)
    }
    return (
        <nav>

            <div className='wrap-nav'>
                <HashLink to="/#" className='logo'>NILESTORE</HashLink>
                <div className='wrap-ul'>
                    <ul className='nav-links' id={isNavbarOpen?"open-nav":""}>
                    
                        <li><HashLink to="/#home">Home</HashLink></li>
                        <li><HashLink to="/#collection">Collection</HashLink></li>
                        <li><HashLink to="/#products">Products</HashLink></li>                
                        <li><HashLink to="/#contact">Contact</HashLink></li>
                    </ul>
                    <ul className='nav-items'>
                    <li><NavLink to="/cart" className='cart' data-item={data.cartItems.length}><BsBag /></NavLink></li>
                    <li><NavLink to="/login" className='login'>Login</NavLink></li>
                    </ul>
                </div>
               <FaBars className='close-open' onClick={()=>setIsNavbarOpen(prev=>!prev)} />
            </div>
        </nav>
    )
}

export default Navbar