import React from "react";
import { NavLink } from "react-router-dom";
// import firstCard from "../img/service-card/1st-card.jpg";
// import secondCard from "../img/service-card/2nd-card.jpg";
// import thirdCard from "../img/service-card/3rd-card.jpg";
// import fourthCard from "../img/service-card/4th-card.jpg";
import { ArrowUpRight } from "lucide-react";

const Services = () => {
	// const servicesCard = [
	// 	{
	// 		title: "Web Design & Development",
	// 		li1: "Custom website development (no templates unless requested)",
	// 		li2: "Responsive design (mobile-first, always)",
	// 		li3: "Performance-focused builds (fast load times, clean code)",
	// 		li4: "CMS integration (WordPress / Headless / Custom) ",
	// 		note: "👉 Outcome: A site that loads fast, looks professional, and converts users",
	// 		image: firstCard,
	// 	},
	// 	{
	// 		title: "Frontend Development",
	// 		li1: "ReactJs interfaces",
	// 		li2: "Component-based architecture",
	// 		li3: "Accessibility-focused UI ",
	// 		li4: "Cross-browser consistency",
	// 		note: "👉 Outcome: Smooth, usable interfaces that don’t break",
	// 		image: secondCard,
	// 	},
	// 	{
	// 		title: "Website Performance Optimizationt",
	// 		li1: "Page speed optimization",
	// 		li2: "Core Web Vitals improvements",
	// 		li3: "Image & asset optimization",
	// 		li4: "JavaScript bundle cleanup",
	// 		note: " 👉 Outcome: Lower bounce rates, better SEO, faster load times.",
	// 		image: thirdCard,
	// 	},
	// 	{
	// 		title: "UI/UX Improvements & Redesigns",
	// 		li1: "UX audits",
	// 		li2: "Accessibility fixes (WCAG basics)",
	// 		li3: "Layout & flow improvements",
	// 		li4: "Conversion-focused tweak",
	// 		note: "👉 Outcome: Users understand the site faster and stay longer.",
	// 		image: fourthCard,
	// 	},
	// ];

	return (
		<>
			<div className="bg-[url('img/banner/services.png')] w-full h-150">
				<h1 className="text-5xl flex justify-self-center relative top-7 text-purple-600 font-bold">
					Services
				</h1>
			</div>
			<div className="mb-20 ">
				<h1 className="text-2xl mt-20 p-8">Clear Service Categories</h1>

				{/* section  */}
				<div>
					{/* left side  */}
					<div className="h-full flex flex-col justify-between w-1/2">
						<div className="p-6">
							<h3 className="mb-2 text-6xl font-bold">Services</h3>
							<h3 className="text-gray-400 mb-3 text-2xl">
								For Customers
							</h3>
							<h3 className="mb-7 leading-8 text-6xl font-bold">
								We Provide
							</h3>
							<p className="text-xl font-medium text-gray-600">
								Lorem ipsum dolor sit amet consectetur adipisicing elit.
								Nesciunt aliquid pariatur itaque commodi?
							</p>
						</div>
						<div className="ml-3">
							<ArrowUpRight size={53} />
						</div>
					</div>
					{/* right side  */}
					<div className="h-full w-1/2 "></div>
				</div>
			</div>
			<p>
				For projects requiring backend systems, we collaborate with trusted
				backend partners or work alongside your existing team.
			</p>
			<div className="mt-20">
				<h1 className="text-2xl flex justify-self-center mb-20">
					Who Each Service Is For
				</h1>
				<div className="flex justify-around">
					<div className="service-for">
						<h1 className="text-lg">Best for:</h1>
						<li>Startups needing an MVP</li>
						<li> Businesses redesigning outdated websites</li>
						<li> Companies scaling traffic and users</li>
					</div>
					<div className="service-for">
						<h1 className="text-lg">Not for:</h1>
						<li> People wanting “cheap and fast” </li>
						<li>Projects without clear goals</li>
						<li> Clients who just want a logo and vibes</li>
					</div>
				</div>
			</div>

			<div>
				<button className="mt-15 px-6 py-3 bg-purple-600 text-white rounded-lg cursor-pointer flex justify-self-center">
					Discuss your project
				</button>
			</div>
		</>
	);
};

export default Services;
