import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface CartState {
  items: Array<any>;
  totalQuantity: number;
  totalAmount: number;
}

const initialState: CartState = {
  items: [],
  totalQuantity: 0,
  totalAmount: 0
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, actions : PayloadAction<any>) => {
        state.totalQuantity += actions.payload.qty

    },
    removeFromCart: (state, actions : PayloadAction<any>) => {
        state.totalQuantity -= actions.payload.qty;
    },
    clearCart: (state) => {
      state = initialState;
    },
  },
});

// Action creators are generated for each case reducer function
export const cartActions = cartSlice.actions;

export default cartSlice.reducer;