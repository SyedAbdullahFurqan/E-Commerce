import React from 'react'
import { FaShippingFast } from "react-icons/fa";
import { MdHeadsetMic } from "react-icons/md";
import { FaMoneyBill1Wave } from "react-icons/fa6";
import { MdDiscount } from "react-icons/md";
import { FaLock } from "react-icons/fa";
const Shipping = () => {
  return (
    <div>
      
<div className='grid lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3  grid-cols-2 mt-5 mx-4 gap-5'>
  <div className='border-2 w-full border-gray-300 p-5'>
    <p className='flex justify-center'>
      <FaShippingFast className="text-3xl text-red-600"/>
    </p>
    <h1 className='text-center mt-5'>Free Shipping</h1>
    <p className='mt-5 text-center'>
      Lorem ipsum dolor. dipisicing elit. Neque, itaqu
    </p>
  </div>
      

<div className='border-2 w-full border-gray-300 p-5'>

   <p  className='flex justify-center text-4xl text-red-600'>  <MdHeadsetMic/></p>
    <h1  className='text-center mt-5'>Support 24/7</h1>
    <p className='mt-5 text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, itaque.</p>
</div>
<div className='border-2 w-full border-gray-300 p-5'>
      <p  className='flex justify-center text-4xl text-red-600'>  <FaMoneyBill1Wave/></p>
    <h1  className='text-center mt-5'>100% Money Back</h1>
    <p className='mt-5 text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, itaque.</p>
</div>


<div className='border-2 w-full border-gray-300 p-5'>
  <p  className='flex justify-center text-4xl text-red-600'>  <FaLock className="text-3xl text-red-600" /> </p>
    <h1 className='text-center mt-5'>Payment Secure</h1>
    <p className='mt-5 text-center'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, itaque.</p>
</div>

<div className='border-2 w-full border-gray-300 p-5'>
     <p  className='flex justify-center text-4xl text-red-600'> <MdDiscount/></p>
    <h1 className='text-center mt-5'>Discount</h1>
    <p className='mt-5 text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, itaque.</p>
</div>
</div>
    </div>
  )
}

export default Shipping
