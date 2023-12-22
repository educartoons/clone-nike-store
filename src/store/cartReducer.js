import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

const cartReducer = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
    addItem: (state, action) => {
      const newItems = [...state.items];
      newItems.push({ ...action.payload, quantity: 1 });
      state.items = [...newItems];
    },
    removeItem: (state, action) => {
      const newItems = state.items.filter((item) => item.id !== action.payload);
      state.items = [...newItems];
    },
    updateQuantity: (state, action) => {
      const index = state.items.findIndex(
        (item) => action.payload.id === item.id
      );

      state.items[index] = {
        ...state.items[index],
        quantity: action.payload.quantity,
      };
    },
  },
});

const { reducer, actions } = cartReducer;

export const { addItem, removeItem, updateQuantity } = actions;

export default reducer;
