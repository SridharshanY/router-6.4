import React from 'react'
import { useState } from 'react';
import logo from '../images/logo.png'
import { NavLink } from 'react-router-dom';

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);


  return (
    <nav
      className={`flex flex-row bg-black justify-between md:py-1 md:px-4 md:mb-4 px-4 mb-4 rounded-b-xl md:rounded-b-3xl duration-150 text-white ${
        isOpen ? "pb-32 duration-150" : ""
      }`}
    >
      <div>
        <NavLink to="/">
          <img
            className="w-20 duration-100 hover:scale-125 hover:duration-100"
            src={logo}
            alt="Logo"
          />
        </NavLink>
      </div>
      <ul
        className={`md:flex md:flex-row md:justify-center md:items-center gap-4 text-lg md:static ${
          isOpen ? "block absolute top-16 left-8 duration-150" : "hidden"
        }`}
      >
        {" "}
        <li className={` hover:scale-125 hover:duration-100 ${isOpen ? "text-xl my-3": ""}`}>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "text-yellow-300 border-b-2 duration-200" : "")}
          >
            Home
          </NavLink>
        </li>
        <li className={` hover:scale-125 hover:duration-100 ${isOpen ? "text-xl my-3": ""}`}>
          <NavLink
            to="/user"
            className={({ isActive }) => (isActive ? "text-yellow-300 border-b-2 duration-200" : "")}
          >
            Users
          </NavLink>
        </li>
      </ul>
      <div className={`md:hidden flex justify-center items-center`}>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-3xl hover:bg-yellow-600 w-16 h-16 rounded-full active:rotate-180 active:duration-150"
        >
          &#9776;
        </button>
      </div>
    </nav>
  )
}

export default Menu
