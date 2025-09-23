import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Card } from './Card/Card';
import { useDispatch } from 'react-redux';
import { Brand, Category, fill, Grocery } from './Redux/Slice/Action';
import Filter from './Filter';
const Shop = () => {

const [Getting, setGetting] = useState([]);

    const dis=useDispatch()
const shop= async()=>{

const fetc= await axios.get("https://dummyjson.com/products?limit=120")

console.log(fetc.data.products)
setGetting(fetc.data.products)
dis(Grocery(fetc.data.products))

}
 const getUniqueCategory = (data, property) =>{
        let newVal = data?.map((curElem) =>{
       
            return curElem[property]
        })
        newVal = ["All",...new Set(newVal)]
        return newVal
      }
  const cats=  getUniqueCategory(Getting,"category")
console.log(cats)

dis(Category(cats))

 const getUniqueBrand = (data, property) =>{
        let newVal = data?.map((curElem) =>{
       
            return curElem[property]
        })
        newVal = ["All",...new Set(newVal)]
        return newVal
      }
 const brands=  getUniqueBrand(Getting,"brand")
dis(Brand(brands))




useEffect(() => {
    shop()
}, []);
  return (
    <div>

    </div>
  )
}

export default Shop
