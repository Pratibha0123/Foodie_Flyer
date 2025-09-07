import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { useState } from "react";
import "./CheckoutForm.css"; // optional for styling

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) return;

    setLoading(true);
    setErrorMessage("");
    setSuccess(false);

    const cardElement = elements.getElement(CardElement);

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: cardElement,
    });

    if (error) {
      setErrorMessage(error.message);
      setLoading(false);
    } else {
      console.log("[PaymentMethod]", paymentMethod);
      setSuccess(true);
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="checkout-form">
      <h2>Complete Payment</h2>

      <div className="card-input">
        <CardElement options={{ style: { base: { fontSize: "16px" } } }} />
      </div>

      {errorMessage && <p className="error">{errorMessage}</p>}
      {success && <p className="success">Payment method created successfully!</p>}

      <button type="submit" disabled={!stripe || loading}>
        {loading ? "Processing..." : "Pay"}
      </button>
    </form>
  );
};

export default CheckoutForm;
