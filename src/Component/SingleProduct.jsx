import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { gets } from './Axios'
import axios from 'axios';
import { Carts, Ranges } from './Redux/Slice/Action';
import { useDispatch } from 'react-redux';



const SingleProduct = () => {
const [Produc, setProduc] = useState("");
  const param=useParams()
  console.log(param.idd)

const dispac=useDispatch()

const [Range, setRange] = useState(1);

console.log(Produc.quantity)
dispac(Ranges(Range))
console.log(Range)



const single= async ()=>{

  // this my free api which is now not working when it work i use it late
// const res= await gets(`/${param.idd}`)
// console.log(res.data.product)
// setProduc(res.data.product)

const res= await axios.get(`https://dummyjson.com/products/${param.idd}`)
setProduc(res.data)
console.log(res.data)
}

  const addToCart = (product) => {
dispac(Carts(product))
  };




useEffect(() => {
  single()
}, [param.idd]);
  return (
    <>
      
<div className='grid grid-cols-2 place-items-center '>

<div className='flex justify-end items-end'>

  <img src={Produc.image  || Produc.
thumbnail
 } className={"rounded-2xl w-full object-cover "} alt="" />
</div>


<div className=''>

<h1 className=' text-3xl line-clamp-3 mb-9 hover:text-fuchsia-700'> Name : {Produc.title
}</h1>



<p className='text-2xl hover:text-fuchsia-700'>Price : ${Produc.price} <span></span></p>


<p className='font-bold text-cyan-800 mt-5 hover:text-fuchsia-700'>  Descirption : {Produc.
description}</p>
<p className='mt-8'> Quanity :  <input type="number"  name="" min={1} value={Range } onChange={(e) => setRange(Number(e.target.value))} className='bg-amber-400 text-center' id="" /></p>


<button className='px-6 mt-8 py-2 text-lg bg-red-500 text-white rounded-md cursor-pointer'   onClick={() => addToCart(Produc)} >Card</button>
</div>


</div>

    </>
  )
}

export default SingleProduct
