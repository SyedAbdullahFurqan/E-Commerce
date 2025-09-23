import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, Delete, increment, Price } from './Redux/Slice/Action'
import { NavLink } from 'react-router'
const Carts = () => {
const item = useSelector(state => state.counter.Cartss)
const count = useSelector(state => state.counter.range)
console.log(item)
const dis=useDispatch()

;console.log(count)
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
     
<div className='grid grid-cols-6 border-2 border-amber-300 mt-5 place-content-center place-items-center my-4'>

  {item.map((daad)=>{
   
return(

  <>
  <div className=''>

<img src={daad
.images[0]
} alt="" className='w-50 h-50' />
</div>



 <div>
<p className='text-center items-center'> {daad.
title
}</p>
</div>
<div>
<p className='text-center' > Price: {  eval(daad.
price)
}

</p>
</div>
<div>
<p className='text-center' > Subtotal: {  eval(daad.
price * daad.quantity )
}

</p>
</div>


<div className=''>
   <button
          aria-label="Increment value"
          onClick={() => dis(increment(daad.id))}
        >
       <p className='md:py-2 md:px-4 sm:py-3 sm:px-2 px-3 py-1 bg-amber-300 cursor-pointer'>+</p>
        </button>
       
        <span className='mx-4'>{daad.quantity || count}</span>
       
        <button
          aria-label="Decrement value"
          onClick={() => dis(decrement(daad.id))}
        >


        <p className='sm:py-3 sm:px-2 md:py-2 md:px-4 px-1 py-2 bg-amber-300 cursor-pointer'>-</p>
        </button>

</div>

<div>
  <button className='p-4 border-2 rounded-2xl border-amber-400 cursor-pointer ' onClick={()=> delets(daad.id)} >Delete</button>
</div>

  </>
)
  })}

</div>


<div className='bg-amber-500 border-2 w-80 h-70 rounded-3xl text-center items-center pb-4 m-auto'>

<h3 className='mt-4'>Cart  Total</h3>
<div className='grid grid-cols-2 gap-5 my-4'>

<div className=''>
<p >TotalItem :  </p >
<h3 className='my-6'>Delivery Charge</h3>
<p >Total price : </p>
</div>


<div className=''>
<h4>{totalItems} </h4>
<h3 className='my-6'>free</h3>

  <p>{ Math.ceil(totalPrice) }$</p>
    {/* {item.map((values)=>{
  console.log(values.quantity)
return(
<p> {  eval( values.price* values.quantity)}</p>)
})} */}

</div>

</div>
<NavLink to={"/checkout"}><button className='bg-amber-100 rounded-3xl px-6 mt-4 py-3 cursor-pointer'>Processed to Checkout</button></NavLink>
</div>



    </div>
  )
}

export default Carts
