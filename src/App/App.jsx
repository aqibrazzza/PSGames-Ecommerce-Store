import Navbar from "../components/Navbar";
import GameDetail from "../pages/GameDetail";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "../pages/Home";
import Cart from "../pages/Cart";
function App() {
	return (
		<BrowserRouter>
			<Navbar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/game/:id" element={<GameDetail />} />
				<Route path="/cart/:id" element={<Cart />} />
				{/* If route does not match, show the following. */}
				<Route
					path="*"
					element={
						<div className="mt-40 w-4/5 mx-auto flex flex-col space-y-8 items-center">
							<h1 className="text-slate-500 text-xl text-center">
								404: Nothing found at this link.
							</h1>
							<Link to="/" className="btn">
								Go back to Homepage
							</Link>
						</div>
					}
				/>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
