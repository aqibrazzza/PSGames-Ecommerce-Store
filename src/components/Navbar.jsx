import { MenuAlt3Icon } from "@heroicons/react/outline";
import { XIcon } from "@heroicons/react/outline";
import { MdGames } from "react-icons/md";
import { useState, useRef, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { AiOutlineShoppingCart, AiOutlineUser } from "react-icons/ai";
import Cart from "../pages/Cart";

export default function Navbar() {
	const [menuIsOpened, setMenuIsOpened] = useState(false);
	const dropdownMenu = useRef();
	useEffect(() => {
		const checkIfClickedOutside = (e) => {
			// If the menu is opened and the clicked target is not within the menu,
			// then close the menu
			if (menuIsOpened && !dropdownMenu.current.contains(e.target)) {
				setMenuIsOpened(false);
			}
		};

		document.addEventListener("mousedown", checkIfClickedOutside);

		return () => {
			// Cleanup the event listener
			document.removeEventListener("mousedown", checkIfClickedOutside);
		};
	}, [menuIsOpened]);

	return (
		<nav className="bg-white drop-shadow-sm">
			<div className="flex justify-between items-center py-3 container">
				<Link
					to="/"
					className="text-2xl text-blue-700 flex items-center space-x-1 cursor-pointer"
				>
					<MdGames />
					<span className="text-slate-400 font-medium tracking-tight">
						PSGames
					</span>
				</Link>
				<div className="hidden sm:block">
					<ul className="flex space-x-8">
						<NavLink
							to="/cart"
							className="flex items-center space-x-1 cursor-pointer text-gray-500 hover:text-gray-700 active:text-gray-600"
						>
							<AiOutlineShoppingCart className="text-xl" />
							<span className="font-medium">Cart</span>
						</NavLink>
						<li className="flex items-center space-x-1 cursor-pointer text-gray-500 hover:text-gray-700 active:text-gray-600">
							<AiOutlineUser className="text-xl" />
							<span className="font-medium">Login</span>
						</li>
					</ul>
				</div>
				<div ref={dropdownMenu} className="sm:hidden relative">
					{!menuIsOpened && (
						<MenuAlt3Icon
							className="h-7 w-7"
							strokeWidth="1.5"
							onClick={() => {
								setMenuIsOpened((prevState) => !prevState);
							}}
						/>
					)}
					{menuIsOpened && (
						<XIcon
							className="h-7 w-7"
							strokeWidth="1.5"
							onClick={() => {
								setMenuIsOpened((prevState) => !prevState);
							}}
						/>
					)}
					<div
						className={`absolute top-14 right-1 bg-white py-4 px-2 rounded ${
							!menuIsOpened && "hidden"
						}`}
					>
						<ul className="space-y-2">
							<li className="flex items-center space-x-1 cursor-pointer text-gray-500 hover:text-gray-700 active:text-gray-600">
								<AiOutlineShoppingCart className="text-xl" />
								<span className="font-medium">Cart</span>
							</li>
							<li className="flex items-center space-x-1 cursor-pointer text-gray-500 hover:text-gray-700 active:text-gray-600">
								<AiOutlineUser className="text-xl" />
								<span className="font-medium">Login</span>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</nav>
	);
}
