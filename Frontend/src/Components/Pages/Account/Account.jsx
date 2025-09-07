import  { useState } from "react";
import { Link } from "react-router-dom";  // ✅ import Link
import "./Account.css";

const Account = () => {
  const [user, setUser] = useState({
    name: "Pratibha Sharma",
    email: "pratibha@example.com",
    phone: "9876543210",
  });

  const [editMode, setEditMode] = useState(false);
  const [formData, setFormData] = useState(user);

  const [showAddressForm, setShowAddressForm] = useState(false);
  const [address, setAddress] = useState({
    line1: "123 Main Street",
    city: "Delhi",
    state: "Delhi",
    pincode: "110001",
  });
  const [addressForm, setAddressForm] = useState(address);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSave = () => {
    setUser(formData);
    setEditMode(false);
    alert("Profile updated successfully!");
  };

  const handleAddressChange = (e) => {
    const { name, value } = e.target;
    setAddressForm({ ...addressForm, [name]: value });
  };

  const handleSaveAddress = () => {
    setAddress(addressForm);
    setShowAddressForm(false);
    alert("Address updated successfully!");
  };

  return (
    <div className="account-page">
      <h2 className="account-title">My Account</h2>

      {/* Profile Card */}
      <div className="account-card">
        <h3>Profile</h3>
        {editMode ? (
          <div className="edit-form">
            <label>
              Name:
              <input type="text" name="name" value={formData.name} onChange={handleChange} />
            </label>
            <label>
              Email:
              <input type="email" name="email" value={formData.email} onChange={handleChange} />
            </label>
            <label>
              Phone:
              <input type="text" name="phone" value={formData.phone} onChange={handleChange} />
            </label>
            <div className="button-group">
              <button className="save-btn" onClick={handleSave}>Save</button>
              <button className="cancel-btn" onClick={() => setEditMode(false)}>Cancel</button>
            </div>
          </div>
        ) : (
          <div>
            <p><strong>{user.name}</strong></p>
            <p>{user.email}</p>
            <p>{user.phone}</p>
            <button className="edit-btn" onClick={() => setEditMode(true)}>Edit Profile</button>
          </div>
        )}
      </div>

      {/* Quick Links */}
      <div className="account-card">
        <h3>Quick Access</h3>
        <Link to="/cart" className="link-btn">My Orders</Link>
        <Link to="/cart" className="link-btn">My Cart</Link>
        <button className="link-btn" onClick={() => setShowAddressForm(true)}>
          Saved Addresses
        </button>
      </div>

      {showAddressForm && (
        <div className="account-card">
          <h3>Saved Address</h3>
          <div className="edit-form">
            <label>
              Address Line 1:
              <input type="text" name="line1" value={addressForm.line1} onChange={handleAddressChange} />
            </label>
            <label>
              City:
              <input type="text" name="city" value={addressForm.city} onChange={handleAddressChange} />
            </label>
            <label>
              State:
              <input type="text" name="state" value={addressForm.state} onChange={handleAddressChange} />
            </label>
            <label>
              Pincode:
              <input type="text" name="pincode" value={addressForm.pincode} onChange={handleAddressChange} />
            </label>
            <div className="button-group">
              <button className="save-btn" onClick={handleSaveAddress}>Save Address</button>
              <button className="cancel-btn" onClick={() => setShowAddressForm(false)}>Cancel</button>
            </div>
          </div>
        </div>
      )}

      {/* Settings */}
      <div className="account-card">
    
        <button className="logout-btn">Logout</button>
      </div>
    </div>
  );
};

export default Account;
