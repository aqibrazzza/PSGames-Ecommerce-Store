import { AiOutlineDelete } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../features/cart/cartSlice";

export default function CartList({ cartItems }) {
	const dispatch = useDispatch();
	const handleDelete = (id) => {
		dispatch(removeFromCart(id));
		console.log(cartItems);
	};

	const handleChange = (e, game) => {
		const qty = e.target.value;
		console.log(game, qty);
		dispatch(addToCart({ game, qty }));
	};
	return (
		<ul className="sm:px-8">
			{cartItems.map((item) => {
				return (
					<li
						key={item.id}
						className="flex justify-around space-x-6 text-sm sm:text-base sm:space-x-16 py-8 items-center font-medium border-b last:border-b-0 sm:w-fit"
					>
						<div className="w-16 sm:w-20">
							<img src={item.image} alt={item.name} />
						</div>
						<h3 className="w-24 sm:w-40">{item.name}</h3>
						<p className="">${item.price}</p>
						<form className="space-x-2 py-1 px-2 text-slate-700 border w-fit rounded-lg">
							<label htmlFor="qty"> Qty:</label>
							<select
								name="qty"
								id="qty"
								value={item.qty}
								onChange={(e) => handleChange(e, item)}
							>
								{[...Array(item.inStock).keys()].map((key) => {
									return (
										<option key={key + 1} value={key + 1}>
											{key + 1}
										</option>
									);
								})}
								1
							</select>
						</form>
						<AiOutlineDelete
							className="text-lg cursor-pointer"
							onClick={() => handleDelete(item.id)}
						/>
					</li>
				);
			})}
		</ul>
	);
}
