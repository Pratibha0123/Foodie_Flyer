import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { StoreContext } from "../../Context/StoreContext";
import CartItem from "./CartItem";
import "./Cart.css";
import empty_image from "../../../assets/emptyCartImg.png";

const CartPage = () => {
  const navigate = useNavigate();
  const { cartItems, getTotalCartAmount, removeFromCart, food_list } =
    useContext(StoreContext);

  const [promoCode, setPromoCode] = useState("");
  const [discount, setDiscount] = useState(0);

  const validPromoCodes = { SAVE10: 10, SAVE20: 20 };

  const handleApplyPromoCode = () => {
    if (validPromoCodes[promoCode]) {
      setDiscount(validPromoCodes[promoCode]);
      alert(`Promo code applied: ${validPromoCodes[promoCode]}% off`);
    } else {
      setDiscount(0);
      alert("Invalid promo code");
    }
  };

  const subtotal = getTotalCartAmount();
  const deliveryFee = subtotal === 0 ? 0 : 2;

  const getTotalWithDiscount = () => {
    return subtotal - subtotal * (discount / 100);
  };

  const isCartEmpty = !Object.values(cartItems).some((qty) => qty > 0);

  return (
    <div className="cart">
      {isCartEmpty ? (
        <div className="empty-cart-box">
          <h2>Your Cart is empty</h2>
          <p>Order today’s deals and find something you’ll love.</p>
          <img src={empty_image} alt="Empty cart" />

          <div className="empty-cart-actions">
            <button onClick={() => navigate("/")}>Order Today’s Deals</button>
          </div>
        </div>
      ) : (
        <div className="cart-content">
          {/* Left Side: Cart Items */}
          <div className="cart-items">
            {Object.keys(cartItems).map((itemId) => {
              const item = food_list.find((product) => product.id === itemId);
              return item && cartItems[itemId] > 0 ? (
                <CartItem
                  key={itemId}
                  item={item}
                  quantity={cartItems[itemId]}
                  removeFromCart={removeFromCart}
                />
              ) : null;
            })}
          </div>

          {/* Right Side: Order Summary + Promo Code */}
          <div className="cart-sidebar">
            <div className="cart-summary">
              <h2>Order Summary</h2>
              <div className="summary-row">
                <span>Subtotal:</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="summary-row">
                <span>Delivery Fee:</span>
                <span>${deliveryFee}</span>
              </div>
              <div className="summary-row total-row">
                <b>Total:</b>
                <b>${(getTotalWithDiscount() + deliveryFee).toFixed(2)}</b>
              </div>
              <button
                className="checkout-btn"
                onClick={() => navigate("/payment")}
              >
                Proceed to Checkout
              </button>
            </div>

            <div className="cart-promocode">
              <h3>Have a promo code?</h3>
              <div className="cart-promocode-input">
                <input
                  type="text"
                  placeholder="Enter promo code"
                  value={promoCode}
                  onChange={(e) => setPromoCode(e.target.value)}
                />
                <button onClick={handleApplyPromoCode}>Apply</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
