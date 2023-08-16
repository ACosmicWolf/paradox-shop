import React from 'react'

export default function Navbar() {
  return (
      <nav>
        <button className='nav-buttons'>
          <span className='btn-text'>Home</span>
        </button>
        <button className='nav-buttons'>
          <span className='btn-text'>About</span>
        </button>
        <button className='nav-buttons'>
          <span className='btn-text'>Items</span>
        </button>
        <button className='nav-buttons'>
          <span className='btn-text'>Contact Us</span>
        </button>
      </nav>
  )
}
