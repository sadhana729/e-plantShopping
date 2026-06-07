import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem, updateQuantity, clearCart } from './CartSlice';

const CartItem = ({ onContinueShopping }) => {
  const cart = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const calculateTotalAmount = () => {
    return cart.reduce((total, item) => {
      return total + parseFloat(item.cost.replace('$', '')) * item.quantity;
    }, 0).toFixed(2);
  };

  const calculateTotalCost = (item) => {
    return (parseFloat(item.cost.replace('$', '')) * item.quantity).toFixed(2);
  };

  const handleIncrement = (item) => {
    dispatch(updateQuantity({ name: item.name, quantity: item.quantity + 1 }));
  };

  const handleDecrement = (item) => {
    if (item.quantity > 1) {
      dispatch(updateQuantity({ name: item.name, quantity: item.quantity - 1 }));
    } else {
      dispatch(removeItem(item.name));
    }
  };

  const handleRemove = (item) => {
    dispatch(removeItem(item.name));
  };

  const handleContinueShopping = (e) => {
    e.preventDefault();
    onContinueShopping(e);
  };

  const handleCheckout = (e) => {
    alert('Checkout successful! functionality to be added for future reference');
    dispatch(clearCart());
    onContinueShopping(e);
  };

  return (
    <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '20px', fontSize: '24px', color: '#333' }}>
        🛒 Your Cart
      </h2>

      {cart.length === 0 ? (
        <div style={{ textAlign: 'center', padding: '40px', color: '#666' }}>
          <p style={{ fontSize: '18px', marginBottom: '20px' }}>Your cart is empty.</p>
          <button onClick={handleContinueShopping} style={btnGreen}>
            Continue Shopping
          </button>
        </div>
      ) : (
        <>
          {cart.map((item, index) => (
            <div key={index} style={{
              display: 'flex', alignItems: 'center', gap: '20px',
              borderBottom: '1px solid #eee', padding: '16px 0',
            }}>
              <img src={item.image} alt={item.name}
                style={{ width: '100px', height: '100px', objectFit: 'cover', borderRadius: '8px', flexShrink: 0 }} />
              <div style={{ flex: 1 }}>
                <div style={{ fontWeight: 'bold', fontSize: '18px', marginBottom: '4px' }}>{item.name}</div>
                <div style={{ color: '#e74c3c', marginBottom: '8px' }}>{item.cost}</div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
                  <button onClick={() => handleDecrement(item)} style={qtyBtn}>−</button>
                  <span style={{ fontWeight: 'bold', fontSize: '16px', minWidth: '24px', textAlign: 'center' }}>
                    {item.quantity}
                  </span>
                  <button onClick={() => handleIncrement(item)} style={qtyBtn}>+</button>
                </div>
                <div style={{ fontWeight: 'bold', color: '#333' }}>
                  Subtotal: ${calculateTotalCost(item)}
                </div>
              </div>
              <button onClick={() => handleRemove(item)} style={{
                backgroundColor: '#e74c3c', color: 'white', border: 'none',
                padding: '8px 14px', borderRadius: '6px', cursor: 'pointer', fontSize: '14px',
              }}>
                Delete
              </button>
            </div>
          ))}

          <div style={{
            textAlign: 'right', fontSize: '22px', fontWeight: 'bold',
            margin: '20px 0', color: '#333',
          }}>
            Total Cart Amount: ${calculateTotalAmount()}
          </div>

          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', marginTop: '10px' }}>
            <button onClick={handleContinueShopping} style={btnGreen}>
              ← Continue Shopping
            </button>
            <button onClick={(e) => handleCheckout(e)} style={btnGreen}>
              Checkout →
            </button>
          </div>
        </>
      )}
    </div>
  );
};

const btnGreen = {
  backgroundColor: '#4CAF50',
  color: 'white',
  border: 'none',
  padding: '14px 30px',
  fontSize: '18px',
  borderRadius: '6px',
  cursor: 'pointer',
};

const qtyBtn = {
  backgroundColor: '#f0f0f0',
  border: '1px solid #ccc',
  color: '#333',
  fontSize: '18px',
  width: '34px',
  height: '34px',
  borderRadius: '5px',
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};

export default CartItem;
