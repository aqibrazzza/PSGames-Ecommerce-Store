import GameList from "../components/GameList";

export default function Home() {
	return (
		<div className="container pt-24 space-y-4">
			<h1>Latest Games</h1>
			<GameList />
		</div>
	);
}
