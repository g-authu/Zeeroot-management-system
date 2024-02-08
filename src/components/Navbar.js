import React, {useState} from 'react'
import {Link} from "react-router-dom"
import "../components/Navbar.css"
import ReorderIcon from '@mui/icons-material/Reorder';
import "../components/UserDataTable"
// import { useState } from "react"
function Navbar() {
  const [openLinks, setOpenLinks] = useState(false);

  const toggleNavbar = () => {
    setOpenLinks(!openLinks);
  };
  return (
    <div className="navbar">
      <div className="leftSide" id={openLinks ? "open" : "close"}> 
      <Link to="/">       <img src={"https://iconape.com/wp-content/files/dj/207592/svg/207592.svg"} />
 </Link>

      <div className="hiddenLinks">
          <Link to="/"> Home </Link>
          <Link to="/UserDataTable"> USERS </Link>
          <Link to="/contact"> Contact </Link>
        </div>
      </div>
      <div className="rightSide">
        <Link to="/"> HOME </Link>
        <Link to="/UserDataTable"> USERS </Link>
        <Link to="/contact"> CONTACT </Link>
        <button onClick={toggleNavbar}>
          <ReorderIcon />
        </button>
         </div>

      
    </div>
  )
}

export default Navbar