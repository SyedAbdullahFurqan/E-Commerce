import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { gets } from './Axios'
import { useDispatch,useSelector } from 'react-redux'
import {  Brand, Category, Todolist } from './Redux/Slice/Action'
import {Card} from './Card/Card'
import Filter from './Filter'
import Shop from './Shop'
import Scroll from './Scroll'
const Product = () => {

const count = useSelector(state => state.counter.task)
const faltu = useSelector(state => state.counter.free)
const [All, setAll] = useState([]);
const [Visula, setVisula] = useState(8);
useEffect(() => {
  if (faltu && faltu.length > 0) {
    setAll(faltu)
  }
}, [faltu]);
const load= ()=> setVisula( prev=> prev + 8)

  return (
    <>
      <h1 className='uppercase  mx-4 my-2'>Search product</h1>
<div className="grid grid-cols-12 gap-4">
  {/* Sidebar (3/12 columns) */}
  <div className="lg:col-span-3 md:col-span-4  sm:col-span-5 col-span-6 ">
    <Filter />
  </div>

  {/* Main content (9/12 columns) */}
  <div className=" lg:col-span-9 md:col-span-8  sm:col-span-7 col-span-6 grid lg:grid-cols-4 sm:grid-cols-2 md:grid-cols-3 md:gap-4 sm:gap-2 lg:gap-6 lg:mx-8 md:mx-5 sm: mx-3">
    {faltu.slice(0,Visula)?.map((shop) => (
      <Card key={shop.id} card={shop} />
    ))}
<div className='my-3'>
      <button onClick={load} className='bg-gray-400 uppercase text-center w-50 sm:w-60 px-4 py-2 mt-4 cursor-pointer   '>load</button></div>
      <Scroll/>
  </div>

</div>

<Shop/>

    </>
  )
}

export default Product
