import React from 'react'
import logo from './assets/logo.png'
import "./navbar.css";
function Navbar() {
  return (
    <>
    
    <div className='nav'>
      <img src={logo} alt="My logo" width="50" height="60"/>
        
        <ul>
            <li>
                <a href="https://www.einpunk.finance/">Home</a>
            </li>
            <li>
                <a href="https://www.einpunk.finance/about" >About</a>
            </li>
            <li>
                <a href="https://www.einpunk.finance/howtobuy">How to buy</a>
            </li>
            <li>
                <a href="https://www.einpunk.finance/buynow">Buy Now</a>
            </li>
            <li>
                <button>Connect Wallet</button>
            </li>
        </ul>
    </div>
    
    </>
  )
}

export default Navbar