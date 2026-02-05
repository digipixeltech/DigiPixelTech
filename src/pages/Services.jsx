import React from "react";

const Services = () => {
  return (
    <>
      <div>
        <h1>Services</h1>
      </div>
      <div>
        <h1 className="">Clear Service Categories</h1>
        <div>
          <h1>Web Design & Development</h1>
          <li>Custom website development (no templates unless requested)</li>
          <li>Responsive design (mobile-first, always)</li>
          <li> Performance-focused builds (fast load times, clean code) </li>
          <li>CMS integration (WordPress / Headless / Custom) </li>
          <p>
            👉 Outcome: A site that loads fast, looks professional, and converts
            users
          </p>
        </div>
        <div>
          <h1>Frontend Development</h1>
          <li>ReactJs interfaces</li>
          <li> Component-based architecture</li>
          <li>Accessibility-focused UI </li>
          <li>Cross-browser consistency </li>
          <p>👉 Outcome: Smooth, usable interfaces that don’t break</p>
        </div>
        <div></div>
        <div></div>
      </div>
      <div className="mt-20">
        <h1>Who Each Service Is For</h1>
        <h1>Best for:</h1> <li>Startups needing an MVP</li>
        <li> Businesses redesigning outdated websites</li>
        <li> Companies scaling traffic and users</li>
        <h1>Not for:</h1>
        <li> People wanting “cheap and fast” </li>
        <li>Projects without clear goals</li>
        <li> Clients who just want a logo and vibes</li>
      </div>
      <div>
         <button className="mt-6 px-6 py-3 bg-purple-600 text-white rounded-lg cursor-pointer">“Discuss your project</button>
      </div>
    </>
  );
};

export default Services;
