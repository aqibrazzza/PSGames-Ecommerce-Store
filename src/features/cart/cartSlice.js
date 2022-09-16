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
			console.log(action.payload);
			const { id, name, price, image, inStock } = action.payload.game;
			const gameExists = state.cartItems.find((game) => game.id === id);

			if (gameExists) {
				state.cartItems = state.cartItems.map((item) =>
					// if ids match, return payload item with new qty otherwise return cart item
					item.id === gameExists.id
						? {
								id,
								name,
								price,
								image,
								inStock,
								qty: Number(action.payload.qty),
						  }
						: item
				);
				console.log(state.cartItems);
			} else {
				state.cartItems = [
					...state.cartItems,
					{
						id,
						name,
						price,
						image,
						inStock,
						qty: Number(action.payload.qty),
					},
				];
			}
			localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
		},
		removeFromCart: (state, { payload }) => {
			state.cartItems = state.cartItems.filter(
				(item) => item.id !== payload
			);
			localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
		},
	},
});

export default cartSlice.reducer;
export const { addToCart, removeFromCart } = cartSlice.actions;
