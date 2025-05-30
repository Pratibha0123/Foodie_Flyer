import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Pages/Home/Home';
import Cart from './Components/Pages/Cart/CartPage';
import PlaceOrder from './Components/Pages/Place Order/PlaceOrder'; 
import Footer from './Components/Footer/Footer';
import LoginPopUp from './Components/LoginPopUp/LoginPopUp';
import ContactUs from './Components/Contact/ContactUs';
import ExplorMenu from './Components/ExploreMenu/ExplorMenu';
// import Menu from './Components/ExploreMenu/Menu';

const App = () => {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <div className='app'>
      {showLogin && <LoginPopUp setShowLogin={setShowLogin} />}
      <Navbar setShowLogin={setShowLogin} />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contact' element={<ContactUs />} />
        <Route path='/explore-menu' element={<ExplorMenu/>} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/placeOrder' element={<PlaceOrder />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
