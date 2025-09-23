import axios from 'axios'
import React, { useEffect } from 'react'
import { gets } from './Axios'
import { useDispatch,useSelector } from 'react-redux'
import {  Brand, Category, Todolist } from './Redux/Slice/Action'
import {Card} from './Card/Card'
import Filter from './Filter'
import Shop from './Shop'
const Product = () => {

const count = useSelector(state => state.counter.task)
const faltu = useSelector(state => state.counter.free)



console.log(faltu)
  const dispatch = useDispatch()

async function all(params) {
    const res= await axios.get("https://fakestoreapi.in/api/products?limit=150")
const gett=res.data
console.log(gett.products.brand)
dispatch(Todolist(gett.products))
console.log(gett)
}

// it will of till api is working and then we will open this
/*
 const getUniqueCategory = (data, property) =>{
        let newVal = data?.map((curElem) =>{
       
            return curElem[property]
        })
        newVal = ["All",...new Set(newVal)]
        return newVal
      }
  const cat=  getUniqueCategory(count,"category")
console.log(cat)

dispatch(Category(cat))

const brand=getUniqueCategory(count,"brand")
dispatch(Brand(brand))

console.log(brand)
console.log(count)
useEffect(() => {
    all()
}, []);
*/

  return (
    <>
      <h1>product</h1>
<div className="grid grid-cols-12 gap-4">
  {/* Sidebar (3/12 columns) */}
  <div className="lg:col-span-3 md:col-span-4  sm:col-span-5 col-span-6 ">
    <Filter />
  </div>

  {/* Main content (9/12 columns) */}
  <div className=" lg:col-span-9  md:col-span-8  sm:col-span-7 col-span-6 grid lg:grid-cols-4 sm:grid-cols-2 md:grid-cols-3 md:gap-4 sm:gap-2 lg:gap-6 lg:mx-8 md:mx-5 sm: mx-3">
    {faltu?.map((shop) => (
      <Card key={shop.id} card={shop} />
    ))}
  </div>
</div>

<Shop/>

    </>
  )
}

export default Product
