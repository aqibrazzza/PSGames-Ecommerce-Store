import { MenuAlt3Icon } from "@heroicons/react/outline";
import { XIcon } from "@heroicons/react/outline";
import { MdGames } from "react-icons/md";
import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";

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
		<nav className="bg-white">
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
						<li className="cursor-pointer text-gray-500 hover:text-gray-700 active:text-gray-600">
							Home
						</li>
						<li className="cursor-pointer text-gray-500 hover:text-gray-700 active:text-gray-600">
							About
						</li>
						<li className="cursor-pointer text-gray-500 hover:text-gray-700 active:text-gray-600">
							Careers
						</li>
						<li className="cursor-pointer text-gray-500 hover:text-gray-700 active:text-gray-600">
							Contact
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
						className={`absolute top-14 right-1 bg-gray-100 py-4 px-2 rounded ${
							!menuIsOpened && "hidden"
						}`}
					>
						<ul className="space-y-2">
							<li className="cursor-pointer py-1 px-8 active:bg-gray-200 text-gray-500 hover:text-gray-700 active:text-gray-600">
								Home
							</li>
							<li className="cursor-pointer py-1 px-8 active:bg-gray-200 text-gray-500 hover:text-gray-700 active:text-gray-600">
								About
							</li>
							<li className="cursor-pointer py-1 px-8 active:bg-gray-200 text-gray-500 hover:text-gray-700 active:text-gray-600">
								Careers
							</li>
							<li className="cursor-pointer py-1 px-8 active:bg-gray-200 text-gray-500 hover:text-gray-700 active:text-gray-600">
								Contact
							</li>
						</ul>
					</div>
				</div>
			</div>
		</nav>
	);
}
