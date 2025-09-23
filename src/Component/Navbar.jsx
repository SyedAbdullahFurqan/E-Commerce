import React from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router'

 export const Navbar = () => {
  const item = useSelector(state => state.counter.Cartss)
  return (
    <>
 <div className=''> 
        <nav className=' w-full flex items-center justify-between  bg-gray-700 sm:px-3 sm:py-3 px-2 py-2 md:px-6 md:py-4 '>
            <div>

                <h1 className=''>    <NavLink  to={"/"}   style={({isActive})=>{

return{color:isActive ?"white":"Lightblue",textDecoration:"none"}
        } } >Navbar</NavLink></h1>
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

     

        <li className=''>
         <NavLink to={"/Cart" }      style={({isActive})=>{

return{color:isActive ?"white":"Lightblue",textDecoration:"none"}
        } }  >Cart </NavLink>   

        </li>
<p className='text-amber-50'>{item.length} </p> 
   <li>
         <NavLink to={"/Self" }      style={({isActive})=>{

return{color:isActive ?"white":"Lightblue",textDecoration:"none"}
        } }  >ABOUTS</NavLink>   

        </li>


        
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


