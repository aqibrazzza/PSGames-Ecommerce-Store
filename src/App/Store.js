import { configureStore } from "@reduxjs/toolkit";
import gamesReducer from "../features/games/gamesSlice";
import cartReducer from "../features/cart/cartSlice";

export const store = configureStore({
	reducer: {
		games: gamesReducer,
		cart: cartReducer,
	},
});
