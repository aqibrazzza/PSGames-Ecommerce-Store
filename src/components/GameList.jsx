import GameItem from "./GameItem";
export default function GameList({ games }) {
	return (
		<div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8">
			{games?.map((game) => {
				return <GameItem key={game.id} game={game} />;
			})}
		</div>
	);
}
