import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'

import axios from 'axios';
import { Carts, Ranges } from './Redux/Slice/Action';
import { useDispatch } from 'react-redux';
import single from "./Saad.json"

const Clothes = () => {

  const {ids}=useParams()
  console.log(ids)
const dispac=useDispatch()


const Cloth=  single.find((saadss)=>  saadss.id== ids )
  console.log(Cloth)

// const Clothes= async ()=>{

  // this my free api which is now not working when it work i use it late
// const res= await gets(`/${param.idd}`)
// console.log(res.data.product)
// setProduc(res.data.product)

// const res= await fetch(`https://api.escuelajs.co/api/v1/products/${ids}`)

// console.log(res.data)

// }

  const addToCart = (product) => {
dispac(Carts(product))
  };




// useEffect(() => {
// Clothes()
// }, []);



  return (
    <div>
      
<div className='grid grid-cols-1  sm:grid-cols-2 place-items-center '>

<div className='flex pt-3 justify-end items-end'>

  <img src={Cloth.images  || Cloth.
thumbnail
 } className={"w-70 rounded-3xl "} alt="" />
</div>


<div className='flex flex-col justify-center'>

<h1 className=' text-3xl mb-9 hover:text-red-600 my-2 mx-2'> Name : {Cloth.title
}</h1>



<p className='text-2xl hover:text-red-600 mx-2'>Price : $ {Cloth.price} <span></span></p>


<p className='font-bold text-cyan-800 mt-5 mx-3 hover:text-red-600'>  Descirption : {Cloth.
description}</p>

<button className='px-6 mt-4 text-center py-2 text-lg w-50 m-auto bg-red-500 text-white rounded-md cursor-pointer'   onClick={() => addToCart(Cloth)} >Card</button>
</div>

{/* <p className='mt-8'> Quanity :  <input type="number"  name="" min={1} value={Range } onChange={(e) => setRange(Number(e.target.value))} className='bg-amber-400 text-center' id="" /></p> */}


</div>
    </div>
  )
}

export default Clothes
