import { createSlice } from '@reduxjs/toolkit'
import { toast } from 'react-toastify';

const initialState = {
 task:[],
 brand:[],
 cate:[],
 free:[],
 nav:[],
 shops:[],
fills:[],
product:[],
Cartss:[],
value:"",
range:"",
collect:[],
track:""
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
  Todolist: (state, action) => {

  state.task= action.payload;
    },
 Category: (state, action) => {

  state.cate = action.payload;
    },
 Brand: (state, action) => {

  state.brand= action.payload;
    },
Filters: (state, action) => {
 
  state.free= action.payload;
 
    },
collects: (state, action) => {
 
  state.collect= action.payload;
 
    },
    Routing: (state, action) => {
 
  state.nav= action.payload;
 
    },
       fill: (state, action) => {
 
  state.shops= action.payload;
 
    },
      Grocery: (state, action) => {
 
  state.shops= action.payload;
 
    },
      Prodct: (state, action) => {
 
  state.product= action.payload;
 
    },

      Carts: (state, action) => {

  const newItem= action.payload;
   const itemInCart = state.Cartss.find((item) => item.id === newItem.id)
 console.log(itemInCart)

if (itemInCart) {
   
// const update=  state.Cartss.map( item =>
//     item.id === newItem.id ? { ...item, quantity: item.quantity + 1 } : item
//   )

 itemInCart.quantity += 1;
  toast.warning("data in cart")
 

}else{

  state.Cartss.push( { ...newItem, quantity: 1 });
    toast.success("Add item")}

    },

Delete: (state, action) => {
 
const  deletItem= action.payload;
toast.error("delete data")
state.Cartss=state.Cartss.filter((del)=> del.id !== deletItem)
 
    },

   increment: (state,action) => {

  const product = state.Cartss.find(p => p.id === action.payload);
      if (product) product.quantity += 1;


    //  state.value += 1
    },
    decrement: (state,action) => {
      const product = state.Cartss.find(p => p.id === action.payload);
      if (product) product.quantity -= 1;
  /* if (state.value==0) {
    state.value=0
   }else{
      state.value -= 1}
    },*/},

Ranges: (state, action) => {
 
  state.range= action.payload;
 
    },

Price: (state, action) => {
 
  state.value= action.payload;
 
    },
Tracking: (state, action) => {
 
  state.track= action.payload;
 
    },
  },
})
export const { Todolist,Category,Brand,Filters ,Tracking,Routing,dummy,Grocery,fill,Prodct,Carts ,Delete,increment,decrement,Ranges,Price,collects} = counterSlice.actions

export const counter= counterSlice.reducer

