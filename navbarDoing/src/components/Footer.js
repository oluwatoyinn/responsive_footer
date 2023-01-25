import React from "react";
import { Link } from "react-router-dom";
import logo from "./img/logo2.jpg";
import instagram from "./img/instagram2.svg";
import twitter from "./img/twitter.png";
import whatsapp from "./img/whatsapp.png";
import linkedIn from "./img/linkedIn.png";
import facebook from "./img/facebook.png";
import Data from "../utils/Data";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div>
      <section id="footer" className="bg-red-500 md:px-28">
        <div className="container flex flex-col items-center justify-between px-6 py-24 mx-auto space-y-12 md:py-12 md:flex-row md:space-y-0">
          <h2 className="md:text-4xl font-bold leading-tight text-center text-2xl text-white md:max-w-xl md:text-left">
            Need to speak with an experts ?
          </h2>
          <div className="flex justify-center md:justify-start pt-6">
            <Link
              to="/contact"
              className="p-1 px-6 pt-2 text-red-500 rounded-full bg-white shadow-2xl hover:bg-gray-300 hover:text-black"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
      {/* background */}
      <div className="bg-gray-900 md:px-28">
        {/* container */}
        <div className="container flex flex-col-reverse justify-between px-6 py-10 mx-auto space-y-8 md:flex-row md:space-y-0">
          <div className="flex flex-col-reverse items-center justify-between space-y-12 md:flex-col md:space-y-0 md:items-start">
            <div className="mx-auto my-6 text-center text-white md:hidden">
              Copyright &copy; {year} All right reserved
            </div>
            <div>
              <img src={logo} alt="company logo" className="w-28" />
            </div>
            <div className="flex justify-center space-x-4">
              <Link to="/whatsapp">
                <img src={whatsapp} alt="whatsapp" className="h-8" />
              </Link>
              <Link to="/linkedIn">
                <img src={linkedIn} alt="whatsapp" className="h-8" />
              </Link>
              <Link to="/facebook">
                <img src={facebook} alt="whatsapp" className="h-8" />
              </Link>
              <Link to="/twitter">
                <img src={twitter} alt="whatsapp" className="h-8" />
              </Link>
              <Link to="/instagram">
                <img src={instagram} alt="whatsapp" className="h-8" />
              </Link>
            </div>
          </div>
          {/* two */}
          <div className="flex justify-around gap-4">
            <div>
              <h2 className="text-center text-white text-3xl pb-3">
                Contact Us
              </h2>
              {Data.contactAddress.map((item) => {
                return (
                  <div
                    key={item.id}
                    className="flex justify-between text-center"
                  >
                    <h3 className="text-white px-6 space-y-2 pt-3 text-clip">
                      {item.title}{" "}
                    </h3>
                  </div>
                );
              })}
            </div>
            <div className="flex flex-col space-y-3 text-white">
              <Link to="/about" className="nav-links">
                About
              </Link>
              <Link to="/services" className="nav-links">
                Services
              </Link>
              <Link to="/services" className="nav-links">
                Contact
              </Link>
              <Link to="/home" className="nav-links">
                Home
              </Link>
              <Link to="/blog" className="nav-links">
                Blog
              </Link>
            </div>
          </div>
          {/* three */}
          <div className="flex flex-col justify-between">
            <form>
              <div className="flex space-x-3">
                <input
                  type="text"
                  placeholder="Please subscribe"
                  className="flex-1 px-4 rounded-full focus:outline-none"
                />
                <button className="px-6 py-2 text-white rounded-full bg-red-500 hover:bg-gray-500 focus:outline-none">
                  Subscribe
                </button>
              </div>
            </form>
            <div className="hidden text-white md:block">
              Copyright &copy; {year} All right reserved
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
