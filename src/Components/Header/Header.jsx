import './Header.css';
import { useState} from "react";
import { Link } from "react-router-dom";


function Header() {
    const [menu, setMenu] = useState("home");
  
  return (
    <div className='header'>
        <div className="header-contents">
            <h2>Order your favourite food here</h2>
            <p>Choose from a divrse menu featuring a delectable array of dishes crafted with finest</p>

         <button onClick={() => document.getElementById("/menu").scrollIntoView({ behavior: "smooth" })}>
          <Link to="/menu" onClick={() => setMenu("menu")} className={menu === "menu" ? "active" : ""}>View Menu</Link>
          
         </button>
        </div>
    </div>
  )
}

export default Header