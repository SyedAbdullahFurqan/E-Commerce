import React, { useEffect, useState } from 'react'
import { FaChevronUp } from "react-icons/fa";
const Scroll = () => {

    const [Off, setOff] = useState(0);
function after(params) {
    console.log(window.pageYOffset)
    setOff(window.pageYOffset)
}

window.addEventListener("scroll",after)
    function scrolls(params) {
   window.scrollTo({top:0,behavior:'smooth'})
   
    }
    useEffect(() => {
        after()
    }, [Off]);
  return (
    <div>
{Off > 403 &&(

    <div className=' cursor-pointer'>
      <button onClick={scrolls} className='bg-cyan-500 p-3 fixed bottom-3 right-0 cursor-pointer '><FaChevronUp /></button>
    </div>)}

    </div>
  )
}

export default Scroll
