import React, { useContext } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AiFillDelete } from "react-icons/ai"
import { ctx } from "../Context"
import { HashLink } from 'react-router-hash-link';

function Cart() {

  const data = useContext(ctx)

  function orderItem() {
    toast.success('Ordered Successfully 😊', {
      position: "top-center",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: "light",
      });
    setTimeout(() => {
      data.clearCart()
    }, 1000)
  }

  let cartItems = data.cartItems.map(elem => {
    return <div key={elem.id} className="cart-item">
      <img src={elem.image} alt={elem.title} />
      <p>${elem.price}</p>
      <AiFillDelete title='delete' className='delete-cart-item' onClick={() => data.removeFromCart(elem)} />
    </div>
  })

  return (
    <>
      <div className='div-container'>
        {
          data.cartItems.length > 0 && <div className='cart-menu'>
            <h2>Image</h2>
            <h2>Price</h2>
            
            <h2>Action</h2>
          </div>
        }
        {
          cartItems
        }
        
        {
          data.cartItems.length > 0 ? <h3 className='total-price'>
            Total:{data.cartItems.reduce((acc, elem) => {
              return acc + elem.price
            }, 0).toFixed(2)}
            <button onClick={orderItem}>Place Order</button>
          </h3> : <div className='no-items-in-cart'>
          <img src={require("../images/no-cart.jpg")} draggable="false" alt="no-items-in-cart" />
          <h2>No items in cart</h2>
          <br />
          <h3>Click <HashLink to="/#products">Here</HashLink> to add some</h3>
          </div>
        }



      </div>
      <ToastContainer />
    </>
  )
}

export default Cart