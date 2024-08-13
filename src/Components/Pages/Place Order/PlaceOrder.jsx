import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { clearCart } from '../../../redux/slices/cartSlice';
import { useNavigate } from 'react-router-dom';
import './PlaceOrder.css'; 

const PlaceOrder = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cart = useSelector(state => state.cart); 

  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');


  const calculateTotal = () => {
    return cart.items.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  };

  const calculateTotalItems = () => {
    return cart.items.reduce((acc, item) => acc + item.quantity, 0);
  };

  const handlePlaceOrder = () => {
    if (name && address && phone) {
      alert('Order placed successfully!');
      dispatch(clearCart()); 
      navigate('/'); 
    } else {
      alert('Please fill in all the details.');
    }
  };

  return (
    <div className="place-order">
      <h1>Place Your Order</h1>
      <div className="order-summary">
       
        <div className="order-details">
          <p><strong>Total Items:</strong> {calculateTotalItems()}</p>
          <p><strong>Total Price:</strong> ${calculateTotal().toFixed(2)}</p>
        </div>
      </div>
      <div className="order-form">
        <h2>Delivery Details</h2>
        <form onSubmit={(e) => e.preventDefault()}>
          <label>
            Name:
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
          </label>
          <label>
            Address:
            <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} />
          </label>
          <label>
            Phone:
            <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} />
          </label>
          <button type="button" onClick={handlePlaceOrder}>Place Order</button>
        </form>
      </div>
    </div>
  );
};

export default PlaceOrder;


// import  { useState } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { clearCart } from '../../../redux/slices/cartSlice';
// import { useNavigate } from 'react-router-dom';
// import './PlaceOrder.css'; 

// const PlaceOrder = () => {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const cart = useSelector(state => state.cart); 

//   const [name, setName] = useState('');
//   const [address, setAddress] = useState('');
//   const [phone, setPhone] = useState('');

//   const calculateTotal = () => {
//     return cart.items.reduce((acc, item) => acc + (item.price * item.quantity), 0);
//   };

//   const handlePlaceOrder = () => {
//     if (name && address && phone) {
//       alert('Order placed successfully!');
//       dispatch(clearCart()); 
//       navigate('/'); 
//     } else {
//       alert('Please fill in all the details.');
//     }
//   };

//   return (
//     <div className="place-order">
//       <h1>Place Your Order</h1>
//       <div className="order-summary">
//         <h2>Order Summary</h2>
//         <div className="order-details">
//           <p><strong>Total Items:</strong> {cart.items.reduce((acc, item) => acc + item.quantity, 0)}</p>
//           <p><strong>Total Price:</strong> ${calculateTotal().toFixed(2)}</p>
//         </div>
//       </div>
//       <div className="order-form">
//         <h2>Delivery Details</h2>
//         <form onSubmit={(e) => e.preventDefault()}>
//           <label>
//             Name:
//             <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
//           </label>
//           <label>
//             Address:
//             <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} />
//           </label>
//           <label>
//             Phone:
//             <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} />
//           </label>
//           <button type="button" onClick={handlePlaceOrder}>Place Order</button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default PlaceOrder;
