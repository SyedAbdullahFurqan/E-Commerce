import React from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router'
import { CgShoppingCart } from "react-icons/cg";
import { LuShoppingBag } from "react-icons/lu";
 export const Navbar = () => {
  const item = useSelector(state => state.counter.Cartss)
  const gets=  JSON.parse(localStorage.getItem("cartItems"))
  return (
    <>
  <div className=''> 
<nav className="w-full flex flex-wrap items-center justify-between bg-gray-700 px-2 py-2 sm:px-4 sm:py-3 md:px-6 md:py-3 overflow-hidden">
  {/* Logo Section */}
  <div className="flex items-center gap-2">
    <span className="text-[10px] sm:text-2xl text-green-400">
      <LuShoppingBag />
    </span>
    <h1 className="text-sm sm:text-2xl  font-semibold">
      <NavLink
        to="/"
        style={({ isActive }) => ({
          color: isActive ? "white" : "lightblue",
          textDecoration: "none",
        })}
      >
        ShopZone
      </NavLink>
    </h1>
  </div>

  {/* Menu Section */}
  <ul className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 md:gap-6 text-[12px] sm:text-[16px] md:text-[18px] mt-2 sm:mt-0">
    <li>
      <NavLink
        to="/"
        style={({ isActive }) => ({
          color: isActive ? "white" : "lightblue",
          textDecoration: "none",
        })}
      >
        Home
      </NavLink>
    </li>

    <li>
      <NavLink
        to="/product"
        style={({ isActive }) => ({
          color: isActive ? "white" : "lightblue",
          textDecoration: "none",
        })}
      >
        Product
      </NavLink>
    </li>

    <li>
      <NavLink
        to="/About"
        style={({ isActive }) => ({
          color: isActive ? "white" : "lightblue",
          textDecoration: "none",
        })}
      >
        About
      </NavLink>
    </li>

    <li className="flex items-center gap-1 text-lg sm:text-2xl">
      <NavLink
        to="/Cart"
        style={({ isActive }) => ({
          color: isActive ? "white" : "lightblue",
          textDecoration: "none",
        })}
      >
        <CgShoppingCart />
      </NavLink>
      <p className="text-amber-50 text-xs sm:text-sm">{item.length}</p>
    </li>

    <li>
      <NavLink
        to="/Contact"
        style={({ isActive }) => ({
          color: isActive ? "white" : "lightblue",
          textDecoration: "none",
        })}
      >
        Contact
      </NavLink>
    </li>
  </ul>
</nav>

        </div>


    </>
  )
}


