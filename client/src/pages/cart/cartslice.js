// redux/cartSlice.js

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  carts: {}, // 사용자별 장바구니를 저장하는 객체
};

const cartslice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action) {
      const { userId, item } = action.payload;
      if (!state.carts[userId]) {
        state.carts[userId] = [];
      }
      state.carts[userId].push(item);
    },
    removeItem(state, action) {
      const { userId, itemId } = action.payload;
      if (state.carts[userId]) {
        state.carts[userId] = state.carts[userId].filter(item => item.id !== itemId);
      }
    },
    incrementCount(state, action) {
      const { userId, itemId } = action.payload;
      const userCart = state.carts[userId];
      if (userCart) {
        const item = userCart.find(item => item.id === itemId);
        if (item) {
          item.count += 1;
        }
      }
    },
  },
});

export const { addItem, removeItem, incrementCount } = cartslice.actions;
export default cartslice;
