import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { StoreContext } from "../../Context/StoreContext";
import "./PaymentPage.css";
import { Link } from "react-router-dom";

function PaymentPage() {
  const { cartItems, getTotalCartAmount, food_list } = useContext(StoreContext);
  const [paymentMethod, setPaymentMethod] = useState("upi");
  const [promoCode, setPromoCode] = useState("");
  const [discount, setDiscount] = useState(0);
  const navigate = useNavigate();

  const validPromoCodes = { SAVE10: 10, SAVE20: 20 };
    const user = {
    name: "Pratibha Sharma",
    address: "123, MG Road, Indore, Madhya Pradesh",
    phone: "+91 9876543210",
  };

  const handleApplyPromoCode = () => {
    if (validPromoCodes[promoCode.toUpperCase()]) {
      setDiscount(validPromoCodes[promoCode.toUpperCase()]);
      alert(`Promo code applied: ${validPromoCodes[promoCode.toUpperCase()]}% off`);
    } else {
      setDiscount(0);
      alert("Invalid promo code");
    }
  };

  const getTotalWithDiscount = () => {
    const total = getTotalCartAmount();
    return total - total * (discount / 100);
  };

  const deliveryFee = getTotalCartAmount() === 0 ? 0 : 2;
  const finalTotal = (getTotalWithDiscount() + deliveryFee).toFixed(2);

  const handlePayment = () => {
    alert(`Payment successful via ${paymentMethod.toUpperCase()}`);
    navigate("/orderSuccess");
  };

  // eslint-disable-next-line no-unused-vars
  const isCartEmpty = Object.keys(cartItems).length === 0;

  return (
    <div className="payment-container">
    
          <div className="payment-left">
           <div className="payment-section">
           <h2>Delivery Address</h2>
          <div className="address-box">
            <p><b>{user.name}</b></p>
            <p>{user.address}</p>
            <p>Phone: {user.phone}</p>
               <button className="change-btn">Change / Add Address</button>
            </div>
          </div>


            <div className="payment-section">
              <h2>Payment Options</h2>
              <div className="payment-methods">
                <label>
                  <input
                    type="radio"
                    name="payment"
                    value="upi"
                    checked={paymentMethod === "upi"}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                  />
                  UPI (Google Pay, PhonePe, Paytm)
                </label>
                <label>
                  <input
                    type="radio"
                    name="payment"
                    value="card"
                    checked={paymentMethod === "card"}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                  />
                  Credit / Debit Card
                </label>
                <label>
                  <input
                    type="radio"
                    name="payment"
                    value="netbanking"
                    checked={paymentMethod === "netbanking"}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                  />
                  Net Banking
                </label>
                <label>
                  <input
                    type="radio"
                    name="payment"
                    value="cod"
                    checked={paymentMethod === "cod"}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                  />
                  Cash on Delivery
                </label>
              </div>
            </div>

            {paymentMethod === "netbanking" && (
              <div className="payment-section netbanking-qr">
                <h3>Scan this QR code to pay via Net Banking</h3>
                <p>(Click the QR to simulate payment success)</p>
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/0/0b/QR_code_for_mobile_English_Wikipedia.png"
                  alt="Fake Net Banking QR"
                  onClick={handlePayment}
                  style={{ cursor: "pointer" }}
                />
              </div>
            )}

            {paymentMethod === "card" && (
              <div className="payment-section card-form">
                <h3>Enter your card details</h3>
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    handlePayment();
                  }}
                >
                  <div className="form-group">
                    <label>Card Number</label>
                    <input type="text" placeholder="1234 5678 9012 3456" required />
                  </div>
                  <div className="form-group">
                    <label>Cardholder Name</label>
                    <input type="text" placeholder="John Doe" required />
                  </div>
                  <div className="form-row">
                    <div className="form-group">
                      <label>Expiry Date</label>
                      <input type="text" placeholder="MM/YY" required />
                    </div>
                    <div className="form-group">
                      <label>CVV</label>
                      <input type="password" placeholder="***" required />
                    </div>
                  </div>
                  <button type="submit" className="pay-btn">
                    Pay ₹{finalTotal}
                  </button>
                </form>
              </div>
            )}
          </div>

          <div className="payment-right">
            <div className="order-summary">
              <h2>Order Summary</h2>

              <div className="order-items">
                {food_list.map((item) =>
                  cartItems[item.id] ? (
                    <div className="order-item" key={item.id}>
                      <div className="order-item-left">
                        <img src={item.image} alt={item.name} />
                        <div>
                          <p className="order-item-name">{item.name}</p>
                          <p className="order-item-qty">
                            Qty: {cartItems[item.id]}
                          </p>
                        </div>
                      </div>
                      <div className="order-item-price">
                        ₹{(item.price * cartItems[item.id]).toFixed(2)}
                      </div>
                    </div>
                  ) : null
                )}
              </div>

              <div className="summary-row">
                <span>Subtotal:</span>
                <span>₹{getTotalCartAmount().toFixed(2)}</span>
              </div>
              <div className="summary-row">
                <span>Delivery Fee:</span>
                <span> ₹{deliveryFee}</span>
              </div>
              <div className="summary-row total-row">
                <b>Total:</b>
                <b>₹{finalTotal}</b>
              </div>

              {paymentMethod !== "card" && paymentMethod !== "netbanking" && (
                <button className="pay-btn" onClick={handlePayment}>
                <Link to="/order-success">Pay Now</Link>

                </button>
              )}

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
       
    </div>
  );
}

export default PaymentPage;
