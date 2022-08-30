import axios from "axios";
import { useEffect, useState } from "react";
import GameList from "../components/GameList";
import { useDispatch, useSelector } from "react-redux";
import { getGames } from "../features/games/gamesSlice";

export default function Home() {
	const dispatch = useDispatch();
	const { games, isPending, error } = useSelector((state) => state.games);

	useEffect(() => {
		dispatch(getGames());
	}, []);

	return (
		<div className="container py-28 space-y-8">
			<h1 className="text-lg font-medium text-slate-600">Latest Games</h1>
			{isPending && (
				<img
					className="mx-auto my-auto"
					src="/images/spinner-circle.svg"
					alt="loading spinner"
				/>
			)}
			{error && <div> {error} </div>}
			<GameList games={games} />
		</div>
	);
}
