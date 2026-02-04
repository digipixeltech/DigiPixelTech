import React from "react";
import { Copy, Instagram } from "lucide-react";
import { Linkedin } from "lucide-react";
import { Mail } from "lucide-react";
import { Whatsapp } from "react-bootstrap-icons";

const Footer = () => {
  return (
    <div className="flex flex-col min-h-screen m-0 ">
      <footer className="py-10 px-10 mt-auto flex justify-around">
        <div className="w-1/3 flex justify-center flex-col">
          <h2>DIGIPIXELTECH</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente,
            delectus laborum modi accusantium voluptatibus rerum odio quam
            mollitia provident voluptate.
          </p>
        </div>
        <div className="w-1/3 flex gap-20">
          <div>
            <h3>Services</h3>
            <p>hh</p>
            <p>jjj</p>
            <p>jjjkk</p>
            <p>kk</p>
          </div>
          <div>
            <h3>Others</h3>
            <li><a href="">Home</a></li>
            <li><a href="">Services</a></li>
            <li><a href="">Projects</a></li>
            <li><a href="">About us</a></li>
            <li><a href="">Contact Us</a></li>
          </div>
        </div>
        <div className="flex flex-col justify-center">
          <a
            href="https://www.instagram.com/digipixeltech/"
            className="decoration-0 p-3 rounded-full hover:bg-white"
          >
            <Instagram size={30} className="hover:text-pink-500" />
          </a>
          <a href="" className="p-3 hover:bg-white rounded-full">
            <Linkedin
              size={30}
              color="#9d3969"
              strokeWidth={1.25}
              className="hover:text-blue-500"
            />
          </a>
          <a
            href="mailto:digipixeltech43@gmail.com"
            className="p-3 bg-black rounded-full"
          >
            <Mail size={30} color="#9d3969" strokeWidth={1.25} />
          </a>
          <a
            href="https://wa.me/917411712661"
            className="p-3 bg-black rounded-full"
          >
            <Whatsapp size={30} />{" "}
          </a>
        </div>
      </footer>
      <p>DigiPixelTech</p>
    </div>
  );
};

export default Footer;
