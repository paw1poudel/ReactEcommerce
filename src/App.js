import React, { useContext } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css"
import Navbar from './components/Navbar'
import Cart from './pages/Cart';
import Login from './pages/Login';
import Main from './pages/Main';
import Singlepage from './pages/Singlepage';
import BeatLoader from "react-spinners/BeatLoader";
import { ctx } from './Context';
function App() {
 const data = useContext(ctx)
  
  return (
    <> 
  {
    data.loading?<div className="page-loader">
    <BeatLoader
    color={"#34251F"}       
    size={20}
    aria-label="Loading Spinner"
    data-testid="loader"
  />
   </div>: <Router>
  <Navbar />

  <Routes>
    <Route path="/" element={<Main/>} />
    <Route path="/cart" element={<Cart/>} />
    <Route path="/login" element={<Login/>} />
    <Route path="/product" element={<Singlepage/>} />
  </Routes>
  </Router>
  }
 
    </>

  )
}

export default App