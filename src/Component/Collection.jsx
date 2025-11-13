import React, { useState ,useEffect } from 'react'

import axios from 'axios';
import { NavLink } from 'react-router';
import List from './List';
import Shipping from './Shipping';
import { useDispatch, useSelector } from 'react-redux';
import { collects } from './Redux/Slice/Action';
import saad from "./Saad.json"
  import { Carts} from './Redux/Slice/Action';
const Collection = () => {


const getData=  useSelector(state => state.counter.collect)
// const dispatch=useDispatch()
// const [Categories, setCategories] = useState([]);
// const [Fetch, setFetch] = useState("");

    // const NavLinks = useSelector(state => state.counter.nav)

  const dispac=useDispatch()
  
//   async function Produc() {
//     try {
//       const getting = await axios.get("https://api.escuelajs.co/api/v1/products");

//      const datas= getting.data
// console.log(datas)
      
//   dispac(collects(datas))
   

    
//     } catch (error) {
//       console.error("Error fetching products:", error);
//     }
//   }

  const handleAddToCart = (product) => {
dispac(Carts(product));
  };

 
    // useEffect(() => {
    //     Produc()
    // }, []);
  return (
    <div>
      <h1 className='text-3xl text-center my-5 uppercase'>Best Sells Product</h1>
 <div className="grid grid-cols-1   sm:grid-cols-2 md:grid-cols-3  sm:gap-4 md:gap-6 sm:mx-5  md:mx-7 ">
  {saad?.slice(0,12).map((saads) => (
    <div
      key={saads.id}
      className="border mt-5 rounded-lg p-4 shadow hover:shadow-lg  transition"
    >
        <NavLink to={`/Clothes/${saads.id}`}>
      {/* Image wrapper */}
      <div className="relative w-full h-64 overflow-hidden rounded-lg cursor-pointer">
        {/* First image */}
        <img
          src={saads.images[0]}
          alt={saads.title}
          className="w-full h-full absolute top-0 left-0"
        />

        {/* Hover image */}
        <img
          src={saads.images[1]}
          alt={saads.title}
          className="w-full h-full  absolute top-0 left-0 opacity-0 hover:opacity-100 transition-opacity duration-300"
        />
      </div>

      {/* Product info */}
      <h2 className="text-lg font-bold my-4">NAME: {saads.title}</h2>
         </NavLink>
    

          <div className='grid grid-cols-2 py-2  '>
             <p className="text-gray-600">PRICE: {saads.price}$</p>
    <button
                className="bg-red-500 text-amber-50 cursor-pointer py-1  md:text-[15px] rounded-2xl font-semibold"
                onClick={() => handleAddToCart(saads)}
              > Adds to Cart</button>
          </div>
      
  
    </div>
    
  ))}
</div>
    </div>
  )
}

export default Collection
