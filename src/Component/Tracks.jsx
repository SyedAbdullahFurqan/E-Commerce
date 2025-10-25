import React from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router'

const Tracks = () => {
    const tracks= useSelector(state => state.counter.track)
    const maps= useSelector(state => state.counter.Cartss)
    const price= useSelector(state => state.counter.value)
    console.log(tracks)
  return (
   <><div className="flex flex-col w-full items-center justify-center h-screen text-center">
          <h1 className="text-2xl font-bold mb-2">Thank you for your order</h1>
          <p className="mb-6">Your order has been placed</p>

          <div className="bg-gray-100 p-6 rounded-xl shadow-md w-100 h-fit">
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

                              <div className='  flex '>


                                  <div className='grid grid-cols-2 w-100 '>
                                      <div className='my-4'>
                                          <p className='pt-6'> {daad.
                                              title}</p>

                                          <p className=''>  {daad.
                                              price} x  {daad.quantity}

                                          </p>

                                      </div>
                                      <div className='text-end mt-8'>
                                          <p className=''> Price : {daad.
                                              price}$</p>

                                      </div>
                                  </div></div>




                          </>
                      )
                  })}


                  <div className='border-t-2 grid grid-cols-2 border-t-gray-400 border-b-2 border-b-gray-400 pt-5'>

                      <h3 className='w-60 mx-auto'>Total Price</h3>
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
