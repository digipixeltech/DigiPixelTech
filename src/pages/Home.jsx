import React from "react";

const Home = () => {
  return (
    <>
      <section className="text-center py-20 px-6">
        <h2 className="text-4xl font-bold mb-4">
          We Build Digital Experiences
        </h2>
        <p className="text-gray-600 max-w-xl mx-auto">
          Digipixeltech helps businesses grow with modern websites, apps and
          digital solutions.
        </p>

        <button className="mt-6 px-6 py-3 bg-purple-600 text-white rounded-lg cursor-pointer">
          See Our Work
        </button>
      </section>
      {/* <div>
			<h1>Designing and developing modern web systems.</h1>
			<p>From planning to deployment, with clarity at every step.</p>
			<button>View Projects</button>
		</div> */}
      <div className="mt-20">
        <h1 class="text-4xl flex justify-center mb-20">What We Do</h1>
        <div className="flex gap-10 m-10">
          <div class="card w-1/3 p-10 bg-">
            <h2 class="text-center text-xl mb-2">Frontend Development</h2>
            <p class="text-center text-gray-400">Building responsive, fast, and accessible user interfaces.</p>
          </div>
          <div class="card w-1/3 p-10">
            <h2 class="text-center text-xl mb-2">Business Websites</h2>
            <p class="text-center text-gray-400">Creating professional websites for businesses and portfolios.</p>
          </div>
          <div class="card w-1/3 p-10 bg-">
            <h2 class="text-center text-xl mb-2">Landing Pages</h2>
            <p class="text-center text-gray-400">
              Designing and developing pages focused on clarity and conversion.
            </p>
          </div>
        </div>
      </div>
      <div>
        <h1>Featured Projects</h1>
      </div>
    </>
  );
};

export default Home;
