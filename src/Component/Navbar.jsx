import React from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router'
import { CgShoppingCart } from "react-icons/cg";
import { LuShoppingBag } from "react-icons/lu";
 export const Navbar = () => {
  const item = useSelector(state => state.counter.Cartss)
  const gets=  JSON.parse(localStorage.getItem("cartItems"))
  return (
    <>
  <div className=''> 
        <nav className=' w-full flex items-center justify-between gap-4  bg-gray-700 sm:px-3 sm:py-2 px-2 py-2 md:px-6 md:py-3'>
            <div className='flex'>
<span className='text-3xl text-green-400 mx-2'><LuShoppingBag /></span>
                <h1 className='text-2xl'>    <NavLink  to={"/"}   style={({isActive})=>{

return{color:isActive ?"white":"Lightblue",textDecoration:"none"}
        } } >   ShopZone</NavLink></h1>
          </div>

      
    <ul className=' flex md:gap-5 sm:gap-3 gap-2 text-[10px] sm:text-[20px]  '>

       <li className=' '> 
    <NavLink  to={"/"}   style={({isActive})=>{

return{color:isActive ?"white":"Lightblue",textDecoration:"none"}
        } } >Home</NavLink>
        </li>

    <li>
       <NavLink to={"/product"}  style={({isActive})=>{

return{color:isActive ?"white":"Lightblue",textDecoration:"none"}
        } }>Product</NavLink >
        </li>
 <li>
         <NavLink to={"/About" }      style={({isActive})=>{

return{color:isActive ?"white":"Lightblue",textDecoration:"none"}
        } }  >ABOUTS</NavLink>   

        </li>

     
  {/* {item.length > 0 &&  }  */}
     <li className=' sm:text-4xl text-2xl '>
         <NavLink to={"/Cart" }      style={({isActive})=>{

return{color:isActive ?"white":"Lightblue",textDecoration:"none"}
        } }  ><CgShoppingCart /></NavLink>      

        </li>
<p className='text-amber-50  '>{item.length} </p> 





 <li>
            <NavLink to={"/Contact"} style={({isActive})=>{

return{color:isActive ?"white":"Lightblue",textDecoration:"none"}
        } } >Contact  </NavLink> 
        </li>


  
        



    </ul>
 
</nav>
        </div>


    </>
  )
}


