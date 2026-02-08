import React from "react";
import { Link } from "react-router-dom";
import Restaurant from "../img/Projects/Restaurant.png";
import Mirfeez from "../img/Projects/Portfolio.Mirfeez.png";
import Interior from "../img/Projects/interior.png";

const Projects = () => {
	const projectInfo = [
		{
			title: "Restaurant Website",
			client: "College Project",
			img: Restaurant,
			// webLink: "https://haseeb-interior.netlify.app/",
			info: "An early-stage website created during our college studies. The project focused on understanding core web structure and user experience basics, forming the foundation for our current standards in responsive and performance-driven web development.",
		},
		{
			title: "Portfolio Website",
			client: "Self",
			img: Mirfeez,
			webLink: "https://mirfeez.github.io/Mirfeez-portfolio/",
			info: "A responsive and performance-focused portfolio website built to showcase design projects with a clean UI, fast loading speeds, and a professional online presence.",
		},
		{
			title: "Interior Portfolio Website",
			client: "Client",
			img: Interior,
			webLink: "https://haseeb-interior.netlify.app/",
			info: "One of our early projects built while developing our foundational skills. Though not fully responsive, it helped us gain real-world experience and shaped our growth into creating modern, performance-focused websites today.",
		},
	];

	return (
		<>
			<div className="project-head bg-img-projects bg-[url('img/banner/Project.png')] font-serif w-full h-150 bg-cover flex flex-col justify-center leading-normal gap-2">
				<h1 className="ml-10 text-5xl">Discover the Projects </h1>
				<h1 className="ml-10 text-3xl">that we have worked</h1>
				<p className="ml-10">
					An overview of the projects which successfully designed and
					developed.
				</p>
			</div>

			<div className="project-section font-serif">
				<h1 className="mt-10 ml-10 text-5xl flex">Projects:-</h1>

				{/* card  */}
				{projectInfo.map((props, idx) => {
					return (
						<>
							<h2 className="mt-10 ml-10 text-3xl">
								{idx + 1}. {props.title}...{" "}
							</h2>
							<h3 className="ml-10 text-xl">For {props.client}</h3>

							<div className="m-5">
								<div className="">
									<img
										src={props.img}
										className="w-200 mb-4 rounded-2xl flex justify-self-center"
										alt=""
									/>
									<a
										className="px-4 py-2 flex justify-self-center hover:bg-purple-500 text-black rounded bg-purple-600 "
										href={props.webLink}
										target="_blank"
									>
										View
									</a>
								</div>
								<div className="project-info border-b-2 pb-10 w-2/3 flex justify-self-center flex-col text-center mt-8">
									<h1 className="text-3xl mb-5">Info:</h1>
									<p>{props.info}</p>
								</div>
							</div>
						</>
					);
				})}
				{/* card finishing  */}
			</div>
		</>
	);
};

export default Projects;
