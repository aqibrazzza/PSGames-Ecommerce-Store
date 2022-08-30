import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import Rating from "../components/Rating";
import { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { getGameDetails } from "../features/games/gamesSlice";

export default function GameDetail() {
	// Get the game id param from the URL.
	let { id } = useParams();

	const dispatch = useDispatch();
	const {
		isPending,
		error,
		getGameDetails: game,
	} = useSelector((state) => state.games);

	useEffect(() => {
		dispatch(getGameDetails(id));
	}, []);

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
				</>
			)}
		</div>
	);
}
