import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from '../actions/cartActions';

const ProductList = () => {
  const products = useSelector(state => state.products);
  const dispatch = useDispatch();

  return (
    <>
    <h2>Products</h2>
    <div className="product1">
        {products.map(product => (
            <div className="product">
            <img src={product.image} alt={product.name} />
            <h2>{product.name}</h2>
            <p> ₹{product.price}</p>
            <button onClick={() => dispatch(addToCart(product))}>Add to Cart</button>
          </div>
        ))}
    </div>
    </>
  );
};

export default ProductList;
