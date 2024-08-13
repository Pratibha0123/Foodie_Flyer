import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import { StoreContext } from '../../Context/StoreContext';
import './Cart.css';

const CartPage = () => {
  const navigate = useNavigate();
  const { cartItems, getTotalCartAmount, removeFromCart, food_list } = useContext(StoreContext);
  
  const [promoCode, setPromoCode] = useState('');
  const [discount, setDiscount] = useState(0);
  const validPromoCodes = { 'SAVE10': 10, 'SAVE20': 20 }; 

  const handleApplyPromoCode = () => {
    if (validPromoCodes[promoCode]) {
      setDiscount(validPromoCodes[promoCode]);
    } else {
      setDiscount(0);
      alert('Invalid promo code');
    }
  };

  const getTotalWithDiscount = () => {
    const total = getTotalCartAmount();
    return total - (total * (discount / 100));
  };

  // const handleClearCart = () => {

  //   setCartItem({});
  // };

  return (
    <div className="cart">
      <div className='cart-items'>
        <div className="cart-item-title">
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {Object.keys(cartItems).length > 0 ? (
          Object.keys(cartItems).map((itemId) => {
            const item = food_list.find(product => product.id === itemId);
            return item && cartItems[itemId] > 0 ? (
              <div key={itemId}>
                <div className="cart-item-title cart-items-item">
                  <p>{item.name}</p>
                  <img src={item.image} alt={item.name} />
                  <p>${item.price.toFixed(2)}</p>
                  <p>{cartItems[itemId]}</p>
                  <p>${(item.price * cartItems[itemId]).toFixed(2)}</p>
                  <button onClick={() => removeFromCart(itemId)}>X</button>              
                </div>
                <hr />
              </div>
            ) : null;
          })
        ) : (
          <p>Your cart is empty.</p>
        )}
        <hr />
        <div className="cart-bottom">
          <div className="cart-total">
            <h2>Cart Total</h2>
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>${getTotalCartAmount().toFixed(2)}</p>
            </div>
            <div className="cart-total-details">
              <p>Delivery Fee</p>
              <p>${2}</p>
            </div>
            <div className="cart-total-details">
              <b>Total</b>
              <p>${(getTotalWithDiscount() + 2).toFixed(2)}</p>
            </div>
            <button onClick={() => navigate('/placeOrder')}>PROCEED TO CHECKOUT</button>
          </div>
          <div className="cart-promocode">
            <p>If you have a promo code, enter it here</p>
            <div className="cart-promocode-input">
              <input 
                type="text" 
                placeholder='Promo code' 
                value={promoCode} 
                onChange={(e) => setPromoCode(e.target.value)} 
              />
              <button onClick={handleApplyPromoCode}>Submit</button>
            </div>
          </div>
         
        </div>
      </div>
    </div>
  );
};

export default CartPage;
