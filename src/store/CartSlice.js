import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);
    },
    removeItem: (state, action) => {
      let findIndex = -1;
      for (let count = 0; count < state.items.length; count++) {
        if (state.items[count].card.info.id === action.payload.card.info.id) {
          findIndex = count;
        }
      }
      state.items.splice(findIndex, 1);
    },
    clearCart: (state, action) => {
      state.items.length = 0;
    },
  },
});

export default CartSlice.reducer;
export const { addItem, removeItem, clearCart } = CartSlice.actions;
