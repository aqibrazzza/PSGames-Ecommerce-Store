import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getGames = createAsyncThunk("games/getGames", async () => {
	const res = await axios.get("http://localhost:3000/games");
	return res.data;
});

const gamesSlice = createSlice({
	name: "games",
	initialState: {
		isPending: false,
		error: null,
		games: [],
	},
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(getGames.pending, (state) => {
			state.error = null;
			state.isPending = true;
		}),
			builder.addCase(getGames.fulfilled, (state, action) => {
				(state.isPending = false), (state.games = action.payload);
			}),
			builder.addCase(getGames.rejected, (state, action) => {
				(state.isPending = false), (state.error = action.error.message);
			});
	},
});

export default gamesSlice.reducer;
