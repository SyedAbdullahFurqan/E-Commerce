import React from 'react'
import e from "./img/ecoome.jpg"
const About = () => {
  return (

    <>


    <section className='w-full h-screen '>
<div>
      <h1 className='text-3xl text-center border-t-2 bord'>About US</h1></div>
    <div className='grid sm:grid-cols-2 grid-cols-1 gap-6 sm:gap-5 place-items-center '>

      <div className='mt-5 place-content-end-safe mx-4'>

  <img src={e} alt="" className='w-full rounded-3xl' />
      </div>
 <div className=' sm:mx-4 py-5 text-center sm:text-start '>
  <p className=''>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic in consequatur ullam exercitationem sunt quis nobis blanditiis alias laudantium eveniet!</p>
 
 <p className='my-4 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic in consequatur ullam exercitationem sunt quis nobis blanditiis alias laudantium eveniet!</p>
 <h1 className='text-3xl my-3'>Our Misoon</h1>
 <p className=''>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae, voluptatum atque? ipsum dolor sit amet consectetur adipisicing elit. Hic
   in consequatur ullam exercitationem 
   
   sunt quis nobis blanditiis alias laudantium eveniet!</p>
 
 </div>
    </div>
</section>
    </>
  )
}

export default About
