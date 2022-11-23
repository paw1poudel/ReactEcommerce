import React from 'react'
import { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import {FaStar} from "react-icons/fa"
import { useContext } from 'react'
import { ctx } from '../Context'
function Singlepage() {
  const context = useContext(ctx);
  const  {state} = useLocation()
  const navigate = useNavigate()
 
  useEffect(() => {
    if (state === null) {
      navigate("/")
    }
  })
  function cartText(id) {
    let found = context.cartItems.some(elem => elem.id === id);

    if (found) {
      return "Remove From Cart"
    } else {
      return "Add To Cart"
    }
  }
  return (

    <section className="single-product">
      <div className="div-container">
        <div className="single-product-item">

        <img src={state.data.image} alt="product"/>
        <div className="single-product-info">
        <span className='category'>**{state.data.category}**</span>
          <h3 className='title'>{state.data.title}</h3>
          <p className='description'>{state.data.description}</p>
          <h4 className='price'>Price: ${state.data.price}</h4>
          <div className="rating">
          <span ><FaStar style={{ color: "yellow" }} />{state.data.rating.rate} Star</span>

          <span>{state.data.rating.count} Total Rating</span>
          </div>

          <br />
          <button onClick={()=>{context.addToCart(state.data)}}>
            {cartText(state.data.id)}
          </button>
         
        </div>
        </div>

      </div>
    </section>
  )
}

export default Singlepage