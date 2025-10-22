import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router';
import { Routing } from './Redux/Slice/Action';
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import tshirt from "./img/tshirt.jpg"
import smart from "./img/smart.jpg"
import veg from "./img/vegtable.jpg"
import bag from "./img/bags.jpg"
import performe from "./img/performe.jpg"
import dresses from "./img/dresses.jpg"
// Import Swiper styles
import 'swiper/css';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Collection from './Collection';
import Shipping from './Shipping';
import arrival from "./Saad.json"
const  List= () => {
const [Cato, setCato] = useState([]);
const dispatch=useDispatch()
const [Sea, setSea] = useState("");

const [Respons, setRespons] = useState([]);
console.log(Sea)
    const cate=async ()=>{

         const catego= await axios.get("https://dummyjson.com/products/category-list")
        console.log(catego.data)
        setCato(catego.data)
    }
     const routes= async ()=>{
const routess= await  axios.get(`https://dummyjson.com/products/category/${Sea}`)
      console.log(routess.data)
     dispatch(Routing(routess.data.products))
      
 }
 async function   Goat(params) {
//    const getting= await fetch(" https://api.escuelajs.co/api/v1/products")
    
const getting= await axios.get("https://dummyjson.com/products/category/mens-watches") 
console.log(getting)

const slice=getting.data.products


setRespons(slice)

 }

useEffect(() => {
    Goat()
   cate()
   routes()
 
}, [Sea]);
  return (
    <>
<section className='w-full h-screen bg-gray-300'>
          <div className="w-full ">
      

  <Swiper
    spaceBetween={30}
    navigation={true}
    pagination={{ clickable: true }}
    modules={[Navigation]}
    className="mySwiper"
  >
    {Respons.map((rec, index) => (
      <SwiperSlide key={index}>
        <div className="grid   md:grid-cols-2 h-screen w-full justify-items-center items-center gap-6 ">
          {/* Text Section */}
          <div className=" mt-4 text-center ms-8  ">
            <NavLink to={`/product/${rec.id}`}>
              <h1 className=" font-bold uppercase mb-4 md:text-2xl   lg:text-2xl">
                NAME: {rec.title}
              </h1>

              <span className="block text-lg md:text-2xl font-semibold">
                Description:
              </span>
              <p className=" sm:w-60   md:w-80 lg:w-100 md:m-auto mt-3 m-auto md:mt-3">
                "{rec.description}"
              </p>

              <button className="bg-gray-600 hover:bg-gray-700 text-white px-5 py-3 rounded-md mt-4 transition">
                Shop Now
              </button>
            </NavLink>
          </div>

          {/* Image Section */}
          <div className="justify-self-center-safe ">
            <img
              src={rec.images[0]}
              alt={rec.title}
              className=" w-60 md:w-100 md:h-100 object-cover rounded-full transition-transform duration-300 hover:scale-105"
            />
          </div>
        </div>
      </SwiperSlide>
    ))}
  </Swiper>

 



{/*
      <div className=' grid  md:grid-cols-3 lg:grid-cols-3  sm:grid-cols-2 grid-cols-1  justify-center text-center m-auto  cursor-pointer  bg-gray-500' >

<div>
  <img src="img/performe.jpg" alt="" />
  <input type="button" value={"fragrances"} onClick={(s)=> setSea(s.target.value) } />
  
</div> 
 
{Cato.slice(3,9).map((daas)=>{
    
   return(
    <div >
<NavLink to={`/category`}>

<input type="button" className='cursor-pointer w-46  py-2 text-center  my-3 mx-3 border-2 uppercase bg-cyan-600 rounded-3xl ' value={daas} onClick={(s)=> setSea(s.target.value) }/>
</NavLink>
</div>
  )}) }


</div>*/}
          </div>
</section>

 
<Collection/>

<Shipping   />  
<div className='bg-blue-100 pt-5 mt-5'>
<h1 className='text-3xl text-center '>Category</h1>

   <div className='grid md:grid-cols-3 sm:grid-cols-2   w-1/2 m-auto gap-5 py-5 my-5  items-center place-items-center' >
<div className='hover:border-2 hover:border-gray-400 p-5 rounded-2xl '>

  <NavLink to={`/category`}>
<img src={tshirt} alt="" className='w-40 h-40 ' />
<input type="button" className='cursor-pointer  text-2xl' value={"mens-shirts"} onClick={(s)=> setSea(s.target.value) }/>
</NavLink>
</div>

<div className='hover:border-2 hover:border-gray-400 p-5 rounded-2xl '>

  <NavLink to={`/category`}>
<img src={veg} className='w-40 h-40 ' alt="" />
<input type="button" className='cursor-pointer text-2xl ' value={"groceries"} onClick={(s)=> setSea(s.target.value) }/>
</NavLink>
</div>


<div className='hover:border-2 hover:border-gray-400 p-5 rounded-2xl '>

  <NavLink to={`/category`}>
<img src={performe} className='w-40 h-40 ' alt="" />
<input type="button" className='cursor-pointer text-2xl ' value={"fragrances"} onClick={(s)=> setSea(s.target.value) }/>
</NavLink>
</div>


<div className='hover:border-2 hover:border-gray-400 p-5 rounded-2xl '>

  <NavLink to={`/category`}>
<img src={bag} className='w-40 h-40 ' alt="" />
<input type="button" className='cursor-pointer text-2xl ' value={"womens-bags"} onClick={(s)=> setSea(s.target.value) }/>
</NavLink>
</div>

<div className='hover:border-2 hover:border-gray-400 p-5 rounded-2xl '>

  <NavLink to={`/category`}>
<img src={dresses} className='w-40 h-40 ' alt="" />
<input type="button" className='cursor-pointer text-2xl ' value={"womens-dresses"} onClick={(s)=> setSea(s.target.value) }/>
</NavLink>
</div>

<div className='hover:border-2 hover:border-gray-400 p-5 rounded-2xl  '>

  <NavLink to={`/category`}>
<img src={smart} className='w-40 h-40 ' alt="" />
<input type="button" className='cursor-pointer text-2xl ' value={"smartphones"} onClick={(s)=> setSea(s.target.value) }/>
</NavLink>
</div>
</div>

</div>
    </>
  )
}

export default List
