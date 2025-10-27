import React from 'react'
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";
import { NavLink } from 'react-router';

const Footer = () => {
  return (
    <div>
  <footer className="bg-gray-900 text-gray-300 py-10 px-6 mt-16">
      <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-8">
        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-4">ShopZone</h2>
          <p className="text-sm leading-relaxed">
            Your one-stop shop for the best deals on electronics, fashion, and
            accessories. Fast shipping and great support.
          </p>
        </div>

        {/* Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Quick Links</h3>
          <ul className="space-y-2">
          
               <NavLink  to={"/"}   style={({isActive})=>{

return{color:isActive ?"white":"Lightblue",textDecoration:"none"}
        } } >Home</NavLink>
        
            <li><NavLink  to={"/product"}   style={({isActive})=>{

return{color:isActive ?"white":"Lightblue",textDecoration:"none"}
        } } >Product</NavLink></li>
            <li>    
              
              
               <li><NavLink  to={"/About"}   style={({isActive})=>{

return{color:isActive ?"white":"Lightblue",textDecoration:"none"}
        } } >About</NavLink></li></li>
            <li><li><NavLink  to={"/Contact"}   style={({isActive})=>{

return{color:isActive ?"white":"Lightblue",textDecoration:"none"}
        } } >Contact</NavLink></li></li>
          </ul>
        </div>

        {/* Customer Service */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Customer Service</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-white transition">FAQs</a></li>
            <li><a href="#" className="hover:text-white transition">Shipping</a></li>
            <li><a href="#" className="hover:text-white transition">Returns</a></li>
            <li><a href="#" className="hover:text-white transition">Privacy Policy</a></li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Follow Us</h3>
          <div className="flex space-x-4 text-xl">
            <a href="#" className="hover:text-blue-500"><FaFacebook /></a>
            <a href="#" className="hover:text-pink-500"><FaInstagram /></a>
            <a href="#" className="hover:text-sky-400"><FaTwitter /></a>
            <a href="#" className="hover:text-blue-700"><FaLinkedin /></a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="text-center text-sm text-gray-500 mt-10 border-t border-gray-700 pt-4">
        © {new Date().getFullYear()} ShopZone. All rights reserved.
      </div>
    </footer>
    </div>
  )
}

export default Footer
