import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteFromCart } from '../actions/cartActions';

const Cart = () => {
  const cart = useSelector(state => state.cart);
  const dispatch = useDispatch();

  const totalAmount = cart.reduce((total, item) => total + item.price, 0);

  return (
    <>
    <h2>Cart</h2>
    <div className="product1">
        {cart.map(item => (
          <div className="product-b">
            <img src={item.image} alt={item.name} />
            <h2>{item.name}</h2>
            <p> ₹{item.price}</p>
            <button onClick={() => dispatch(deleteFromCart(item))}>Remove</button>
          </div>
        ))}
    </div>
    <h3>Total: ₹{totalAmount}</h3>
    </>
  );
};

export default Cart;
