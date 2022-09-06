import { createSlice } from "@reduxjs/toolkit";

const cartItemsInLocalStorage = localStorage.getItem("cartItems")
	? JSON.parse(localStorage.getItem("cartItems"))
	: [];

const initialState = {
	cartItems: cartItemsInLocalStorage,
};

const cartSlice = createSlice({
	name: "cart",
	initialState,
	reducers: {
		addToCart: (state, action) => {
			const { id, name, price, image } = action.payload.game;
			const gameExists = state.cartItems.find((g) => g.id === id);
			if (!gameExists) {
				state.cartItems = [
					...state.cartItems,
					{ id, name, price, image, qty: action.payload.qty },
				];
				localStorage.setItem(
					"cartItems",
					JSON.stringify(state.cartItems)
				);
			}
		},
	},
});

export default cartSlice.reducer;
export const { addToCart } = cartSlice.actions;
