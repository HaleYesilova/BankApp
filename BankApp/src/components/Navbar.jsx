import { useState } from "react";
import { close, logo, menu } from "../assets";
import { navLinks } from "../constants";

const Navbar = () => {
  return (
    <nav className = "w-full flex py-6 jsutify-between items-center navbar">
      <img src ={logo} alt = "hoobank"
      className = "w-[124px] h-[32px]"/>

      <ul className ="list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((nav, index) =>(
          <li
          key = {nav.id}
          className = {'font-poppins'}
          >

          </li>
        ))}

      </ul>

    </nav>
  )
}

export default Navbar