import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../components/img/logo2.jpg";
import Hamburger from "./icon/Hamburger";

const NavBar = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(!open);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <nav className="container mx-auto relative md:px-28">
        <div className="flex items-center justify-between">
          <div className="pt-2 cursor-pointer">
            <img src={Logo} alt="company Logo" className="w-48 bg-white" />
          </div>
          {/* links */}
          <div className="md:flex space-x-8 hidden">
            <Link to="/" className="nav-links">
              Home
            </Link>
            <Link to="/about" className="nav-links">
              About Us
            </Link>
            <Link to="/services" className="nav-links">
              Services
            </Link>
            <Link to="/blog" className="nav-links">
              Blog
            </Link>
            <Link to="/career" className="nav-links">
              Career
            </Link>
            <Link to="/contact" className="nav-links">
              Contact Us
            </Link>
          </div>
          <div>
            hello
          </div>
          <button
            id="menu-btn"
            onClick={handleOpen}
            className="block md:hidden mr-3"
          >
            <Hamburger />
          </button>
        </div>
        {open && (
          <div>
            <div className="absolute bg-white flex flex-col w-full font-bold py-8 space-y-3 self-end drop-shadow-2xl pl-3">
              <Link to="/" className="nav-links" onClick={handleClose}>
                Home
              </Link>
              <Link to="/about" className="nav-links" onClick={handleClose}>
                About Us
              </Link>
              <Link to="/services" className="nav-links" onClick={handleClose}>
                Services
              </Link>
              <Link to="/blog" className="nav-links" onClick={handleClose}>
                Blog
              </Link>
              <Link to="/career" className="nav-links" onClick={handleClose}>
                Career
              </Link>
              <Link to="/contact" className="nav-links" onClick={handleClose}>
                Contact Us
              </Link>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default NavBar;
