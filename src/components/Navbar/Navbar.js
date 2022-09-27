import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div className="text-black">
      <div className="flex justify-between pr-10 gap-4 p-5 bg-white">
        <NavLink to={"/"}>
          <h1 className="font-bold text-4xl">Online Shop</h1>
        </NavLink>
        <div className="flex justify-end gap-6 font-bold pr-4 text-2xl">
          <NavLink to={"/"}>
            <h2>Products</h2>
          </NavLink>
          <NavLink to={"/about"}>
            <h2> About us</h2>
          </NavLink>
          <NavLink to={"/cart"}>
            <svg
              class="h-8 w-8 text-red-900"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              {" "}
              <circle cx="9" cy="21" r="1" /> <circle cx="20" cy="21" r="1" />{" "}
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
            </svg>
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
