import React from "react";
import { Instagram, Whatsapp } from "react-bootstrap-icons";
import { Mail } from "lucide-react";

const Team = (props) => {
  return (
    <div className="border w-60 h-90 flex flex-col rounded-2xl justify-around items-center p-5 mt-5">
      <img
        src={props.img}
        alt=""
        className="h-25 w-25 rounded-full object-cover"
      />
      <h3 className="text-lg">{props.Name}</h3>
      <p>{props.Role}</p>
      <p>{props.desc}</p>
      <div className="list-none flex flex-row gap-5 justify-around mt-6">
        <a
          className="px-4 py-2 flex justify-self-center hover:bg-purple-500 text-black rounded bg-purple-600 "
          href={props.Links}
          target="_blank"
        >
          View Portfolio
        </a>
      </div>
    </div>
  );
};

export default Team;
