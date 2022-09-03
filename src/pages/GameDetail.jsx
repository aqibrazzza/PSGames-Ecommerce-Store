import { useParams, useNavigate } from "react-router-dom";
import Rating from "../components/Rating";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getGameDetails } from "../features/games/gamesSlice";
import { addToCart } from "../features/cart/cartSlice";

export default function GameDetail() {
	const [qty, setQty] = useState(1);
	// Get the game id param from the URL.
	let { id } = useParams();

	const dispatch = useDispatch();
	const {
		isPending,
		error,
		getGameDetails: game,
	} = useSelector((state) => state.games);

	const navigate = useNavigate();

	useEffect(() => {
		dispatch(getGameDetails(id));
	}, [dispatch]);

	const addToCartHandler = () => {
		dispatch(addToCart({ game, qty }));
		navigate(`/cart/${game.id}?qty=${qty}`);
	};

	return (
		<div className="container py-28 md:flex md:justify-around md:space-x-20">
			{isPending && (
				<img
					className="mx-auto my-auto"
					src="/images/spinner-circle.svg"
					alt="loading spinner"
				/>
			)}
			{game.length !== 0 && (
				<>
					<div className="w-96 mx-auto">
						<img className="" src={game.image} alt="game.name" />
					</div>
					<div className="mt-12 md:mt-0">
						<div className="space-y-2">
							<h1 className="text-3xl tracking-tight font-semibold max-w-md">
								{game.name}
							</h1>
							<p className="flex">
								{game.rating}
								<Rating game={game} />
							</p>
						</div>
						<p className="mt-4 max-w-md">{game.description}</p>
						<div className="py-8">
							<p className="text-lg font-semibold space-x-2">
								<span>Price:</span>
								<span>${game.price}</span>
							</p>
							<p className="text-sm font-semibold space-x-2 text-slate-500">
								{game.inStock > 0 ? (
									`In stock: ${game.inStock}`
								) : (
									<span>Out of stock</span>
								)}
							</p>
							{game.inStock > 0 && (
								<form className="text-md font-semibold space-x-2 mt-6 py-1 px-2 text-slate-700 border w-fit rounded-lg">
									<label htmlFor="qty"> Qty:</label>
									<select
										name="qty"
										id="qty"
										value={qty}
										onChange={(e) => setQty(e.target.value)}
									>
										{[...Array(game.inStock).keys()].map(
											(key) => {
												return (
													<option
														key={key + 1}
														value={key + 1}
													>
														{key + 1}
													</option>
												);
											}
										)}
										1
									</select>
								</form>
							)}
						</div>

						{game?.inStock > 0 ? (
							<button
								className="btn cursor-pointer"
								onClick={addToCartHandler}
							>
								Add to Cart
							</button>
						) : (
							<button
								className="btn disabled:pointer-events-none opacity-50"
								disabled
							>
								Add to Cart
							</button>
						)}
					</div>
				</>
			)}
		</div>
	);
}
