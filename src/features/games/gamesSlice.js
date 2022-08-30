import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getGames = createAsyncThunk("games/getGames", async () => {
	const res = await axios.get("http://localhost:3000/games");
	return res.data;
});

export const getGameDetails = createAsyncThunk(
	"games/getGameDetails",
	async (id) => {
		const res = await axios.get(`http://localhost:3000/games/${id}`);
		return res.data;
	}
);

const gamesSlice = createSlice({
	name: "games",
	initialState: {
		isPending: false,
		error: null,
		games: [],
		getGameDetails: [],
	},
	reducers: {},
	extraReducers: (builder) => {
		// get all games request
		builder.addCase(getGames.pending, (state) => {
			state.error = null;
			state.isPending = true;
		}),
			builder.addCase(getGames.fulfilled, (state, action) => {
				state.isPending = false;
				state.games = action.payload;
			}),
			builder.addCase(getGames.rejected, (state, action) => {
				(state.isPending = false), (state.error = action.error.message);
			}),
			// get single game details request
			builder.addCase(getGameDetails.pending, (state) => {
				state.error = null;
				state.getGameDetails = [];
				state.isPending = true;
			}),
			builder.addCase(getGameDetails.fulfilled, (state, action) => {
				state.isPending = false;
				state.getGameDetails = action.payload;
			}),
			builder.addCase(getGameDetails.rejected, (state, action) => {
				state.isPending = false;
				state.error = action.error.message;
			});
	},
});

export default gamesSlice.reducer;
