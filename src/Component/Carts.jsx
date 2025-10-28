import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, Delete, increment, Price } from './Redux/Slice/Action'
import { NavLink } from 'react-router'

import NoCart from "../assets/bag.png"
const Carts = () => {

  
const item = useSelector(state => state.counter.Cartss)
const count = useSelector(state => state.counter.range)
console.log(item)
const dis=useDispatch()

console.log(count)
// const totals= item.reduce((total, item) => total + item.price, 0)
// console.log(Math.ceil(totals)
// )
// const totalPrice=Math.ceil(totals)


const totalItems = item.reduce((sum, product) => sum + product.quantity, 0);

// 🟢 Total price (sum of all subtotals)
const totalPrice = item.reduce(
  (sum, product) => sum + product.price * product.quantity,
  0
);

dis(Price(totalPrice))

 console.log(totalItems,"totalprice",totalPrice)


function delets(product) {
  dis(Delete(product))
  console.log(product, "click")
}



  return (
    
    <div>
{item.length > 0 ?
        <><div className='grid grid-cols-6 border-2 border-gray-500 px-2 mx-3 place-content-center place-items-center my-4  '>

          {item.map((daad) => {

            return (

              <>
                <div className='mt-3'>

                  <img src={daad
                    .images[0]} alt="" className='w-full ' />
                </div>



                <div>
                  <p className='text-center text-[12px] sm:text-2xl items-center'> {daad.
                    title}</p>
                </div>
                <div>
                  <p className='text-center text-[12px] sm:text-2xl'> Price: {eval(daad.
                    price)}$

                  </p>
                </div>
                <div>
                  <p className='text-center text-[12px] sm:text-2xl'> Subtotal: {eval(daad.
                    price * daad.quantity)}$

                  </p>
                </div>


                <div className='flex flex-col sm:flex-row items-center gap-3 sm:gap-4'>
                  <button
                    aria-label="Increment value"
                    onClick={() => dis(increment(daad.id))}
                  >
                    <p className='px-2 mt-3   py-1 bg-gray-300 cursor-pointer'>+</p>
                  </button>

                  <span className=''>{daad.quantity || count}</span>

                  <button
                    aria-label="Decrement value"
                    onClick={() => dis(decrement(daad.id))}
                  >


                    <p className='  px-2 mt-3   py-1 bg-red-600 cursor-pointer'>-</p>
                  </button>

                </div>

                <div>
                  <button className='sm:py-2 sm:px-3 sm:text-[20px] ms-2  py-2 px-3 text-[10px] border-2 rounded-2xl border-gray-300 cursor-pointer ' onClick={() => delets(daad.id)}>Delete</button>
                </div>

              </>
            )
          })}

        </div><div className='bg-gray-300 border-2 w-[88%]  sm:w-[50%] rounded-3xl text-center items-center pb-4 m-auto'>

            <h3 className='mt-4'>Cart  Total</h3>
            <div className='grid grid-cols-2 gap-5 my-4'>

              <div className=''>
                <p>TotalItem :  </p>
                <h3 className='my-6'>Delivery Charge</h3>
                <p>Total price : </p>
              </div>


              <div className=''>
                <h4>{totalItems} </h4>
                <h3 className='my-6 uppercase'>free</h3>

                <p>{Math.ceil(totalPrice)}$</p>
                {/* {item.map((values)=>{
  console.log(values.quantity)
return(
<p> {  eval( values.price* values.quantity)}</p>)
})} */}

              </div>

            </div>
            <NavLink to={"/checkout"}><button className='bg-cyan-600 text-white rounded-3xl px-6 mt-4 py-3 cursor-pointer'>Processed to Checkout</button></NavLink>
          </div></>


 :      <><div className='flex justify-center items-center'>
          <img src={NoCart} alt="" />
          <br />

        </div><div className='flex justify-center'>
            <p className='uppercase mt-6 mx-3'>No more item, ADD item</p>
            <NavLink to={"/"}>
            
            <button className='bg-cyan-600 text-white rounded-3xl px-6 mt-4 py-3 cursor-pointer'> Go To Shopping</button></NavLink>


          </div></>
  
  }

    </div>
  )
}

export default Carts
