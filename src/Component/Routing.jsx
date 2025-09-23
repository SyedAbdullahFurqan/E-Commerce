import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router'
import { Carts } from './Redux/Slice/Action'
const Routing = () => {

    const navlinks = useSelector(state => state.counter.nav)
   // const prodc = useSelector(state => state.counter.pro)
   const dispac=useDispatch()
  const addToCart = (product) => {
dispac(Carts(product))
  };


console.log(navlinks)
  return (
    <>
      

<div className='grid sm:grid-cols-2 grid-cols-1  md:grid-cols-3 gap-5 mx-6 mt-5'>
{navlinks.map((Saad)=>{
console.log(Saad.id)
const idd=Saad.id
return (

    <>
<div className='border-4 border-amber-600 rounded-4xl p-5'>
    <NavLink to={`/product/${idd}`}>
        <img src={Saad.image|| Saad.images[0]} className='w-60 h-60 text-center m-auto ' alt="" />
   
    </NavLink>
    <div className='mx-5'>
<h1 className='line-clamp-2 text-2xl mt-4'> {Saad.title}</h1>
<p className='text-3xl mt-3'>  Price {Saad.
price}$</p>
<button className='text-blue-700 py-2 rounded-2xl text-center mt-5 bg-amber-400 w-1/2  cursor-pointer'  onClick={ ()=> addToCart(Saad)}> Card</button>
        </div>
</div>
        </>
)

})}


</div>
    </>
  )
}

export default Routing
