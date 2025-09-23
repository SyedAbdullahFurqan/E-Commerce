import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'

import axios from 'axios';
import { Carts, Ranges } from './Redux/Slice/Action';
import { useDispatch } from 'react-redux';


const Clothes = () => {

const [Cloth, setCloth] = useState("");
  const param=useParams()
  console.log(param.ids)

const dispac=useDispatch()




const Clothes= async ()=>{

  // this my free api which is now not working when it work i use it late
// const res= await gets(`/${param.idd}`)
// console.log(res.data.product)
// setProduc(res.data.product)

const res= await axios.get(`https://api.escuelajs.co/api/v1/products/${param.ids}`)
setCloth(res.data)
console.log(res.data)

}

  const addToCart = (product) => {
dispac(Carts(product))
  };




useEffect(() => {
Clothes()
}, [param.idd]);



  return (
    <div>
      
<div className='grid grid-cols-2 place-items-center '>

<div className='flex justify-end items-end'>

  <img src={Cloth.images  || Cloth.
thumbnail
 } className={"w-70 "} alt="" />
</div>


<div className=''>

<h1 className=' text-3xl line-clamp-3 mb-9 hover:text-fuchsia-700'> Name : {Cloth.title
}</h1>



<p className='text-2xl hover:text-fuchsia-700'>Price : $ {Cloth.price} <span></span></p>


<p className='font-bold text-cyan-800 mt-5 hover:text-fuchsia-700'>  Descirption : {Cloth.
description}</p>
{/* <p className='mt-8'> Quanity :  <input type="number"  name="" min={1} value={Range } onChange={(e) => setRange(Number(e.target.value))} className='bg-amber-400 text-center' id="" /></p> */}


<button className='px-6 mt-8 py-2 text-lg bg-red-500 text-white rounded-md cursor-pointer'   onClick={() => addToCart(Cloth)} >Card</button>
</div>


</div>
    </div>
  )
}

export default Clothes
