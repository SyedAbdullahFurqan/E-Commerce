import React, { useState } from 'react'

const Contact = () => {
const model={name:'',email:"",password:""}
  const [Inp, setInp] = useState(model)


  const [Change,setChange] = useState(true)
function hand(e) {
setInp({
  ...Inp,
  [e.target.name]:e.target.value
})
}

  
function con(d) {
  d.preventDefault();
  setInp(
{name:"",email:"",password:""}
  )
}

  return (
    <div>

<div className='grid grid-cols-2 w-full h-full'>

    

<div className='bg-gray-900 w-full h-screen flex flex-col justify-center items-center text-center'>

<h4 className=' text-3xl font-medium font-sans uppercase my-4 text-cyan-300'>Furqan E-Commerce</h4>
<h3 className=' font-medium font-sans uppercase my-4 text-white'> For Any issue <span>Contact us</span> </h3>
<ul className='list-decimal text-white uppercase'>

  <li>
    Bookmark your readings.
  </li>

    <li c>
 Message Us your favorite Product
  </li>
    <li>
  Tell US ANYTHING WRONG SO WE CAN SOLVE IT
  </li>
</ul>
</div>



<div className=' bg-gray-600 w-full h-screen justify-center '>

<div className=' text-center mt-10'>
<h1 className='text-cyan-300'>Contact us</h1>

<h3 className='mt-10 text-white' > Please enter your details.</h3>
</div>

<form   className='px-6 py-5 text-center my-20'>

<div className='my-3 w-30 sm:50 md:w-70 lg:w-90 text-white'>Name</div>
<input type="text" name='name' className='bg-white w-40 sm:60 md:77 lg:w-80 ' value={Inp.name} onChange={hand} />


<div className=' my-3  w-30 sm:50 md:w-70 lg:w-90 text-amber-50'>Email</div>
<input type="email" name='email'className='bg-white w-40 sm:70 md:80 lg:w-80' value={Inp.email} onChange={hand}/>



<div className=' my-4  w-30 sm:50 md:w-70 lg:w-90 text-white'>Message</div>
<textarea className='  bg-white w-40 sm:60 md:70 lg:w-80'  name='password'  value={Inp.password} onChange={hand}/>
<br />
<input type="submit" className='cursor-pointer mt-3  rounded-2xl text-2xl bg-white  w-50 py-1' value="sumbit" />

</form>
      </div>

</div>


    </div>
  )
}

export default Contact
