export const addToCart = product => ({
    type: 'ADD_TO_CART',
    payload: product
  });
  
  export const deleteFromCart = product => ({
    type: 'DELETE_FROM_CART',
    payload: product
  });
  