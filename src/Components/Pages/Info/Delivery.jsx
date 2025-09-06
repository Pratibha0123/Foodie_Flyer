import './InfoPages.css';

function Delivery() {
  return (
    <div className="info-page">
      <h1>Delivery Information</h1>
      <p>
        We provide fast and reliable delivery services across all supported
        locations. Our delivery partners ensure your food reaches you hot and
        fresh.
      </p>
      <ul>
        <li>Standard delivery time: <strong>30–45 minutes</strong></li>
        <li>Free delivery on orders above <strong>₹500</strong></li>
        <li>Real-time order tracking available</li>
      </ul>
      <p>
        For any delivery concerns, please reach out to our support team. Your
        satisfaction is our priority.
      </p>
    </div>
  );
}

export default Delivery;
