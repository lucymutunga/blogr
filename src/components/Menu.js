import React from "react";
import open from "../images/icon-hamburger.svg";
import close from "../images/icon-close.svg";
const Menu = ({ isOpen, setIsOpen }) => {
  return (
    <>
      <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
        {isOpen ? <img src={close} alt="" /> : <img src={open} alt="" />}
      </button>
    </>
  );
};

export default Menu;
