import React, { useState } from 'react'

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import { useSelector } from 'react-redux';
const Checkout = () => {

    const [Details, setDetails] = useState({names:"",emails:"",phone:"",addres:"",city:""});
const maps= useSelector(state => state.counter.Cartss)

const price= useSelector(state => state.counter.value)
    console.log(Details)
function handle(e) {
  setDetails({...Details,
    [e.target.name]:e.target.value})  
}

  return (
    <>
<h1 className='text-4xl my-4 mx-5'>CheckOUT</h1>
{/* 
           <label htmlFor="">Name</label>
     <input type="text" className='bg-amber-400 w-100' value={Details.names}  name='names'  onChange={handle} />

           <label htmlFor="">Email</label>
     <input type="email" className='bg-amber-400 w-100' value={Details.emails} name='emails' onChange={handle}  />


           <label htmlFor="">PHONE</label>
     <input type="tel"  className='bg-amber-400 w-100'value={Details.phone} name='phone' onChange={handle} />


 
      <label htmlFor="">Addreses</label>
     <input type="text" className='bg-amber-400 w-100'  value={Details.addres}  name='addres'  onChange={handle} />

      <label htmlFor="">City</label>
     <input type="text" className='bg-amber-400 w-100'  value={Details.city}  name='city'  onChange={handle} />

       
      <div>
      
     <input type="radio"  className='mx-2'  value={Details.addres}   />
       <label htmlFor="">Cash on Delivery</label>
</div> */}
<div className='grid grid-cols-2 w-300 m-auto gap-5'>
   
    <div className="mx-5 place-content-start">
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Billing Information</Typography>
        </AccordionSummary>

        <AccordionDetails>
<label htmlFor="">Name</label>

          <Typography>
          <div>
           
     <input type="text" className='bg-gray-400 text-white  w-100' value={Details.names}  name='names' required onChange={handle} />

          <Typography>
          <label htmlFor="">Email</label>
</Typography>
     <input type="email" className='bg-gray-400 text-white  w-100' value={Details.emails} name='emails' required onChange={handle}  />

          <Typography>
          <label htmlFor="">Phone</label>
</Typography>

           
     <input type="tel"  className='bg-gray-400 text-white  w-100'value={Details.phone} name='phone' required onChange={handle} />
</div>
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Shipping Information</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          
      
          <Typography>
          <label htmlFor="">Address</label>
</Typography>
     <input type="text" className='bg-gray-400 text-white w-100'  value={Details.addres} required name='addres'  onChange={handle} />

     
          <Typography>
          <label htmlFor="">City</label>
</Typography>
     <input type="text" className='bg-gray-400 text-white  w-100'  value={Details.city}  name='city' required onChange={handle} />

          </Typography>
        </AccordionDetails>
      </Accordion>



      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Payment Method</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
    
     <input type="radio" className='mx-4'   />
     <label htmlFor="">Cash ON Delivery</label>
     </Typography>
            
      
 
        </AccordionDetails>
      </Accordion>




    </div>

<div className='border-2 border-gray-500 py-4 w-150'>

    
      {maps.map((daad)=>{
       console.log(daad)
    return(
    
      <>
      <div className=' flex '>
    
    <img src={daad
    .images[0]
    } alt="" className='w-30 h-30 mx-6 my-5' />
  
    
    
    <div className='grid grid-cols-2 w-100 '>
  <div className='my-4'>
    <p className='pt-6'> {daad.
    title
    }</p>
    <p className=''> Price : {daad.
    price
    }$</p>
   
    <p className='' >  {daad.
    price
    } x  {daad.quantity
    } 
    
    </p>
  
    </div>
<div className='text-end mt-8'>
<p>SubTotal</p>
<p> Price : {daad.
    price *daad.quantity
    }$</p>
</div>
</div>
      </div>
    
    
    
      </>
    )
      })}
 
  <div className='border-t-2 grid grid-cols-2 border-t-gray-400 border-b-2 border-b-gray-400 pt-5'>

  <h3 className='w-60 mx-auto'>Total Price</h3>
<p className='text-end  mx-5 pb-4'>{Math.ceil(price)}$</p>

</div>
         <div className=' text-center w-100 m-auto '>

      <button className='px-6 border-2 rounded-2xl cursor-pointer mt-4 py-3 hover:bg-cyan-500 hover:text-white'  >Place Order</button>
    </div>
</div>

</div>
    </>
  )
}

export default Checkout
