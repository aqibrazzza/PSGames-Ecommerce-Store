import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs";

export default function Rating({ product }) {
	const rating = () => {
		if (product.rating > 4.5 && product.rating <= 5) {
			return (
				<>
					<BsStarFill />
					<BsStarFill />
					<BsStarFill />
					<BsStarFill />
					<BsStarFill />
				</>
			);
		} else if (product.rating > 4 && product.rating <= 4.5) {
			return (
				<>
					<BsStarFill />
					<BsStarFill />
					<BsStarFill />
					<BsStarFill />
					<BsStarHalf />
				</>
			);
		} else if (product.rating > 3.5 && product.rating <= 4) {
			return (
				<>
					<BsStarFill />
					<BsStarFill />
					<BsStarFill />
					<BsStarHalf />
					<BsStar />
				</>
			);
		} else if (product.rating > 3 && product.rating <= 3.5) {
			return (
				<>
					<BsStarFill />
					<BsStarFill />
					<BsStarFill />
					<BsStar />
					<BsStar />
				</>
			);
		} else if (product.rating > 2.5 && product.rating <= 3) {
			return (
				<>
					<BsStarFill />
					<BsStarFill />
					<BsStarHalf />
					<BsStar />
					<BsStar />
				</>
			);
		} else if (product.rating > 2 && product.rating <= 2.5) {
			return (
				<>
					<BsStarFill />
					<BsStarFill />
					<BsStar />
					<BsStar />
					<BsStar />
				</>
			);
		} else if (product.rating > 1.5 && product.rating <= 2) {
			return (
				<>
					<BsStarFill />
					<BsStarHalf />
					<BsStar />
					<BsStar />
					<BsStar />
				</>
			);
		} else if (product.rating > 1 && product.rating <= 1.5) {
			return (
				<>
					<BsStarFill />
					<BsStar />
					<BsStar />
					<BsStar />
					<BsStar />
				</>
			);
		} else if (product.rating > 0.5 && product.rating <= 1) {
			return (
				<>
					<BsStarHalf />
					<BsStar />
					<BsStar />
					<BsStar />
					<BsStar />
				</>
			);
		} else if (product.rating > 0 && product.rating <= 0.5) {
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
	return <p className="flex ml-2 text-yellow-500">{rating()}</p>;
}
