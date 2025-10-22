import React from 'react'
   import { Carts} from './Redux/Slice/Action';
import { useDispatch, useSelector } from 'react-redux'; 
import { NavLink } from 'react-router';
import saad from "./Saad.json"
const Seller = () => {
  console.log(saad)

const getData=  useSelector(state => state.counter.collect)
console.log(getData)

// import { Todolist } from './Redux/Slice/Action';
// import axios from 'axios';


// const dispatch=useDispatch()
// const [Categories, setCategories] = useState([]);
// const [Fetch, setFetch] = useState("");

    // const NavLinks = useSelector(state => state.counter.nav)

  const dispac=useDispatch()
  
 

    const addToCart = (product) => {
  
  dispac(Carts(product))
    };
 
  return (
    <div>
      <h1 className='text-3xl text-center my-5 uppercase'>New collection arrive</h1>
 <div className="grid grid-cols-1   sm:grid-cols-2 md:grid-cols-3  sm:gap-4 md:gap-6 sm:mx-5  md:mx-7 ">
  {saad?.slice(13,22).map((saad) => (
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
             <p className="text-gray-600">PRICE: {saad.price}$</p>
             
                  <button className='bg-red-500 w-30 md:w-27 py-1 lg:w-30 text-amber-50 rounded-3xl cursor-pointer font-semibold justify-self-end-safe '     onClick={() => addToCart(saad)} > Add to Cart</button>
    
          </div>
      
  
    </div>
    
  ))}
</div>
    </div>
  )
}

export default Seller
