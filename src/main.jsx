import React from "react";
import ReactDOM from "react-dom/client";
import App from "../src/App/App";
import "./index.css";
import { store } from "./App/Store";
import { Provider } from "react-redux";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<Provider store={store}>
			<App />
		</Provider>
	</React.StrictMode>
);
