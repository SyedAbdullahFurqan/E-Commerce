import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import {useDispatch,useSelector}from 'react-redux'

// import required modules
import { EffectFade, Navigation, Pagination , EffectCoverflow} from 'swiper/modules';
import { gets } from './Axios';
import { Carts} from './Redux/Slice/Action';
import axios from 'axios';
import { NavLink } from 'react-router';
import List from './List';
import Shipping from './Shipping';
import Seller from './Seller';
import Scroll from './Scroll';



// import { Todolist } from './Redux/Slice/Action';
// import axios from 'axios';

const Home = () => {
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

          console.log( datas)
   ; // this is already an array
      setRes(getting.data); // set directly
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  }

    const addToCart = (product) => {
  
  dispac(Carts(product))
    };

// const cato= async ()=>{

//   const catego= await gets("/category")
// console.log(catego.data.
// categories
// )

// setCategories(catego.data.
// categories)
// }

//     const routes= async ()=>{
// const route= await axios.get(`https://fakestoreapi.in/api/products/category?type=${Fetch}`) 
// console.log("fetch",route.data.products)

// dispatch(Routing(route.data.products
// ))

//  }



useEffect(() => {
    Produc()

}, []);








/*
const task= useSelector(state => state.counter.task)
const home= useSelector(state => state.counter.cate)
console.log(home)
console.log(task)
 const getUniqueCategory = (data, property) =>{
        let newVal = data?.map((curElem) =>{
       
            return curElem[property]
        })
        newVal = ["All",...new Set(newVal)]
        return newVal
      }

useEffect(() => {
  const cats=  getUniqueCategory(task,"category")
  console.log(cats)
}, []);
*/


// this another api freak data

/*
 
  async function fetchProducts(category) {
    const res = await fetch(`https://api.escuelajs.co/api/v1/products/?${category}Id=4`);
    const data = await res.json();

  

const slice=data.slice(0,10)
 
 console.log(data)
 console.log(slice )

  
    setRes(slice);
  }

  useEffect(() => {
  
    fetchProducts("shoes");
  }, []);

*/




  return (
    <>
      



    {/* <div className="p-6">
      { && (
        <div className="mb-6">
          <h1 className="text-2xl font-bold">{category.name}</h1>
          <img src={category.image} alt={category.name} className="w-64 h-64 object-cover mt-4" />
        </div>
      )} */}







{/* 
     
    <section className="w-full h-screen">
      <div className="w-full bg-blue-800">
  

      <Swiper 
        spaceBetween={30}

        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[ Navigation, Pagination]}
        className="mySwiper  "
      >
         <div className=''>
          {Res.map((rec, index) => 
       
        <SwiperSlide key={index}>

         
      <div className='flex flex-col ms-6 md:flex-row gap-10 justify-center cursor-pointer my-20 md:my-0 items-center px-4'>
                          
                           <NavLink to={`/product/${rec.id}`}>
                                <div className='md:space-y-6 space-y-3'>
                                    <h3 className='font-semibold font-sans text-sm'>Powering Yoch the Best in Electronics</h3>
                                    <h1 className='text-3xl line-clamp-3  w-100' >{rec.title}</h1>
                             
                                    <button className='bg-amber-700  text-white px-3 py-2 rounded-md cursor-pointer mt-2'>Shop Now</button>
                                </div>
</NavLink>
                                <div className='bg-amber-400'> 
                                    <img src={rec.image} className=' bg-black w-full h-160 hover:scale-105 transition-all shadow-2xl shadow-cyan-400'/>
                                </div>
                            </div>
                       

</SwiperSlide>
          )}
          </div>
</Swiper>
      </div>

<div className='flex  gap-6 justify-center py-4 bg-amber-500 '>

  {Categories.map((dasa)=>{
   
    return(
       <div className=''>
 <NavLink to={`/category`}>
<input type="button" className='cursor-pointer w-26 flex-wrap py-2 mx-0 text-center  border-2 uppercase bg-cyan-600 rounded-3xl ' value={dasa} onClick={(s)=> setFetch(s.target.value) }/>
</NavLink>
</div>  )    }) }
</div>
    </section>

this my seller product card
  <h1 className='text-3xl text-center my-5 uppercase'>Best Sells Product</h1>
 <div className="grid grid-cols-1   sm:grid-cols-2 md:grid-cols-3  sm:gap-4 md:gap-6 sm:mx-5  md:mx-7 ">
  {Res?.slice(1, 12).map((saad) => (
    <div
      key={saad.id}
      className="border mt-5 rounded-lg p-4 shadow hover:shadow-lg  transition"
    >
        <NavLink to={`/Clothes/${saad.id}`}>
=
      <div className="relative w-full h-64 overflow-hidden rounded-lg cursor-pointer">
      
        <img
          src={saad.images[0]}
          alt={saad.title}
          className="w-full h-full absolute top-0 left-0"
        />

    =
        <img
          src={saad.images[1]}
          alt={saad.title}
          className="w-full h-full  absolute top-0 left-0 opacity-0 hover:opacity-100 transition-opacity duration-300"
        />
      </div>

      <h2 className="text-lg font-bold my-4">NAME: {saad.title}</h2>
         </NavLink>
    

          <div className='grid grid-cols-2 py-4  '>
             <p className="text-gray-600">PRICE: ${saad.price}</p>
             
                  <button className='bg-red-500 w-30 md:w-27 py-1 lg:w-30 text-amber-50 rounded-3xl cursor-pointer font-semibold justify-self-end-safe '     onClick={() => addToCart(saad)} > Add to Cart</button>
    
          </div>
      
  
    </div>
    
  ))}
</div>

 */}


 




<List/>
<Seller/>
 <Scroll/>
    </>
  )
}

export default Home
