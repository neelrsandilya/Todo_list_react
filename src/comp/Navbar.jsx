import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
   <div>
    <nav class="navbar">
    <div class="logo">       <a href="https://imgbb.com/"><img src="https://i.ibb.co/qF01bz31/Screenshot-41-removebg-preview.png" alt="Screenshot-41-removebg-preview" border="0"/> </a>
    </div>
    <ul class="nav-links">
      <li><a href="#home">Home</a></li>
      <li><a href="#about">About</a></li>
      <li><a href="#services">Services</a></li>
      <li><a href="#contact">Contact</a></li>
    </ul>
  </nav>
  </div> 
  )
}

export default Navbar
