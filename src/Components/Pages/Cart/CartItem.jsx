import PropTypes from "prop-types";
import "./CartItem.css";

const CartItem = ({ item, quantity, removeFromCart }) => {
  return (
    <div className="cart-item-card">
      <div className="cart-item-img">
        <img src={item.image} alt={item.name} />
      </div>
      <div className="cart-item-info">
        <h3 className="item-name">{item.name}</h3>
        <p className="item-price">Price: ${item.price.toFixed(2)}</p>
        <p className="item-qty">Qty: {quantity}</p>
        <p className="item-total">
          Total: ₹{(item.price * quantity).toFixed(2)}
        </p>
        <button className="remove-btn" onClick={() => removeFromCart(item.id)}>
          Remove
        </button>
      </div>
    </div>
  );
};

CartItem.propTypes = {
  item: PropTypes.object.isRequired,
  quantity: PropTypes.number.isRequired,
  removeFromCart: PropTypes.func.isRequired,
};

export default CartItem;
