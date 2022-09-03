import { Link } from "react-router-dom";
import Rating from "./Rating";
export default function GameItem({ game }) {
	return (
		<Link
			to={`/game/${game.id}`}
			className="bg-white shadow-xl h-fit rounded-3xl cursor-pointer"
		>
			<div className="p-5">
				<img src={game.image} alt={game.name} />
			</div>
			<div className="border-t border-slate-100 p-6 space-y-2 rounded-b-3xl">
				<h2 className="font-semibold text-xs md:text-sm">
					{game.name}
				</h2>
				<div className="font-semibold text-sm flex">
					{game.rating}
					<Rating game={game} />
				</div>
				<p className="font-bold text-xl">${game.price}</p>
			</div>
		</Link>
	);
}
