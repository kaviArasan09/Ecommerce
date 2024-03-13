import './Navbar.css'
import React from 'react'
import Shopify from '../assets/Shopify.jpg'
import { FaCartShopping } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='navbar'>
            <div className='nav-logo'>
                <img className='bagimg' src={Shopify} alt='' />
                <p>SHOPPER</p>
            </div>
            <div className='menu-list'>
                <Link to='/' style={{textDecoration:'none'}}>Shop</Link>
                <Link to='/men' style={{textDecoration:'none'}}>Men</Link>
                <Link to='/women' style={{textDecoration:'none'}}>Women</Link>
                <Link to='/kids' style={{textDecoration:'none'}}>Kids</Link>
            </div>
            <div className='login-cart'>
                <Link to='/login'><button>Login</button></Link>
                <Link to='/cart'><FaCartShopping className='cart-icon'/></Link>
                <div className='cart-count'>0</div>
            </div>
        </div>
    )
}

export default Navbar
