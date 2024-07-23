const initialState = [];

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      if (state.find(item => item.id === action.payload.id)) {
        return state;
      }
      return [...state, action.payload];
    case 'DELETE_FROM_CART':
      return state.filter(item => item.id !== action.payload.id);
    default:
      return state;
  }
};

export default cartReducer;
