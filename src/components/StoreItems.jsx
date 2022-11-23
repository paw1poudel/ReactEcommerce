import React, { useContext } from 'react'
import { FaStar } from "react-icons/fa"
import { BsBagPlus, BsBagFill } from "react-icons/bs"
import { ctx } from "../Context";
import ImageMagnifier from './ImageMagnifier';
import Contextmenu from './Contextmenu';
import Report from './Report';
import { useRef } from 'react';


function StoreItems() {
const ref= useRef(null)
  const data = useContext(ctx)
  function CartIcon(id) {
    let found = data.cartItems.some(elem => elem.id === id);

    if (found) {
      return <BsBagFill />
    } else {
      return <BsBagPlus />
    }
  }

  function cartText(id) {
    let found = data.cartItems.some(elem => elem.id === id);

    if (found) {
      return "Remove From Cart"
    } else {
      return "Add To Cart"
    }
  }
  function openDialog() {  
  
    ref.current.showModal();
 
  }
  function closeDialog() {  
    ref.current.close();
  }
  
  return (
    <>
      <div className='wrap-products'>
        {
          data.items.length === 0 ? <><div className="product-loader"></div></> :
            data.items.map(elem => {
              return <div key={elem.id} className="each-item">
                <div className='rating'>
                  <span title={elem.rating.rate + "Star"} ><FaStar style={{ color: "yellow" }} />{elem.rating.rate}</span>
                  <span>{elem.rating.count} Total Rating</span>
                </div>
                <Contextmenu show={openDialog} itemData={elem} cartText={() => cartText(elem.id)} addToCart={() => data.addToCart({ ...elem })} />

                <ImageMagnifier
                  src={elem.image}
                />

                <div className="details">
                  <h3>{elem.title.substr(0, 50)}</h3>
                  <div className="wrap-details">

                    <div>
                      <p><s>${(elem.price + 50).toFixed(2)}</s> &nbsp;  ${elem.price}</p>
                      <p><big>
                        <span onClick={() => data.addToCart({ ...elem })} title='AddToCart' style={{ cursor: "pointer" }}>
                          {
                            CartIcon(elem.id)
                          }
                        </span>

                      </big></p>
                    </div>
                  </div>
                </div>
              </div>

            })

        }
      </div>
      <Report  close={closeDialog} ref={ref}/>
    </>
  )
}

export default StoreItems