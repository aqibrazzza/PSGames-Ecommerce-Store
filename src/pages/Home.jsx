import axios from "axios";
import { useEffect, useState } from "react";
import GameList from "../components/GameList";

export default function Home() {
	const [games, setGames] = useState(null);
	const [isPending, setIsPending] = useState(false);
	const [error, setError] = useState(null);

	const fetchGames = async () => {
		try {
			setError(null);
			setIsPending(true);
			const res = await axios.get("http://localhost:3000/games");
			setGames(res.data);
			setIsPending(false);
		} catch (err) {
			setIsPending(false);
			setError(err.message);
		}
	};

	useEffect(() => {
		fetchGames();
	}, []);

	return (
		<div className="container py-28 space-y-8">
			<h1 className="text-lg font-medium text-slate-600">Latest Games</h1>
			{isPending && (
				<img
					className="mx-auto my-auto"
					src="images/spinner-circle.svg"
					alt="loading spinner"
				/>
			)}
			{error && <div> {error} </div>}
			<GameList games={games} />
		</div>
	);
}
