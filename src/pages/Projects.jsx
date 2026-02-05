import React from "react";

const Projects = () => {
	return (
		<>
			<div className="bg-img-projects bg-[url('img/banner/Project.png')] font-serif w-full h-150 bg-cover flex flex-col justify-center leading-normal gap-2">
				<h1 className="ml-10 text-5xl">Discover the Projects </h1>
				<h1 className="ml-10 text-3xl">that we have worked</h1>
				<p className="ml-10">
					An overview of the projects which successfully designed and
					developed.
				</p>
			</div>

			<div className="font-serif">
				<h1 className="mt-10 ml-10 text-5xl flex">Projects:-</h1>
				<h2 className="mt-10 ml-10 text-3xl">1. Portfolio Website... </h2>
				<h3 className="ml-10 text-xl">for an Interior Designer</h3>

				<div className="m-5">
					<div>
						<iframe
							src="https://haseeb-interior.netlify.app/"
							frameborder="0"
							className="iframe justify-self-center w-[60vw] h-[65vh]"
						></iframe>
					</div>
					<div className="w-full text-center mt-8 mr-10">
						<h1 className="text-3xl mb-5">Info:</h1>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit.
							Exercitationem cum ea, odio quibusdam nulla amet culpa
							dolores ratione fugiat aperiam ipsa accusamus fuga vel
							mollitia neque nemo commodi fugit tenetur libero! Deserunt
							dolor minus beatae tempora atque facilis ea recusandae,
							porro maxime. Magni architecto deserunt aspernatur quo sit
							assumenda. Earum quas ad velit aliquam odit asperiores quo
							et! Ipsa corporis voluptate veniam, id repudiandae adipisci
							quam rem odio eum sed nesciunt natus quas earum omnis
							consequatur suscipit facere beatae voluptates sunt impedit
							
						</p>
					</div>
				</div>
			</div>
		</>
	);
};

export default Projects;
