import Navbar from "./components/Navbar";
import GameList from "./components/GameList";
import { Route } from "react-router-dom";

function App() {
	return (
		<div>
			<Navbar />
			<GameList />
		</div>
	);
}

export default App;
