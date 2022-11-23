import React,{useState} from 'react'

import {BsThreeDotsVertical} from "react-icons/bs";
import {MdOutlineReportGmailerrorred} from "react-icons/md"
import { useNavigate } from 'react-router-dom';

function Contextmenu(props) {
  const navigate= useNavigate()
  const[isProductShown,setIsProductShown]=useState(false)

  function toggleShown(){
      setIsProductShown(prev=>!prev)
  }
 
  return (
    <>
 <BsThreeDotsVertical onClick={toggleShown} title='show-more' className='show-more' data-name="menu-icons" />
    <div className="more-details"  id={isProductShown?"":"details-hidden"}>
                <p onClick={()=>navigate("/product",{state:{data:props.itemData}})}>Know More</p>
               
                <p onClick={props.addToCart}>{props.cartText()}</p>
                <p style={{display:"flex",alignItems:"center"}} onClick={props.show}>Report <MdOutlineReportGmailerrorred /></p>     
              </div>
    </>
  )
}

export default Contextmenu