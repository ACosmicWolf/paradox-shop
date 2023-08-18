import React from 'react'

export default function Navbar() {
  return (
      <nav className='navbar'>
        <div className="logo-wrap">
          <div className="logo">LOGO</div>
        </div>
        <div className="nav-links">
           <div className="nav-btn">
              <button className='btn-nav-go h-100 w-100 '><h2>SHOP</h2></button>
           </div>
           <div className="nav-btn">
           <button className='btn-nav-go h-100 w-100 '><h2>ABOUT</h2></button>
           </div>
           <div className="nav-btn">
           <button className='btn-nav-go h-100 w-100 '><h2>CONTACT ME</h2></button>
           </div>
        </div>
      </nav>
  )
}
