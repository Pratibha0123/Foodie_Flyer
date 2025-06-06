import  { useState } from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom';


// eslint-disable-next-line react/prop-types
function Navbar({setShowLogin}) {
  const[menu,setMenu] =useState("home");
  
  return (
    <div className='navbar'>
      <Link to={"/"}><img src={assets.logo} alt=""  className='logo'/></Link>
      <ul className="navbar-menu">
        <Link  to="/" onClick={()=>setMenu("home")} className={menu ==='home'?"active":""}>Home</Link>
        <a href={'/explore-menu'} onClick={()=>setMenu("menu")}className={menu ==='menu'?"active":""}>Menu</a>
        <a  href='#AppDownload' onClick={()=>setMenu("mobile-app")}className={menu ==='mobile-app'?"active":""}>Mobile-app</a>
        <Link to={'/contact'} onClick={()=>setMenu("contact")} className={menu ==='contact'?"active":""}>conact-us</Link> 
      </ul>

      <div className="navbar-right">
        <img src={assets.search_icon} alt="" />
        <div className="navbar-search-icon">
         <Link to={'/cart'}><img src={assets.basket_icon} alt="" /></Link>
          <div className="dot"></div>
        </div>
        <button onClick={()=>setShowLogin(true)}>sign</button>
      </div>
        {/* <li>Home</li>
        <li>Menu</li>
        <li>Orders</li>
        <li>Cart</li>
        <li>About Us</li>
        <li>Account</li> */}
        
    
    </div>
  )
}

export default Navbar