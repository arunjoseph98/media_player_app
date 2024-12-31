import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='mt-5 container w-100' style={{height:'300px '}}>
      <div className='d-flex justify-content-between'>
        {/* intro */}
        <div style={{width:"400px"}}>
        <h5>
          <i class="fa-solid fa-music me-2"></i>
          MediaPlayer
        </h5>
        <div style={{fontSize:'14px'}}>
          <p>Designed and built with all the love in the world by the Luminar team with the help of our contributors.</p>
          <p>Code licensed MIT, docs CC BY 3.0.</p>
          <p>Currently v5.3.3.</p>
        </div>
        </div>
        {/* link */}
        <div className='d-flex flex-column'>
          <h5>Links</h5>
          <Link to={'/'} style={{textDecoration:'none',color:'white', fontSize:'15px'}}>Landing page</Link>
          <Link to={'/home'} style={{textDecoration:'none',color:'white', fontSize:'15px'}}>Home</Link>
          <Link to={'/history'} style={{textDecoration:'none',color:'white', fontSize:'15px'}}>Watch History</Link>

        </div>
        {/* guid */}
        <div className='d-flex flex-column'>
          <h5>Guides</h5>
          <a href='https://react.dev/' target='_blank' style={{textDecoration:'none',color:'white', fontSize:'15px'}}>React</a>
          <a href='https://react-bootstrap.netlify.app/' target='_blank' style={{textDecoration:'none',color:'white', fontSize:'15px'}}>React Bootstrap</a>
          <a href='https://getbootstrap.com/' target='_blank' style={{textDecoration:'none',color:'white', fontSize:'15px'}}>Bootstrap</a>

        </div>
        {/* contact us  */}
        <div className='d-flex flex-column' >
          <h5>Contact Us</h5>
          <div className="d-flex ">
            <input className='form-control me-2'  type="text" placeholder='Enter your email hear..' />
            <button className='btn btn-info'><i class="fa-solid fa-arrow-right"></i></button>
          </div>
          <div className="d-flex justify-content-between mt-3 "  >
            <a href="https://react.dev/" target='_blank' style={{textDecoration:'none',color:'white', fontSize:'18px'}}> <i class="fa-brands fa-twitter"></i></a>
            <a href="https://react.dev/" target='_blank' style={{textDecoration:'none',color:'white', fontSize:'18px'}}> <i class="fa-brands fa-instagram"></i></a>
            <a href="https://react.dev/" target='_blank' style={{textDecoration:'none',color:'white', fontSize:'18px'}}> <i class="fa-brands fa-github"></i></a>
            <a href="https://react.dev/" target='_blank' style={{textDecoration:'none',color:'white', fontSize:'18px'}}> <i class="fa-brands fa-facebook"></i></a>
            <a href="https://react.dev/" target='_blank' style={{textDecoration:'none',color:'white', fontSize:'18px'}}><i class="fa-brands fa-linkedin"></i> </a>
            <a href="https://react.dev/" target='_blank' style={{textDecoration:'none',color:'white', fontSize:'18px'}}> <i class="fa-solid fa-phone"></i></a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer