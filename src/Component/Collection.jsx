import React, { useState ,useEffect } from 'react'

import axios from 'axios';
import { NavLink } from 'react-router';
import List from './List';
import Shipping from './Shipping';
import { useDispatch, useSelector } from 'react-redux';
import { collects } from './Redux/Slice/Action';

const Collection = () => {


const [Res, setRes] = useState();

// const dispatch=useDispatch()
// const [Categories, setCategories] = useState([]);
// const [Fetch, setFetch] = useState("");

    // const NavLinks = useSelector(state => state.counter.nav)

  const dispac=useDispatch()
  
  async function Produc() {
    try {
      const getting = await axios.get("https://api.escuelajs.co/api/v1/products");

     const datas= getting.data
console.log(datas)
      
  dispac(collects(datas))
      setRes(getting.data); // set directly

    
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  }

    const addToCart = (product) => {
  
  dispac(Carts(product))
    };
    useEffect(() => {
        Produc()
    }, []);
  return (
    <div>
      <h1 className='text-3xl text-center my-5 uppercase'>Best Sells Product</h1>
 <div className="grid grid-cols-1   sm:grid-cols-2 md:grid-cols-3  sm:gap-4 md:gap-6 sm:mx-5  md:mx-7 ">
  {Res?.slice(1, 12).map((saad) => (
    <div
      key={saad.id}
      className="border mt-5 rounded-lg p-4 shadow hover:shadow-lg  transition"
    >
        <NavLink to={`/Clothes/${saad.id}`}>
      {/* Image wrapper */}
      <div className="relative w-full h-64 overflow-hidden rounded-lg cursor-pointer">
        {/* First image */}
        <img
          src={saad.images[0]}
          alt={saad.title}
          className="w-full h-full absolute top-0 left-0"
        />

        {/* Hover image */}
        <img
          src={saad.images[1]}
          alt={saad.title}
          className="w-full h-full  absolute top-0 left-0 opacity-0 hover:opacity-100 transition-opacity duration-300"
        />
      </div>

      {/* Product info */}
      <h2 className="text-lg font-bold my-4">NAME: {saad.title}</h2>
         </NavLink>
    

          <div className='grid grid-cols-2 py-4  '>
             <p className="text-gray-600">PRICE: ${saad.price}</p>
             
                  <button className='bg-red-500 w-30 md:w-27 py-1 lg:w-30 text-amber-50 rounded-3xl cursor-pointer font-semibold justify-self-end-safe '     onClick={() => addToCart(saad)} > Add to Cart</button>
    
          </div>
      
  
    </div>
    
  ))}
</div>
    </div>
  )
}

export default Collection
