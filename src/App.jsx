import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Pages/Home/Home';
import Cart from './Components/Pages/Cart/CartPage';
import PlaceOrder from './Components/Pages/Place Order/PlaceOrder'; 
import Footer from './Components/Footer/Footer';
import LoginPopUp from './Components/LoginPopUp/LoginPopUp';
import ContactUs from './Components/Contact/ContactUs';
import Menu from './Components/ExploreMenu/Menu';
import AboutUs from './Components/Pages/Info/AboutUs';
import Delivery from './Components/Pages/Info/Delivery';
import PrivacyPolicy from './Components/Pages/Info/PrivacyPolicy';
import PaymentPage from './Components/Pages/Payment/PaymentPage';
import OrderSuccessPage from './Components/Pages/OrderSuccess/OrderSuccessPage';
const App = () => {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <div className='app'>
      {showLogin && <LoginPopUp setShowLogin={setShowLogin} />}
      <Navbar setShowLogin={setShowLogin} />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contact' element={<ContactUs />} />
        <Route path='/menu' element={<Menu/>} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/placeOrder' element={<PlaceOrder />} />
        <Route path='/about' element={<AboutUs />} />
         <Route path='/delivery' element={<Delivery />} />
        <Route path='/privacy-policy' element={<PrivacyPolicy />} />
       <Route path='/payment' element={<PaymentPage/>} />
        <Route path='/orderSuccess' element={<OrderSuccessPage/>} />


      </Routes>
      <Footer />
    </div>
  );
}

export default App;
