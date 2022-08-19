import GameList from "../components/GameList";

export default function Home() {
	return (
		<div className="container pt-24 space-y-8">
			<h1 className="text-lg font-medium text-slate-600">Latest Games</h1>
			<GameList />
		</div>
	);
}
