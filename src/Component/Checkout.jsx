import React, { useState } from 'react'

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import NoCart from "../assets/bag.png"
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { Tracking } from './Redux/Slice/Action';
import { Navigate, NavLink, useNavigate } from 'react-router';
const Checkout = () => {
const Navi=useNavigate()
    const [Details, setDetails] = useState({names:"",emails:"",phone:"",addres:"",city:""});
const maps= useSelector(state => state.counter.Cartss)
const dis=useDispatch()
const price= useSelector(state => state.counter.value)


    console.log(Details)
function handle(e) {
  setDetails({...Details,
    [e.target.name]:e.target.value})  
}



function track(e){
e.preventDefault()
console.log(Details)
dis(Tracking(Details))
setDetails({names:"",emails:"",phone:"",addres:"",city:""})
Navi("/track")
  toast.success("Your Order Placed Successfully")
}
  return (
    <>



<h1 className='text-4xl my-4 mx-5'>CheckOUT</h1>

<div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-6xl mx-auto p-4 sm:p-6">

  {/* Left Side — Form Section */}
  <div className="w-full">
    <form onSubmit={track} className="w-full bg-gray-800 p-4 sm:p-6 rounded-xl shadow-lg text-white">
      {/* Billing Information */}
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
          <Typography className="font-semibold text-lg">Billing Information</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Name */}
            <div className="flex flex-col">
              <label className="text-sm mb-1">Name</label>
              <input
                type="text"
                className="bg-gray-700 text-white p-2 rounded-md w-full outline-none"
                placeholder="Enter your name"
                value={Details.names}
                name="names"
                required
                onChange={handle}
              />
            </div>

            {/* Email */}
            <div className="flex flex-col">
              <label className="text-sm mb-1">Email</label>
              <input
                type="email"
                className="bg-gray-700 text-white p-2 rounded-md w-full outline-none"
                placeholder="Enter your email"
                value={Details.emails}
                name="emails"
                required
                onChange={handle}
              />
            </div>

            {/* Phone */}
            <div className="flex flex-col sm:col-span-2">
              <label className="text-sm mb-1">Phone</label>
              <input
                type="tel"
                className="bg-gray-700 text-white p-2 rounded-md w-full outline-none"
                placeholder="Enter your phone"
                value={Details.phone}
                name="phone"
                required
                onChange={handle}
              />
            </div>
          </div>
        </AccordionDetails>
      </Accordion>

      {/* Shipping Information */}
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel2a-content" id="panel2a-header">
          <Typography className="font-semibold text-lg">Shipping Information</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Address */}
            <div className="flex flex-col sm:col-span-2">
              <label className="text-sm mb-1">Address</label>
              <input
                type="text"
                className="bg-gray-700 text-white p-2 rounded-md w-full outline-none"
                placeholder="Enter your address"
                value={Details.addres}
                name="addres"
                required
                onChange={handle}
              />
            </div>

            {/* City */}
            <div className="flex flex-col sm:col-span-2">
              <label className="text-sm mb-1">City</label>
              <input
                type="text"
                className="bg-gray-700 text-white p-2 rounded-md w-full outline-none"
                placeholder="Enter your city"
                value={Details.city}
                name="city"
                required
                onChange={handle}
              />
            </div>
          </div>
        </AccordionDetails>
      </Accordion>

      {/* Payment Method */}
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel3a-content" id="panel3a-header">
          <Typography className="font-semibold text-lg">Payment Method</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <div className="flex items-center gap-3">
            <input type="radio" name="payment" id="cod" className="accent-cyan-500" required />
            <label htmlFor="cod" className="text-sm">Cash on Delivery</label>
          </div>
        </AccordionDetails>
      </Accordion>

      {/* Submit Button */}
      <div className="flex justify-center mt-6">
        <button
          type="submit"
          className="px-6 py-3 w-full sm:w-40 bg-cyan-600 hover:bg-cyan-500 text-white font-semibold rounded-2xl border-2 border-cyan-500 transition-all"
        >
          Place Order
        </button>
      </div>
    </form>
  </div>

  {/* Right Side — Cart Section */}
  <div className="w-full">
    {maps.length > 0 ? (
      <div className="border-2 border-gray-600 p-4 rounded-xl  ">
        {maps.map((daad, index) => (
          <div key={index} className="flex flex-col sm:flex-row items-center border-b border-gray-600 py-4 gap-4">
            <img
              src={daad.images[0]}
              alt={daad.title}
              className="w-28 h-28 object-cover rounded-md"
            />
            <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 w-full">
              <div>
                <p className="text-lg font-semibold">{daad.title}</p>
                <p>Price: ${daad.price}</p>
                <p>
                  {daad.price} × {daad.quantity}
                </p>
              </div>
              <div className="text-right sm:mt-0 mt-3">
                <p className="font-semibold">Subtotal</p>
                <p>{daad.price * daad.quantity}$</p>
              </div>
            </div>
          </div>
        ))}

        {/* Total Price */}
        <div className="flex justify-between border-t border-gray-500 pt-4 mt-2">
          <h3 className="font-semibold">Total Price</h3>
          <p>{Math.ceil(price)}$  </p>
        </div>
      </div>
    ) : (
      <div className="flex flex-col items-center text-center">
        <img src={NoCart} alt="No Cart" className="w-60" />
        <p className="uppercase mt-6">No more items, add something!</p>
        <NavLink to="/">
          <button className="bg-cyan-600 text-white rounded-3xl px-6 mt-4 py-3 cursor-pointer hover:bg-cyan-500">
            Go To Shopping
          </button>
        </NavLink>
      </div>
    )}
  </div>
</div>



    </>
  )
}

export default Checkout
