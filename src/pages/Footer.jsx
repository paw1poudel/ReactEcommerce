import React from 'react'
import { useContext } from 'react'
import { FaArrowAltCircleUp, FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa'
import { ctx } from '../Context'

function Footer() {
    const data = useContext(ctx);
    const links = data.filters.map((elem,id)=>{
        return <a href="#products" key={id} onClick={data.addFilters}>{elem}</a>
    })
  return (<section id="contact" className='footer'>
    <div className="div-container">
        
            <FaArrowAltCircleUp onClick={()=>window.scrollTo({top:0,behavior:"smooth"})} className='scroll-top' />
    
        <div className="callToActon">
            {links}
        </div>
        <div className="footer-contact">
          <div className="send-message">
            <input type="text" placeholder='Write Message' />
            <button className='send'>Send</button>
          </div>
          <div className="footer-links">
    <FaFacebook className='social-icons' title="facebook" aria-label='connect in facebook'/>
    <FaInstagram className='social-icons' title='instagram' aria-label='connect in instagram' />
    <FaYoutube className='social-icons' title='youtube' aria-label='connect in youtube' />
  </div>
        </div>
    <p>&copy;{new Date().getFullYear()} NILESTORE. All Right Reserved</p>
    </div>
  </section>
  )
}

export default Footer