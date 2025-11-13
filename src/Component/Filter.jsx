import React, { useEffect, useState } from 'react'
import { useDispatch ,useSelector} from 'react-redux'
import { Filters } from './Redux/Slice/Action'


const Filter = ({pages,setPage}) => {
const filler=useSelector(state => state.counter.fills)
const category=useSelector(state => state.counter.cate)
const brand=useSelector(state => state.counter.brand)
const task = useSelector(state => state.counter.task)
console.log(task)
console.log(brand)

const grow = useSelector(state => state.counter.shops)
console.log(grow)

const [Brand, setBrand] = useState("All");
const [Category, setCategory] = useState("All");

const [Search, setSearch] = useState("");
console.log(category)
console.log(Category)
const dis=useDispatch()
console.log(filler)



function reset(params) {
  setBrand("All")
   setCategory('All')
   setSearch("")
   setPage(0)
}




// const fil = task.filter((das) => {
//   const matchesSearch = das.title.toLowerCase().includes(Search.toLowerCase());

// //   const matchesCategory =
// //     Category === "All" || das.category === Category;

//   const matchesBrand =
//     Brand === "All" || das.brand === Brand;

//   return matchesSearch  && matchesBrand ;
// });
// this api used but now unavialble so i used diffenert

/*
useEffect(() => {
    
const fil = task.filter((das) => {
  const matchesSearch = das.title.toLowerCase().includes(Search.toLowerCase());

//   const matchesCategory =
//     Category === "All" || das.category === Category;

  const matchesBrand =
    Brand === "All" || das.brand === Brand;

const categorys= Category=="All"|| das.category===Category

  return matchesSearch  && matchesBrand && categorys;
});
dis(Filters(fil))


}, [Search,Brand,Category,dis,task]);

*/




useEffect(() => {
const fil = grow.filter((das) => {
  const matchesSearch = das.title.toLowerCase().includes(Search.toLowerCase());

//   const matchesCategory =
//     Category === "All" || das.category === Category;

  const matchesBrand =
    Brand === "All" || das.brand === Brand;

const categorys= Category=="All"|| das.category===Category

  return matchesSearch  && matchesBrand && categorys;
});
dis(Filters(fil))


}, [Search,Brand,Category,dis,task,grow]);

  return (
    <div>

      <div className='mx-2'>

<input type="text"  className='bg-gray-400 w-40 sm:w-full 'placeholder='Search' value={Search} onChange={(d)=> setSearch(d.target.value) } />

<div>

<h1 className='my-2'>Categoryy</h1>

<div >


{
  category.map((cates)=> {
  return(
<div className=' '>
 <input
          type="checkbox"
          className="mx-2"
          value={cates}
          checked={Category === cates}   // ✅ correct condition
          onChange={(s) => setCategory(s.target.value)} // ✅ set selected
        />



<button className=' text-[12px] sm:text-[20px]'>{cates}</button>
    </div>

  )
})
}
</div>



</div>

<div>
<h1 className='mt-4'>Brand</h1>
{/* <select name="" id="" 
             className='bg-white  w-20 p-2 border-gray-200 border-2 rounded-md ' 
            >
{Array(brand).map((datas)=>{

 return <option value={datas} className=' ' >{datas}</option>

})}
    
</select> */}


<select
  className="bg-white w-40 p-2 my-3 border-gray-200 border-2 rounded-md"
  value={Brand} onChange={(e)=> setBrand(e.target.value)}
>
  {brand.map((datas, index) => (
    <option key={index} value={datas}>
      {datas}
    </option>
  ))}
</select>

</div>

{/* <div>

    <h1>Price Range</h1>
<input type="range" name="" id="" />

</div> */}

<div className='mt-3'>
    <button className='py-2 px-6 bg-gray-400 cursor-pointer' onClick={reset }>Reset</button>
</div>


      </div>



    </div>
  )
}

export default Filter
