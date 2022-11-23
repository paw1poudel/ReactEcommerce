import React from 'react'
import {useNavigate} from "react-router-dom"
import {FaEye,FaEyeSlash} from "react-icons/fa"
import {BiUserCircle} from "react-icons/bi"
import { useState } from 'react'
import { toast, ToastContainer } from 'react-toastify'

function Login() {

  const[isShown,setIshShown]=useState(false)
  const navigate = useNavigate()
  function handleSubmit(e){
    e.preventDefault()
    toast.success("Logged in! Redirecting to Home",{
      autoClose:1000
    })
    setTimeout(()=>{

      navigate("/")
    },1500)
  }

  return (
      <div className="div-container">
<div className='login-page'>
 
    <BiUserCircle className='login-logo'/>

      <h2>NILESTORE</h2>
    <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email*</label>
        <br />
        <input type="email" autoComplete='off' required placeholder='you@gmail.com' id='email' />
        <br />
        <label htmlFor="password">Password*</label>
        <br />
        <div className="password-div">
        <input type={isShown?"text":"password"}  required placeholder='password' id='password' />
      <span className='eye' onClick={()=>{
        setIshShown(prev=>!prev)
      }}>{isShown?<FaEye />:<FaEyeSlash />}</span>
        </div>
        <br />
        <button type="submit">Login / Signup</button>
    </form>
    <br />
    <span className='forget' >Fogot Password?</span>
    </div>
<ToastContainer />
    </div>
  )
}

export default Login