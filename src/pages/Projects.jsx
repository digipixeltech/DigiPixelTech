import React from "react";

const Projects = () => {
   return (
      <>
      <div className="bg-[url('img/banner/Project.png')] w-full h-150 bg-cover flex flex-col justify-center leading-normal">
         <h1 className="text-5xl">Discover the Projects </h1>
            <h1 className="text-5xl">that we have worked</h1>
            <p>An overview of the projects we’ve designed and developed.</p>
      </div>
      <div></div>
      <div>
         <h1 className="my-20 text-5xl flex justify-center">Projects</h1>
         <div className="flex flex-row">
            <div className="w-2/3">
            <iframe src="https://haseeb-interior.netlify.app/" frameborder="0" className="iframe h-200 w-400 m-10"></iframe>
            </div>
            <div className="w-1/3 mt-10 mr-10">
               <h1 className="text-3xl">Interior Portfolio</h1>
               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem cum ea, odio quibusdam nulla amet culpa dolores ratione fugiat aperiam ipsa accusamus fuga vel mollitia neque nemo commodi fugit tenetur libero! Deserunt dolor minus beatae tempora atque facilis ea recusandae, porro maxime. Magni architecto deserunt aspernatur quo sit assumenda. Earum quas ad velit aliquam odit asperiores quo et! Ipsa corporis voluptate veniam, id repudiandae adipisci quam rem odio eum sed nesciunt natus quas earum omnis consequatur suscipit facere beatae voluptates sunt impedit blanditiis. Nostrum impedit recusandae, assumenda beatae vitae, laboriosam eaque, iure corporis ducimus quae similique maxime? At, recusandae quo.</p>
            </div>
         </div>
      </div>
      <div></div>
      </>
   );
}

export default Projects;