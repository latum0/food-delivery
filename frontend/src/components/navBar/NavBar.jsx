import React, { useState } from 'react'
import './NavBar.css'
import { assets } from '../../assets/assets'

export const NavBar = () => {

    const [menuList,setMenu]=useState('home');

  return (
    <div className="nav-container">
        <div className="img-container">
            <img src={assets.logo} alt="" />
        </div>
        <div className="menu">
            <ul>
                <li><a href="" onClick={()=>setMenu('home')}>home {menuList==='home' ? <hr/>  : <></>}</a> </li>
                <li> <a href="" onClick={()=>setMenu('menu')}>menu {menuList==='menu' ? <hr/> : <></>}</a> </li>
                <li> <a href="" onClick={()=>setMenu('mobile app')} >mobile app  {menuList==='mobile app' ? <hr/> : <></> }</a></li>
                <li> <a href="" onClick={()=>setMenu('contact us')}>contact us {menuList==='contact us' ? <hr/> : <></> }</a> </li>
            </ul>
        </div>
        <div className="sign-cart">

            <a href=""><img src={assets.search_icon} alt="" /></a>
            <a href=""><img src={assets.basket_icon} alt="" /></a>
            
            <button className="sign">
                Sign in
            </button>
        </div>


    </div>
  )
}

