import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { gets } from './Axios'
import { useDispatch,useSelector } from 'react-redux'
import {  Brand, Category, Todolist } from './Redux/Slice/Action'
import {Card} from './Card/Card'
import Filter from './Filter'
import Shop from './Shop'
import Scroll from './Scroll'

import NoCart from "../assets/bag.png"
const Product = () => {

const count = useSelector(state => state.counter.task)
const faltu = useSelector(state => state.counter.free)
const [All, setAll] = useState([]);
const [Visula, setVisula] = useState(8);

  const [page, setPage] = useState(0);
  const itemsPerPage = 8;

  const startIndex = page * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const visibleItems = faltu.slice(startIndex, endIndex);
useEffect(() => {
  if (faltu && faltu.length > 0) {
    setAll(faltu)
  }
}, [faltu]);


  return (
    <>
      <h1 className='uppercase  mx-4 my-2'>Search product</h1>
<div className="grid grid-cols-12 gap-4">
  {/* Sidebar (3/12 columns) */}
  <div className="lg:col-span-3 md:col-span-4  sm:col-span-5 col-span-6 ">
    <Filter />
  </div>

  {/* Main content (9/12 columns) */}

  {visibleItems.length > 0 ?    
  <div className=" lg:col-span-9 md:col-span-8  sm:col-span-7 col-span-6 grid lg:grid-cols-4 sm:grid-cols-2 md:grid-cols-3 md:gap-4 sm:gap-2 lg:gap-6 lg:mx-8 md:mx-5 sm: mx-3">
    {visibleItems.map((shop) => (
      <Card key={shop.id} card={shop} />
    ))}


  
</div>

  :<img src={NoCart} alt=""  className='w-100'/>}

     
  </div>
    <div className=" flex ms-3 my-3 justify-center items-center">
       
       {faltu.length > 2 && 
       
        <><button
                disabled={page < 1}
                className="bg-gray-400 uppercase px-4 py-2  mx-2 rounded cursor-pointer disabled:opacity-50"
                onClick={() => setPage((prev) => prev - 1)}
              >
                Prev
              </button><p className="text-lg font-semibold">{page + 1}</p><button
                disabled={endIndex > faltu.length}
                className="bg-gray-400 uppercase px-4 mx-2 py-2 rounded cursor-pointer disabled:opacity-50"
                onClick={() => setPage((prev) => prev + 1)}
              >
                  Next
                </button>
                
                </>
        }
      </div>

<Shop/>

    </>
  )
}

export default Product
