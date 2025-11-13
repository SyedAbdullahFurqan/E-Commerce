import React from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router'

const Tracks = () => {
    const tracks= useSelector(state => state.counter.track)
    const maps= useSelector(state => state.counter.Cartss)
    const price= useSelector(state => state.counter.value)
    console.log(tracks)
  return (
   <><div className="flex flex-col w-full items-center justify-center  text-center">
          <h1 className=" font-bold mb-2 text-3xl">Thank you for your order</h1>
          <p className="mb-6">Your order has been placed</p>

          <div className="bg-gray-100 p-6 w-[70%]">
              <h1 className="text-xl font-semibold mb-2">Order Summary</h1>
              <span className="block mb-4">Order Number: 231321423</span>

              <h1 className="text-xl font-semibold mb-2">Shipping Information</h1>
              <span className="block mb-4">Emails: {tracks.emails}</span>
              <span className="block mb-4">Address : {tracks.addres}      </span>
              <span className="block mb-4">Phone: {tracks.phone}</span>







              <h1 className="text-xl font-semibold mb-2">Items Ordered</h1>
              <div>
                  {maps.map((daad) => {
                      console.log(daad)
                      return (

                          <>
<div className="grid grid-cols-1 sm:grid-cols-2 items-center border-b border-gray-600 py-4 gap-4">
  {/* Product Info */}
  <div className="flex flex-col sm:flex-row items-center  ">
    {/* Product Image */}
    <img
      src={daad.images[0]}
      alt={daad.title}
      className="w-32 h-32 mx-2 object-cover rounded-md"
    />

    {/* Product Details */}
    <div className="text-center sm:text-left">
      <p className="font-semibold ">{daad.title}</p>
      <p className="">
        {daad.price}$ × {daad.quantity}
      </p>
    </div>
  </div>

  {/* Price Section */}
  <div className="flex justify-center sm:justify-end items-center">
    <p className="   font-semibold">
      Price: {daad.price * daad.quantity}$
    </p>
  </div>
</div>


                          </>
                      )
                  })}


                  <div className='border-t-2 grid grid-cols-2 border-t-gray-400 border-b-2 border-b-gray-400 pt-5'>

                      <h3 className=''>Total Price</h3>
                      <p className='text-end  mx-5 pb-4'>{Math.ceil(price)}$</p>

                  </div>


              </div>

          </div>
      <div>
              <NavLink to={"/"}>
                  <button className='bg-red-500 text-white w-50 py-3 mt-5 rounded-3xl cursor-pointer'> Continue Shopping</button>
              </NavLink>
          </div>
          
      </div>
      

          </>
  )
}

export default Tracks
