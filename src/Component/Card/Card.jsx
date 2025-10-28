import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router'
import { Carts } from '../Redux/Slice/Action';
import { toast } from 'react-toastify';

export const Card = ({card}) => {
const [Cart, setCart] = useState([]);
const dispac=useDispatch()
  const addToCart = (product) => {

dispac(Carts(product))
  };


console.log(Cart)

  const idd=card.id

  return (
    <>
  
    <div className='border relative    border-gray-100 rounded-2xl cursor-pointer hover:scale-105 hover:shadow-2xl transition-all p-2 h-max'>
    <NavLink to={`/product/${idd}`}>
      <img src={card.image|| card.images[0]
} alt="" className='bg-gray-100 aspect-square w-full' />
      <h1 className='line-clamp-1 p-1  font-semibold'> Name : {card.title}</h1>
      <p className='py-3'> PRICE : {card.price}$</p>
</NavLink>
      <button className='bg-red-500 px-2 py-2 text-lg rounded-md text-white w-full cursor-pointer flex gap-2 items-center justify-center font-semibold'     onClick={() => addToCart(card)} > Add to Cart</button>
    

    </div>


    </>
  )
}


