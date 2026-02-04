import { useState } from "react";
import logo from "../img/Logo/dpt-logo.png";

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);
	return (
		<nav className="relative flex justify-between items-center px-6 py-2 shadow-md ">
			<div className="flex items-center gap-2 p-2 rounded-lg shadow-md ">
				<img
					id="logo"
					className="w-11 rounded-full shadow shadow-purple-600  p-0.5"
					src={logo}
					alt="Digipixeltech logo"
				/>
				<h1 className="text-xl font-bold text-purple-600">DigiPixelTech</h1>
			</div>
			<div className="hidden md:flex gap-6 font-medium">
				<a
					className="cursor-pointer  hover:text-purple-500 transition-colors"
					href="pages/Home.jsx"
				>
					Home
				</a>

				<a
					className="cursor-pointer  hover:text-purple-500 transition-colors"
					href="pages/Services.jsx"
				>
					Services
				</a>

				<a
					className="cursor-pointer  hover:text-purple-500 transition-colors"
					href="pages/Projects.jsx"
				>
					Projects
				</a>
				<a
					className="cursor-pointer  hover:text-purple-500 transition-colors"
					href="pages/About.jsx"
				>
					About
				</a>
				<a
					className="cursor-pointer  hover:text-purple-500 transition-colors"
					href="pages/Contact.jsx"
				>
					Contact
				</a>
			</div>
			{/* Mobile menu button */}
			<button
				className="md:hidden p-2 rounded-md  focus:outline-none hover:bg-black"
				onClick={() => setIsOpen(!isOpen)}
				aria-label={isOpen ? "Close menu" : "Open menu"}
			>
				{isOpen ? (
					/* Close Icon */
					<svg
						className="w-6 h-6"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth={2}
							d="M6 18L18 6M6 6l12 12"
						/>
					</svg>
				) : (
					/* Hamburger Icon */
					<svg
						className="w-6 h-6 "
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth={2}
							d="M4 6h16M4 12h16M4 18h16"
						/>
					</svg>
				)}
			</button>
			{/* Mobile menu panel */}
			{isOpen && (
				<div className="md:hidden absolute right-4 top-full mt-1 bg-black border  border-purple-500 shadow-md rounded-md py-2 px-2 flex flex-col gap-2">
					<a
						href="/"
						className="transition-discrete cursor-pointer rounded text-center p-2 hover:text-black hover:bg-purple-500 transition-colors"
					>
						Homes
					</a>
					<a
						href="/services"
						className="transition-discrete cursor-pointer rounded text-center p-2 hover:text-black hover:bg-purple-500 transition-colors"
					>
						Services
					</a>
					<a
						href="/projects"
						className="transition-discrete cursor-pointer rounded text-center p-2 hover:text-black hover:bg-purple-500 transition-colors"
					>
						Projects
					</a>
					<a
						href="/about"
						className="transition-discrete cursor-pointer rounded text-center p-2 hover:text-black hover:bg-purple-500 transition-colors"
					>
						About
					</a>
					<a
						href="/contact"
						className="transition-discrete cursor-pointer rounded text-center p-2 hover:text-black hover:bg-purple-500 transition-colors"
					>
						Contact
					</a>
				</div>
			)}{" "}
		</nav>
	);
};

export default Navbar;
