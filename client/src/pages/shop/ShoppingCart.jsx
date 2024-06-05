import React, { createContext, useReducer, useContext } from 'react';

// Initial state of the cart
const INITIAL_STATE = {
  cartItems: [],
};

// Create context
const CartContext = createContext(INITIAL_STATE);

// Reducer to manage cart state
const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      return {
        ...state,
        cartItems: [...state.cartItems, action.payload],
      };
    default:
      return state;
  }
};

// Context provider component
export const CartContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, INITIAL_STATE);

  return (
    <CartContext.Provider value={{ cartItems: state.cartItems, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

// Custom hook to use cart context
export const useCart = () => {
  return useContext(CartContext);
};
