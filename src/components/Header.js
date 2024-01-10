import React from "react";
import { useState, useEffect } from "react";
import { footer } from "../data/footer";
import logo from "../images/logo.svg";
import Buttons from "./Buttons";
import Menu from "./Menu";
const Header = () => {
  const [navLinks, setNavLinks] = useState(footer);
  const [isOpen, setIsOpen] = useState(false);
  const [width, setWidth] = useState(768);

  useEffect(() => {
    if (window.innerWidth > width) {
      setIsOpen(true);
    }
  }, []);
  return (
    <>
      <header ClassName="absolute p-5 flex items-center justify-between w-full mt-12">
        {/*Links */}
        {isOpen && (
          <nav className="navbar md:flex md:justify-between text-white ml-1 mt-12">
            <div className="md:mr-5  md:ml-5 lg:ml-28 ">
              <img src={logo} alt="blogr logo" className="mt-8" />
            </div>
            <ul className="lg:ml-0 mt-12 ">
              {navLinks.map(({ id, title, links }) => (
                <li key={id}>{title}</li>
              ))}
            </ul>
            <Buttons />
          </nav>
        )}
        <Menu isOpen={isOpen} setIsOpen={setIsOpen} />
      </header>
    </>
  );
};

export default Header;
