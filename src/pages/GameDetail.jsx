import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import Rating from "../components/Rating";
const game = {
	id: "1",
	name: "God of War Ragnarok Launch Edition",
	image: "/images/gow.jpg",
	description:
		"Embark on an epic and heartfelt journey as Kratos and Atreus struggle with holding on and letting go. Against a backdrop of Norse Realms torn asunder by the fury of the Aesir, they've been trying their utmost to undo the end times. But despite their best efforts, Fimbulwinter presses onward. Witness the changing dynamic of the father-son relationship as they fight for survival; Atreus thirsts for knowledge to help him understand the prophecy of “Loki”, as Kratos struggles to break free of his past and be the father his son needs. See for yourself how fate will force a choice upon them: between their own safety or the safety of the realms. All the while, hostile Asgardian forces assemble… Venture through all Nine Realms towards the prophesied battle that will end the world. Vanquish Norse gods and monsters alike in fluid, expressive combat. Explore in wonder through stunning mythological landscapes.",
	releaseData: "11/09/2022",
	price: 56,
	rating: 4.7,
	inStock: 8,
	numberOfReviews: 288,
};

export default function GameDetail() {
	// Get the userId param from the URL.
	let { id } = useParams();
	console.log(id);
	return (
		<div className="container py-24 md:flex md:justify-around">
			<div className="">
				<img
					className="w-80 mx-auto"
					src={game.image}
					alt="game.name"
				/>
			</div>
			<div className="mt-6 md:mt-0">
				<div className="space-y-2">
					<h1 className="text-3xl tracking-tight font-semibold">
						{game.name}
					</h1>
					<p className="flex">
						{game.rating}
						<Rating game={game} />
					</p>
				</div>
				<p className="mt-4 max-w-md">{game.description}</p>
				<div className="py-8 space-y-1">
					<p className="text-lg tracking-tight font-semibold space-x-2">
						<span>Price:</span>
						<span>${game.price}</span>
					</p>
					<p className="text-sm tracking-tight font-semibold space-x-2 text-slate-500">
						<span>In stock:</span>
						<span>{game.inStock} in stock</span>
					</p>
				</div>
				<button className="btn"> Add to Cart</button>
			</div>
		</div>
	);
}