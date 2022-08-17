import Product from "./Product";
import { products } from "../dummyProducts";
export default function Products() {
	return (
		<div className="container py-12 space-y-4">
			<h1>Latest Products</h1>
			<div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8">
				{products.map((product) => {
					return <Product key={product.id} product={product} />;
				})}
			</div>
		</div>
	);
}
