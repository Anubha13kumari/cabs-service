import React from 'react'
import '../../App.css'
import logo from "../../assets/vintage.png";

const Navbar = () => {
  return (
    <div className="navbar">
        <img src={logo} alt="" />
        <button>I'm a driver</button>
      </div>
  )
}

export default Navbar