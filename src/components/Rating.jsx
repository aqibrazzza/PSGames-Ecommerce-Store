import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs";

export default function Rating({ game }) {
	const rating = () => {
		if (game.rating > 4.5 && game.rating <= 5) {
			return (
				<>
					<BsStarFill />
					<BsStarFill />
					<BsStarFill />
					<BsStarFill />
					<BsStarFill />
				</>
			);
		} else if (game.rating > 4 && game.rating <= 4.5) {
			return (
				<>
					<BsStarFill />
					<BsStarFill />
					<BsStarFill />
					<BsStarFill />
					<BsStarHalf />
				</>
			);
		} else if (game.rating > 3.5 && game.rating <= 4) {
			return (
				<>
					<BsStarFill />
					<BsStarFill />
					<BsStarFill />
					<BsStarHalf />
					<BsStar />
				</>
			);
		} else if (game.rating > 3 && game.rating <= 3.5) {
			return (
				<>
					<BsStarFill />
					<BsStarFill />
					<BsStarFill />
					<BsStar />
					<BsStar />
				</>
			);
		} else if (game.rating > 2.5 && game.rating <= 3) {
			return (
				<>
					<BsStarFill />
					<BsStarFill />
					<BsStarHalf />
					<BsStar />
					<BsStar />
				</>
			);
		} else if (game.rating > 2 && game.rating <= 2.5) {
			return (
				<>
					<BsStarFill />
					<BsStarFill />
					<BsStar />
					<BsStar />
					<BsStar />
				</>
			);
		} else if (game.rating > 1.5 && game.rating <= 2) {
			return (
				<>
					<BsStarFill />
					<BsStarHalf />
					<BsStar />
					<BsStar />
					<BsStar />
				</>
			);
		} else if (game.rating > 1 && game.rating <= 1.5) {
			return (
				<>
					<BsStarFill />
					<BsStar />
					<BsStar />
					<BsStar />
					<BsStar />
				</>
			);
		} else if (game.rating > 0.5 && game.rating <= 1) {
			return (
				<>
					<BsStarHalf />
					<BsStar />
					<BsStar />
					<BsStar />
					<BsStar />
				</>
			);
		} else if (game.rating > 0 && game.rating <= 0.5) {
			return (
				<>
					<BsStarFill />
					<BsStarFill />
					<BsStarFill />
					<BsStarFill />
					<BsStarFill />
				</>
			);
		}
	};
	return <span className="flex ml-2 text-yellow-500">{rating()}</span>;
}
