import { useSelector } from "react-redux";
import { useLocation, useSearchParams } from "react-router-dom";
import CartList from "../components/CartList";

export default function Cart() {
	const loc = useLocation().search;
	const search = new URLSearchParams(loc).get("qty");
	console.log(search);

	const cartItems = useSelector((state) => state.cart.cartItems);

	return (
		<div className="container py-28 space-y-8">
			<h1 className="text-3xl tracking-tight font-semibold max-w-md">
				My shopping cart
			</h1>
			<CartList cartItems={cartItems} />
		</div>
	);
}
