import { useNavigate } from "react-router-dom";
import "./OrderSuccessPage.css";

const OrderSuccessPage = () => {
  const navigate = useNavigate();

  return (
    <div className="order-success-container">
      <svg
        className="success-icon"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#22c55e" 
        strokeWidth="2"
      >
        <circle cx="12" cy="12" r="10" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4" />
      </svg>

  
      <h1 className="success-title">Order Placed Successfully!</h1>

   
      <p className="success-message">
        Thank you for shopping with us. Your order has been placed and will be
        delivered soon. You can track the status in the <b>My Orders</b> section.
      </p>

    
      <div className="button-group">
        {/* <button
          onClick={() => navigate("/orders")}
          className="btn btn-primary"
        >
          View Orders
        </button> */}
        <button
          onClick={() => navigate("/")}
          className="btn btn-secondary"
        >
          Continue Shopping
        </button>
      </div>
    </div>
  );
};

export default OrderSuccessPage;
