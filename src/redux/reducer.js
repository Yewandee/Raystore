import { createSlice } from "@reduxjs/toolkit";

export const recipeReducer = createSlice({
    name: "recipe",
    initialState: {
        mode: "light",
        CartItem: [],
    },
    reducers: {
        setMode: (state) => {
            state.mode = state.mode === "light" ? "dark" : "light";
        },
        AddItemToCart: (state, action) => {
            const productExit = state.CartItem.find((item) => item.id === action.payload.id);
            if (productExit) {
                productExit.qty = +productExit.qty + 1
            } else {
                state.CartItem.push(action.payload)
            }
        },
        RemoveItemfromCart: (state, action) => {
            const productExit = state.CartItem.find((item) => item.id === action.payload.id);
            if (productExit) {
                if (productExit.qty > 0) {
                    productExit.qty = +productExit.qty - 1
                } else if (productExit.qty === 0) {
                    const newItem = state.CartItem.filter((item) => item.id !== action.payload.id);
                    state.CartItem = newItem
                }
            } else {
                return
            }
        },
        DeleteItemfromCart: (state, action) => {
            const updatedCart = state.CartItem.filter((item) => item.id !== action.payload.id);

            return {
                ...state,
                CartItem: updatedCart,
            };
        },
        clearCart: (state) => {
            state.CartItem = [];
        }
        
    }
})

export const {
    setMode,
    AddItemToCart,
    RemoveItemfromCart,
    DeleteItemfromCart,
    clearCart
} = recipeReducer.actions;

export default recipeReducer.reducer;


export const selectCartItemCount = (state) =>
    state.recipe.CartItem.reduce((total, item) => total + (item.qty || 0), 0);

