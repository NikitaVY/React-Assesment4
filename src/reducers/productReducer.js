const initialState = [
    
    { id: 1, name: 'Apple Iphone-12 Smartphone', price: 32999, image: "images/apple-iphone-12.jpg"},
    { id: 2, name: 'Flare Pro Smartwatch', price: 5499, image: "images/smartwatch.webp" },
    { id: 3, name: 'Nothing Ear Buds (Ear 2 Black)', price: 10999, image: "images/earbud.jpg" },
    { id: 4, name: 'Eleon Dhani Headset', price: 2500, image: "images/headset.png" },
    
  ];
  
  const productReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'LIST_PRODUCTS':
        return state;
      default:
        return state;
    }
  };
  
  export default productReducer;
  