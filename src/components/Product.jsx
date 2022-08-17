import Rating from "./Rating";
export default function Product({ product }) {
	return (
		<div className="bg-white shadow-xl h-fit rounded-3xl">
			<div className="p-8">
				<img src={product.image} alt={product.name} />
			</div>
			<div className="bg-slate-50 p-6 space-y-2 rounded-b-3xl">
				<h2 className="font-semibold text-xs md:text-sm">
					{product.name}
				</h2>
				<div className="font-semibold text-sm flex">
					{product.rating}
					<Rating product={product} />
				</div>
				<p className="font-bold text-xl">${product.price}</p>
			</div>
		</div>
	);
}
