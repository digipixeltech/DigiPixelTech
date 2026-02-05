import React from "react";
import Navbar from "../components/Navbar";
import { Instagram, Whatsapp } from "react-bootstrap-icons";
import { Mail } from "lucide-react";
import Team from "./aboutTeam/Team";

const About = (props) => {
  return (
    <div className="px-10 mt-5">
      <div>
        <h1 className="text-3xl"></h1>
      </div>
      <div>
        <h1 className="text-3xl flex justify-center">Our Story </h1>
        <p className="pt-10 text-lg">
          We didn’t start this company to build “pretty websites.” We started it
          because too many businesses were paying for sites that looked fine and
          did nothing. No leads. No speed. No scalability. No results. We’re
          developers first, not salespeople. We care about how things work under
          the hood just as much as how they look on the screen. Every project we
          take on is built with a simple goal: solve a real business problem
          with clean, reliable, and scalable code. We work closely with clients,
          ask uncomfortable questions, and challenge bad ideas including theirs
          and our own. If something won’t help your users or your business, we
          won’t build it. Simple as that.
        </p>
      </div>
      <div className="mt-20">
        <h1 className="text-3xl mb-5">Our Values</h1>
        <h1 className="text-xl">1. Results Over Hype</h1>
        <p className="mb-5">
          Trendy tech means nothing if it doesn’t improve performance,
          conversions, or usability. We build what works, not what sounds
          impressive.
        </p>

        <h1 className="text-xl">2. Clarity and Honesty</h1>
        <p className="mb-5">
          No jargon. No overpromising. No hiding behind buzzwords. We tell you
          what’s realistic, what’s not, and why.
        </p>
        <h1 className="text-xl">3. Quality Is Non-Negotiable</h1>
        <p className="mb-5">
          Clean code, solid architecture, fast load times, and secure systems
          aren’t “extras.” They’re the baseline.
        </p>
        <h1 className="text-xl">4. Ownership Mentality</h1>
        <p className="mb-5">
          We treat every project like it’s our own product. If something breaks,
          we fix it. If something can be better, we improve it.
        </p>
        <h1 className="text-xl">5. Long-Term Thinking</h1>
        <p className="mb-5">
          We don’t build quick hacks that fall apart in six months. We build
          systems that scale as your business grows.
        </p>
      </div>
      <div className="mt-20">
        <h1 className="text-3xl flex justify-center mb-10">Meet Our Team</h1>
        <div className="grid grid-cols-5">
          {props.teamMembers.map(function (elem) {
            return (
              <Team
                img={elem.img}
                Name={elem.Name}
                Role={elem.Role}
                desc={elem.desc}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default About;
